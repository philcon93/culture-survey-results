import React from "react";
import { Card, Page, Spinner } from '@shopify/polaris';

export const PageLoader: React.FC = () => {
    return (
        <Page><Card sectioned><Spinner size="large" /></Card></Page>
    );
};