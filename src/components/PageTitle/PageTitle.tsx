import React from 'react';
import { useHistory } from 'react-router'
import { Icon } from '@shopify/polaris';
import { MobileBackArrowMajor } from '@shopify/polaris-icons';
import { Breadcrumb } from '../index';
import styles from "./PageTitle.module.scss";

type Props = {
    title: string,
    breadcrumb?: { url: string }
}

export const PageTitle = ({ breadcrumb, title } : Props) => {
    const history = useHistory();
  return (
    <div className={styles.pagetitle}>
        <div className={styles['pagetitle--row']}>
            {
                breadcrumb &&
                <div className={styles['pagetitle--button']}>
                    <Breadcrumb onClick={() => history.push(breadcrumb.url)}>
                        <Icon source={MobileBackArrowMajor} color="base" />
                    </Breadcrumb>
                </div>
            }
            <div className={styles['pagetitle--title-wrapper']}>
                <h1 className={styles['pagetitle--title']}>{title}</h1>
            </div>
        </div>
    </div>
  );
}