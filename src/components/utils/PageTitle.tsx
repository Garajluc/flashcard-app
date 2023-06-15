import Typography from '@mui/material/Typography';

type PageTitleProps = { title: string };

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Typography variant={'h1'} sx={{ wordBreak: 'break-word' }}>
      {title}
    </Typography>
  );
};
