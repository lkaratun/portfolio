import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
	<HelmetProvider>
		<React.StrictMode>
			<Helmet>
				{/* Bootstrap */}
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
			</Helmet>
			<App />
		</React.StrictMode>
	</HelmetProvider>,
	document.getElementById('root')
);
