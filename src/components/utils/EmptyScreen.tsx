import Image from 'next/image';
import type { Theme } from '@mui/material';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

type EmptyScreenProps = {
  title: string;
  body: string | React.ReactNode;
  actionButton?: React.ReactNode;
};
export const EmptyScreen = ({
  title,
  body,
  actionButton,
}: EmptyScreenProps) => {
  const matchDownSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
      <Image
        src="/lazy.png"
        priority
        width={matchDownSM ? 200 : 350}
        height={matchDownSM ? 200 : 350}
        alt="upload cover"
      />
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ pb: 10 }}
      >
        <Typography variant="h2" sx={{ textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <Grid container justifyContent={'center'}>
          <Typography sx={{ textAlign: 'center' }}>{body}</Typography>
        </Grid>
        {actionButton}
      </Stack>
    </Stack>
  );
};
