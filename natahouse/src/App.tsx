import React from 'react';

import { ShipsProvider } from 'Store';

import Page from 'Pages';

const App = (): React.ReactElement => (
	<ShipsProvider>
		<Page />
	</ShipsProvider>
);

export default App;
