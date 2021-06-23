import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/dist/styles.css";
import './styles/styles.scss';
import home from './images/HomeMajor.svg'

const theme = {
  logo: {
    width: 30,
    topBarSource: home,
    url: '/',
    accessibilityLabel: 'Goat Surveys'
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
