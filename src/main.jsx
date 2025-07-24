import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RegisterForm } from './components/RegisterForm';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RegisterForm />
	</StrictMode>,
);
