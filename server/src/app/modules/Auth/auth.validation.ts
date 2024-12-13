import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required', }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
const registerValidationSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({ required_error: 'First name is required' }),
      middleName: z.string().optional(),
      lastName: z.string({ required_error: 'Last name is required' }),
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({ required_error: 'Password is required' }),
    profilePhoto: z.string().optional(),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old password is required' }),
    newPassword: z.string({ required_error: 'New password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token is required' }),
  }),
});

const forgetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required' }),
  }),
});

const resetPasswordValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required' }),
    newPassword: z.string({ required_error: 'New password is required' }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
  registerValidationSchema,
};
