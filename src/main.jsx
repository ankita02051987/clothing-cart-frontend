import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // ✅ Your global styles
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="app-root" style={{ height: '100%', width: '100%' }}>
      <App />
    </div>
  </StrictMode>,
);
