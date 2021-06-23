import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { TopBar } from '@shopify/polaris';
import constants from '../../store/constants';

export const NavBar: React.FC = () => {
    const history = useHistory();

    const handleNavigationToggle = useCallback(() => {
        history.push(constants.DASHBOARD_ROUTE)
      }, []);

    return (
        <TopBar
            showNavigationToggle
            onNavigationToggle={handleNavigationToggle}
        />
    );
}