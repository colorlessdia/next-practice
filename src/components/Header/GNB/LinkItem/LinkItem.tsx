import { GNBLinkItem } from "@/types/GNBType";
import Link from "next/link";

type LinkItemProps = {
  link: GNBLinkItem;
};

const LinkItem = ({ link }: LinkItemProps) => {
  return (
    <li key={link.href}>
      <Link href={link.href}>{link.title}</Link>
    </li>
  );
};

export default LinkItem;
