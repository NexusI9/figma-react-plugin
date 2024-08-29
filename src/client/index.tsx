import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('figma-app');
  const root = container && createRoot(container);
  root?.render(
      <App />
  );
});