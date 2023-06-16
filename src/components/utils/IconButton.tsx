import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { IconButton as MuiIconButton, styled } from '@mui/material';
import { WithTooltip } from '../utils/WithTooltip';

interface IconButtonProps extends MuiIconButtonProps {
  title: string;
  icon: React.ReactNode;
  variant?: 'text' | 'contained';
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
  ...rest
}: IconButtonProps) => {
  if (variant === 'text') {
    return (
      <WithTooltip title={title}>
        <MuiIconButtonText {...rest}>{icon}</MuiIconButtonText>
      </WithTooltip>
    );
  }

  return (
    <WithTooltip title={title}>
      <MuiIconButton {...rest}>{icon}</MuiIconButton>
    </WithTooltip>
  );
};
