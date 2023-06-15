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
      <a href="https://www.freepik.com/free-vector/no-data-concept-illustration_5928292.htm#query=empty%20state&position=1&from_view=keyword&track=ais">
        Image by storyset
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
