import React from 'react';
import { useHistory } from 'react-router';
import constants from '../../store/constants';

export const NavBar: React.FC = () => {
    const history = useHistory();

    return (
        <div>
            <a onClick={() => history.push(constants.DASHBOARD_ROUTE)}>Home</a>
        </div>
    );
}