import Image from "next/image";
import styles from "./page.module.css";
import NavLinks from "@/components/NavLinks/NavLinks";
import HeaderNavbar from "@/components/HeaderNavBar/HeaderNavBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <HeaderNavbar />
      </div>
    </div>
  );
}
