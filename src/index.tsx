import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './app';

import { ThemeProvider } from './styles/theme/ThemeProvider';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(MOUNT_NODE!).render(
    <ThemeProvider> 
      <App />
    </ThemeProvider>
);
