import React from 'react';
import styles from "./Footer.module.scss";

type Props = {
    children: React.ReactNode
}

export const Footer = ({ children } : Props) => {
  return (
    <div className={styles.footer}>
        <span className={styles['footer--text']}>{children}</span>
    </div>
  );
}