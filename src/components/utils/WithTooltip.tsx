import type { TooltipProps } from '@mui/material';
import { Tooltip } from '@mui/material';

type WithTooltipProps = {
  title: string;
  placement?: TooltipProps['placement'];
  children: React.JSX.Element;
};

export const WithTooltip = ({
  title,
  placement = 'top-start',
  children,
}: WithTooltipProps) => {
  return (
    <Tooltip title={title} arrow placement={placement}>
      {children}
    </Tooltip>
  );
};
