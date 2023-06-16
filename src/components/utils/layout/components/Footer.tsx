import { Link, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FOOTER_HEIGHT } from '../LayoutDimensionsService';

export const Footer = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{ height: FOOTER_HEIGHT, mx: 5 }}
  >
    <Typography variant="caption">&copy; All rights reserved</Typography>
    <Typography variant="caption">
      Credits:{' '}
      <a href="https://www.freepik.com/free-vector/sleep-deprivation-abstract-concept-vector-illustration-insomnia-symptom-sleep-loss-deprivation-problem-mental-health-cause-treatment-clinical-diagnostic-sleeplessness-abstract-metaphor_11668173.htm#page=2&query=empty%20state%20lazy&position=0&from_view=search&track=ais">
        Image by vectorjuice
      </a>{' '}
      on Freepik
    </Typography>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <LinkedInIcon fontSize="small" />
      <Link
        href="https://www.linkedin.com/in/lucia-garajova/"
        target="_blank"
        variant="caption"
        color="textPrimary"
      >
        LinkedIn
      </Link>
    </Stack>
  </Stack>
);
