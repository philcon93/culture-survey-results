import React from 'react';
import classnames from 'classnames';
import styles from "./Card.module.scss";

type Props = {
    children: React.ReactNode
    onClick?: () => void,
}

export const Card: React.FC<Props> = ({ children, ...props } : Props) => {
    const classNames = classnames(
        styles.card,
        props.onClick ? styles['card--action'] : null
    );

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
}