import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/critical.css';
import './styles/tailwind.css';
import App from './App.tsx';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

requestIdleCallback(() => {
  import('./styles/custom.css');
});
