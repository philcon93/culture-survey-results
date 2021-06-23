import React from 'react';
import styles from './FluidImage.module.scss'

type Props = {
    className?: string,
    style?: React.CSSProperties,
    src: string
};

export const FluidImage: React.FC<Props> = ({ src, ...props }: Props) => (
    <img src={src} className={styles.fluidimage} {...props} />
);

