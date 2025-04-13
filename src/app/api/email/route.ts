import { Resend } from "resend";
import ContactFormEmailTemplate from "~/app/_components/contact-form-email/ContactFormEmailTemplate";
import type { FormSubmissionRequest } from "~/app/_types/email";
import { RESEND_API_KEY } from "~/settings/environment";

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  const body: FormSubmissionRequest =
    (await request.json()) as FormSubmissionRequest;

  const { name, email, message } = body;
  try {
    const emailTemplate = ContactFormEmailTemplate({
      name,
      email,
      message,
    }) as React.ReactElement;

    const { data, error } = await resend.emails.send({
      from: "Bestin John <message@bestinjohn.com>",
      to: ["bestinjohn1993@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: emailTemplate,
    });

    if (error) {
      return Response.json(error, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
