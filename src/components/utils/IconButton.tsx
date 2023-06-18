import type {
  IconButtonProps as MuiIconButtonProps,
  TooltipProps,
} from '@mui/material';
import { IconButton as MuiIconButton, styled } from '@mui/material';
import { WithTooltip } from '../utils/WithTooltip';

interface IconButtonProps extends MuiIconButtonProps {
  title: string;
  icon: React.ReactNode;
  variant?: 'text' | 'contained';
  tooltipPlacement?: TooltipProps['placement'];
}

const MuiIconButtonText = styled(MuiIconButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.light,
  },
}));

export const IconButton = ({
  title,
  icon,
  variant = 'contained',
  tooltipPlacement,
  ...rest
}: IconButtonProps) => {
  if (variant === 'text') {
    return (
      <WithTooltip title={title} placement={tooltipPlacement}>
        <MuiIconButtonText {...rest}>{icon}</MuiIconButtonText>
      </WithTooltip>
    );
  }

  return (
    <WithTooltip title={title} placement={tooltipPlacement}>
      <MuiIconButton {...rest}>{icon}</MuiIconButton>
    </WithTooltip>
  );
};
