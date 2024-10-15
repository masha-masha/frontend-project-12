import { object, string, ref } from 'yup';

export const channelNamesShema = (channelNames) => object({
  name: string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .notOneOf(channelNames, 'Такое имя уже есть'),
});
export const signUpShema = () => object().shape({
  username: string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Поле обязательно'),
  password: string()
    .min(6, 'Минимум 6 символов')
    .required('Поле обязательно'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Пароли должны совпадать')
    .required('Поле обязательно'),
});