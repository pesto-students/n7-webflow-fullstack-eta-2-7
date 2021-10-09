import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6),
}).required();
