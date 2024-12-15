import { ThemeProvider } from '@/components/theme-provider';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider 
    defaultTheme="system" 
    storageKey="portfolio-ui-theme"
  >
    <App />
  </ThemeProvider>,
)