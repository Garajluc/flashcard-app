import { EditCollection } from '@/components/collection/editCollection/EditCollection';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const EditCollectionPage = () => {
  return (
    <WithWindowTitle title={'Edit Collection'}>
      <EditCollection />
    </WithWindowTitle>
  );
};

EditCollectionPage.getLayout = getDefaultLayout;

export default EditCollectionPage;
