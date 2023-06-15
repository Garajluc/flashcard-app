import { Collections } from '@/components/collections/Collections';
import { getDefaultLayout } from '@/components/utils/layout/layouts';

const CollectionsPage = () => {
  return <Collections />;
};

CollectionsPage.getLayout = getDefaultLayout;

export default CollectionsPage;
