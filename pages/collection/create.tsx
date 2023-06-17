import { CreateCollection } from '@/components/collection/CreateCollection';
import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const CreateFlashCard = () => {
  return (
    <WithWindowTitle title={'Flash Card Create'}>
      <CreateCollection />
    </WithWindowTitle>
  );
};

CreateFlashCard.getLayout = getDefaultLayout;

export default CreateFlashCard;
