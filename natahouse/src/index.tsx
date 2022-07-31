import React from 'react';
import ReactDOM from 'react-dom';

import Theme from 'Assets/Theme/GlobalStyle';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Theme />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
