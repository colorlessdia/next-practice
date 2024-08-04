'use client';

import { usePathname } from 'next/navigation';
import { GNBLinkItem } from '@/types/GNBType';
import Link from 'next/link';

type LinkItemProps = {
  link: GNBLinkItem;
};

const LinkItem = ({ link }: LinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.href ? true : false;

  return (
    <li
      key={link.href}
      style={{
        fontWeight: isActive ? 700 : 500,
      }}
    >
      <Link
        href={link.href}
        style={{
          color: isActive ? '#333' : '#666',
        }}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default LinkItem;
