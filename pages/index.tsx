import { Collections } from '@/components/collections/Collections';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const CollectionsPage = () => {
  return (
    <WithWindowTitle title={'Collections'}>
      <Collections />
    </WithWindowTitle>
  );
};

CollectionsPage.getLayout = getDefaultLayout;

export default CollectionsPage;
