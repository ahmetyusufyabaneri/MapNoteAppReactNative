import * as Yup from 'yup';

export const AddNoteSchema = Yup.object().shape({
  title: Yup.string()
    .max(20, 'Title must be less than 20 characters!')
    .required('Required field!'),
  description: Yup.string()
    .max(100, 'Title must be less than 50 characters!')
    .required('Required field!'),
  time: Yup.string().required('Required field!'),
  date: Yup.string().required('Required field!'),
});
