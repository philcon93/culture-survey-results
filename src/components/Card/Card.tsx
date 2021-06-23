import React from 'react';
import styles from "./Card.module.scss";

type Props = {
    children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children } : Props) => (
    <div className={styles.card}>
        {children}
    </div>
);