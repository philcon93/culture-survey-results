import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/dist/styles.css";
import './styles/styles.scss';
import home from './images/HomeMajor.svg'
import constants from './store/constants';

const theme = {
  logo: {
    width: 30,
    topBarSource: home,
    url: '/',
    accessibilityLabel: constants.COMPANY_NAME
  },
};

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={en} theme={theme}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
