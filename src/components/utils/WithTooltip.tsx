import type { TooltipProps } from '@mui/material';
import { Tooltip } from '@mui/material';

type WithTooltipProps = {
  title: string;
  arrow?: boolean;
  placement?: TooltipProps['placement'];
  children: React.JSX.Element;
};

export const WithTooltip = ({
  title,
  arrow = true,
  placement = 'top',
  children,
}: WithTooltipProps) => {
  return (
    <Tooltip title={title} arrow={arrow} placement={placement}>
      {children}
    </Tooltip>
  );
};
