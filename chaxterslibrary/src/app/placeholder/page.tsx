import React from "react";
import styles from "./placeholder.module.css";
import CustomButton from "@/components/Button/CustomButton";

const PlaceholderPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Under Construction</h1>
      <p className={styles.description}>
        We're working hard to bring you this page. Stay tuned for updates!
      </p>
      <CustomButton href="/" text="Back to Home" />
    </div>
  );
};

export default PlaceholderPage;
