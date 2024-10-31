import { ContactFormEmailTemplate } from '@/app/components';
import { RESEND_API_KEY } from '@/app/settings';
import { FormSubmissionRequest } from '@/types';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  const body: FormSubmissionRequest = await request.json();
  const { name, email, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'Bestin John <message@bestinjohn.com>',
      to: ['bestinjohn1993@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmailTemplate({
        name,
        email,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
