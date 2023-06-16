import { WithWindowTitle } from '@/components/utils/WithWindowTitle';
import { getDefaultLayout } from '@/components/utils/layout';

const CreateFlashCard = () => {
  return (
    <WithWindowTitle title={'Flash Card Create'}>
      <div>Flash Card Create</div>
    </WithWindowTitle>
  );
};

CreateFlashCard.getLayout = getDefaultLayout;

export default CreateFlashCard;
