import * as yup from 'yup';

export const authSchema = yup.object({
  user: yup.string().required('dssjfkjsdfkl'),
  password: yup.string().required().min(8),
});
