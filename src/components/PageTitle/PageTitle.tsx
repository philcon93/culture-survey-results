import React from 'react';
import { useHistory } from 'react-router';
import { Badge, Button, Icon } from '@shopify/polaris';
import { MobileBackArrowMajor } from '@shopify/polaris-icons';
import { Breadcrumb } from '../index';
import styles from "./PageTitle.module.scss";

type Props = {
    action?: { content: string, onAction: () => void },
    badge?: { content: string, type: 'critical' | 'warning' | 'success' }
    breadcrumb?: { url: string },
    title: string,
}

export const PageTitle: React.FC<Props> = ({ action, badge, breadcrumb, title } : Props) => {
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
                    { badge && <Badge status={badge.type}>{`${badge.content} participation rate`}</Badge> }
                </div>
                {
                    action && 
                    <div className={styles['pagetitle--action']}>
                        <Button primary onClick={action.onAction}>{action.content}</Button>
                    </div>
                }
            </div>
        </div>
    );
}