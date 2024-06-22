import { SendMsgTemplate } from '@/app/components';
import { RESEND_API_KEY } from '@/app/settings';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Bestin John <message@bestinjohn.com>',
      to: ['bestinjohn1993@gmail.com'],
      subject: 'Hello world',
      react: SendMsgTemplate({
        firstName: body.firstName,
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
