import React, { useState, useEffect } from 'react';

import { getShips } from 'Services/StarWarsAPI';

const Ships = [];

const ShipsProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	const [ships, setShips] = useState([]);

	const load = async () => {
		const result: any = await getShips();
		// console.log(result);
		setShips(result);
	};
	useEffect(() => {
		load();
		//eslint-disable-next-line
	}, []);

	//@ts-ignore
	return <ShipsContext.Provider value={ships}>{children}</ShipsContext.Provider>;
};

const ShipsContext = React.createContext(Ships);

export { ShipsContext, ShipsProvider };
