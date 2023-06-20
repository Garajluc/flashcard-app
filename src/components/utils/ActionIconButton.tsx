import { forwardRef } from 'react';
import Link from 'next/link';

import { IconButton } from '../utils/IconButton';

type CollectionCardProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
};

export const ActionIconButton = forwardRef(
  ({ href, title, icon }: CollectionCardProps, _ref) => {
    return (
      <Link passHref href={href} legacyBehavior>
        <IconButton title={title} icon={icon} size="small" variant="text" />
      </Link>
    );
  }
);

ActionIconButton.displayName = 'ActionIconButton';
