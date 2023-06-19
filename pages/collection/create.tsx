import { CreateCollectionForm } from '@/components/collection/createCollection/CreateCollectionForm';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const CreateCollection = () => {
  return (
    <WithWindowTitle title={'Create Collection'}>
      <CreateCollectionForm />
    </WithWindowTitle>
  );
};

CreateCollection.getLayout = getDefaultLayout;

export default CreateCollection;
