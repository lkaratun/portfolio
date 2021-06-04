import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
	<HelmetProvider>
		<React.StrictMode>
			{/* <Helmet></Helmet> */}
			<App />
		</React.StrictMode>
	</HelmetProvider>,
	document.getElementById('root')
);
