import React from "react";
import { Card, Spinner } from '@shopify/polaris';

export const PageLoader: React.FC = () => {
    return (
        <Card sectioned><Spinner size="large" /></Card>
    );
};