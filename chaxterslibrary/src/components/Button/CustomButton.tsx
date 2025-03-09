"use client";

import React from "react";
import Image from "next/image";
import styles from "./CustomButton.module.css";
import { Value } from "classnames";

interface CustomButtonProps {
  text?: string;
  imageUrl?: string;
  href?: string;
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  imageUrl,
  href,
  height,
  width,
  className,
  onClick,
}) => {
  if (height && width) {
    var content = imageUrl ? (
      <Image
        src={imageUrl}
        alt={text || "Button Image"}
        className={styles.image}
        width={width}
        height={height}
      />
    ) : (
      <span>{text}</span>
    );
  } else if (height) {
    var content = imageUrl ? (
      <Image
        src={imageUrl}
        alt={text || "Button Image"}
        className={styles.image}
        width={25}
        height={height}
      />
    ) : (
      <span>{text}</span>
    );
  } else if (width) {
    var content = imageUrl ? (
      <Image
        src={imageUrl}
        alt={text || "Button Image"}
        className={styles.image}
        width={width}
        height={25}
      />
    ) : (
      <span>{text}</span>
    );
  } else {
    var content = imageUrl ? (
      <Image
        src={imageUrl}
        alt={text || "Button Image"}
        className={styles.image}
        width={25}
        height={25}
      />
    ) : (
      <span>{text}</span>
    );
  }

  if (className) {
    if (href) {
      return (
        <a href={href} className={className}>
          {content}
        </a>
      );
    }

    return (
      <button onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles.link}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {content}
    </button>
  );
};

export default CustomButton;
