import { Tooltip } from '@mui/material';

type WithTooltipProps = {
  title: string;
  children: React.JSX.Element;
};

export const WithTooltip = ({ title, children }: WithTooltipProps) => {
  return (
    <Tooltip title={title} arrow placement="top-start">
      {children}
    </Tooltip>
  );
};
