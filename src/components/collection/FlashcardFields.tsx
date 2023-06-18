import type { UseFieldArrayRemove } from 'react-hook-form';
import { Grid, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { ControlledTextField } from '../utils/form-hooks-related/ControlledTextField';
import { IconButton } from '../utils/IconButton';

export type FlashcardFieldsProps = {
  field: Record<'id' | 'question' | 'answer', string>;
  index: number;
  remove: UseFieldArrayRemove;
};

export const FlashcardFields = ({ index, remove }: FlashcardFieldsProps) => {
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{
        py: 4,
        px: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Grid container item xs={12} sm={1} justifyContent={'center'}>
        <Typography variant="h3" sx={{ opacity: 0.5 }}>
          {index + 1}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5} sx={{ pr: 4, pt: { xs: 2, sm: 0 } }}>
        <ControlledTextField
          name={`flashcards.${index}.question`}
          placeholder="Enter question"
          multiline
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={5} sx={{ pr: 4, pt: { xs: 4, sm: 0 } }}>
        <ControlledTextField
          name={`flashcards.${index}.answer`}
          placeholder="Enter answer"
          multiline
          fullWidth
        />
      </Grid>
      {index > 0 && (
        <Grid
          container
          item
          xs={12}
          sm={1}
          sx={{
            pt: { xs: 4, sm: 0 },
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <IconButton
            title="Delete"
            icon={<ClearIcon />}
            color="primary"
            tooltipPlacement="right"
            onClick={() => remove(index)}
          />
        </Grid>
      )}
    </Grid>
  );
};
