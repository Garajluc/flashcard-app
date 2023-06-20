import { CreateCollection } from '@/components/collection/createCollection/CreateCollection';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const CreateCollectionPage = () => {
  return (
    <WithWindowTitle title={'Create Collection'}>
      <CreateCollection />
    </WithWindowTitle>
  );
};

CreateCollectionPage.getLayout = getDefaultLayout;

export default CreateCollectionPage;
