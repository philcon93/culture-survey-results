import React from 'react';
import { Icon } from '@shopify/polaris';
import { MobileBackArrowMajor } from '@shopify/polaris-icons';
import { Button } from '../index';

type Props = {
    text: string,
    breadcrumbs?: boolean
}

export const PageTitle = ({ breadcrumbs, text } : Props) => {
  return (
    <div>
        {
            breadcrumbs && <Button><Icon source={MobileBackArrowMajor} color="base" /></Button>
        }
        <h1>{text}</h1>
    </div>
  );
}