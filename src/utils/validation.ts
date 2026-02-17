import { z } from 'zod';

// List of free email providers for corporate email validation
const FREE_EMAIL_PROVIDERS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'mail.ru',
  'yandex.ru',
  'icloud.com',
  'protonmail.com',
];

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const isCorporateEmail = (email: string): boolean => {
  const domain = email.split('@')[1]?.toLowerCase();
  return !FREE_EMAIL_PROVIDERS.includes(domain);
};

export const getCorporateEmailWarning = (email: string): string | null => {
  if (!isCorporateEmail(email)) {
    return 'Please use your corporate email address for better service.';
  }
  return null;
};
