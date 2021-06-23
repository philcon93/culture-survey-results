import React from "react";
import { EmptyState } from '@shopify/polaris';
import { Card } from '../../components';

type Props = {
    heading?: string,
    action: { content: string, onAction: () => void },
    text?: string
}

export const PageEmptyState: React.FC<Props> = ({ heading, action, text } : Props) => {
    return (
        <Card>
        <EmptyState
            heading={heading}
            action={action}
            image="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/scene/kaizen-site-product.svg">
            {text}
        </EmptyState>
      </Card>
    )
}

PageEmptyState.defaultProps = {
    heading: 'Oh no, something went wrong!'   
}