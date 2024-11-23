import { z } from 'zod';

export const onboardingSchema = z.object({
    fullname: z.string().min(3).max(150),
    userName: z
    .string()
    .min(3)
    .max(150)
    .regex(/^[a-zA-z0-9]+$/i, {
        message: 'username can only contain letters, numbers and -'
    }),
});