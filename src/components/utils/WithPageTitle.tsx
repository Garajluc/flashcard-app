import { Box, Typography } from '@mui/material';

type WithPageTitleProps = {
  children: React.ReactNode;
  title: string;
};

export const WithPageTitle = ({ children, title }: WithPageTitleProps) => {
  return (
    <>
      <Typography variant={'h1'} sx={{ wordBreak: 'break-word' }}>
        {title}
      </Typography>
      <Box
        sx={{
          mt: 8,
        }}
      >
        {children}
      </Box>
    </>
  );
};
