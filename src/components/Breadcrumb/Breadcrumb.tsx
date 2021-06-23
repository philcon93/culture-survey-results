import React from 'react';
import styles from "./Breadcrumb.module.scss";

type Props = {
    children: React.ReactNode,
    onClick?: () => void
}

export const Breadcrumb: React.FC<Props> = ({ children, onClick } : Props) => {
  return (
    <button className={styles.breadcrumb} onClick={onClick}>
        <span className={styles['breadcrumb--content']}>{children}</span>
    </button>
  );
}