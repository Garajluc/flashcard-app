import { Box, Typography } from '@mui/material';

type WithPageTitleProps = {
  children: React.ReactNode;
  title: string;
};

export const WithPageTitle = ({ children, title }: WithPageTitleProps) => {
  return (
    <>
      <Typography
        variant={'h1'}
        sx={{ wordBreak: 'break-word', textTransform: 'capitalize' }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          mt: '40px !important',
        }}
      >
        {children}
      </Box>
    </>
  );
};
