import { FormAdapter } from '../../utils/form-hooks-related/FormAdapter';

export const EditCollectionForm = () => {
  const onSubmit = () => {
    console.log('EditCollectionForm onSubmit');
  };
  return (
    <FormAdapter
      initialValues={{
        category_id: '',
        category_name: '',
        flashcards: [
          {
            question: '',
            answer: '',
          },
        ],
      }}
      onSubmit={onSubmit}
      // validationSchema={CollectionValidationSchema}
    >
      <>Edit</>
    </FormAdapter>
  );
};
