import { Collections } from '@/components/collections/Collections';
import { WithPageTitle } from '@/components/utils/WithPageTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const CollectionsPage = () => {
  return (
    <WithPageTitle title={'Collections'}>
      <Collections />
    </WithPageTitle>
  );
};

CollectionsPage.getLayout = getDefaultLayout;

export default CollectionsPage;
