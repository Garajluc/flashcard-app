import { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';
import { WithTooltip } from '../../utils/WithTooltip';
import { FlipCardActionButtons } from './FlipCardActionButtons';
import { IconButton } from '@/components/utils/IconButton';
import { FlipCardSideStyled } from '@/components/theme/styles/FlipCardSideStyled';
import { FlipCardStyled } from '@/components/theme/styles/FlipCardStyled';
import { FlipCardWrapperStyled } from '@/components/theme/styles/FlipCardWrapperStyled';

export const FLIP_CARD_HEIGHT = '60vh';
export const FLIP_CARD_MIN_HEIGHT = '350px';

type FlipCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isIncorrectIncluded: boolean;
  handleKnown: () => void;
  handleStillLearning: () => void;
  handleIncludeIncorrect: () => void;
};

export const FlipCard = ({
  frontContent,
  backContent,
  isIncorrectIncluded,
  handleKnown,
  handleStillLearning,
  handleIncludeIncorrect,
}: FlipCardProps) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = useCallback(() => {
    setFlip(true);
  }, []);

  return (
    <Grid container justifyContent={'center'}>
      <FlipCardWrapperStyled item onClick={handleFlip}>
        <FlipCardStyled flip={flip}>
          <WithTooltip title={'Click to see the answer'} arrow={false}>
            <FlipCardSideStyled
              container
              justifyContent="center"
              alignItems="center"
            >
              {frontContent}
            </FlipCardSideStyled>
          </WithTooltip>
          <FlipCardSideStyled container isBackSide={true}>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              sx={{ height: '80%' }}
            >
              {backContent}
            </Grid>
            <Grid container item>
              <FlipCardActionButtons
                handleKnown={handleKnown}
                handleStillLearning={handleStillLearning}
              />
            </Grid>
          </FlipCardSideStyled>
        </FlipCardStyled>
      </FlipCardWrapperStyled>
      <Grid container sx={{ mt: 2 }}>
        <IconButton
          title={`Turn ${
            isIncorrectIncluded ? 'off' : 'on'
          }: Include wrongly answered`}
          icon={<RepeatIcon />}
          onClick={handleIncludeIncorrect}
          color={isIncorrectIncluded ? 'primary' : 'inherit'}
        />
      </Grid>
    </Grid>
  );
};
