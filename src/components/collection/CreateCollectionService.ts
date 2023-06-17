import * as yup from 'yup';

export const CollectionValidationSchema = yup.object().shape({
  category_name: yup.string().required('Collection name is required'),
  flashcards: yup.array().of(
    yup.object().shape({
      question: yup.string().required('Question is required'),
      answer: yup.string().required('Answer is required'),
    })
  ),
});
