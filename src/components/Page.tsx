import React from "react";
import { Page as PolarisPage } from '@shopify/polaris';

export const Page: React.FC<Props> = ({ title, children } : Props) => {
    return (
        <PolarisPage title={title}>
            {children}
        </PolarisPage>
    );
};

type Props = {
    title?: string,
    children: React.ReactNode
}