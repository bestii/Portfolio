import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Enter a valid email.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
