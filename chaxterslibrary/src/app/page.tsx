import Image from "next/image";
import styles from "./page.module.css";
import NavLinks from "@/components/NavLinks/NavLinks";

export default function Home() {
  type NavLink = {
    name: string;
    href: string;
  };

  const menuItems: NavLink[] = [
    { name: "Item 1", href: "This is the href for item 1" },
    { name: "Item 2", href: "This is the href for item 2" },
    { name: "Item 3", href: "This is the href for item 3" },
  ];

  return (
    <div className={styles.draftStyling}>
      <NavLinks links={menuItems} />
    </div>
  );
}
