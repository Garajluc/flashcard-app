import { EditCollectionForm } from '@/components/collection/editCollection/EditCollectionForm';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const EditCollection = () => {
  return (
    <WithWindowTitle title={'Edit Collection'}>
      <EditCollectionForm />
    </WithWindowTitle>
  );
};

EditCollection.getLayout = getDefaultLayout;

export default EditCollection;
