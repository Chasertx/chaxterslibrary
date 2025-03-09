"use client";

import React from "react";
import styles from "./HeaderHorizontalDisplay.module.css";
import CustomButton from "../Button/CustomButton";
import button_styles from "../Button/CustomButton.module.css";

const HeaderHorizontalDisplay: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <div>
        <CustomButton
          imageUrl="/assets/github.svg"
          href="https://github.com/Chasertx"
          height={40}
          width={40}
          className={button_styles.socialButton}
        />
      </div>
      <div>
        <CustomButton
          imageUrl="/assets/linkedin.png"
          href="https://www.linkedin.com/in/chase-ashby-664a6217a/"
          height={40}
          width={40}
          className={button_styles.socialButton}
        />
      </div>
      <div>
        <CustomButton
          imageUrl="/assets/discord.svg"
          href="discordapp.com/users/253236433446240257"
          height={40}
          width={40}
          className={button_styles.socialButton}
        />
      </div>
    </div>
  );
};

export default HeaderHorizontalDisplay;
