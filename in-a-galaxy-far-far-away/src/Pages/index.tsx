import React, { useContext, useState } from 'react';

import { ShipsContext } from 'Store';

import { Header, Input, Card, Loading } from 'Components';

import { Container } from './style';

const Home = (): React.ReactElement => {
	const ships = useContext(ShipsContext);
	const [mglt, setMglt] = useState(0);

	return (
		<>
			<Header />
			<Input value={0} set={setMglt} />
			{ships.length < 1 ? <Loading /> : null}
			<Container>
				{ships.length > 1
					? ships.map((ship: any) => {
							const stops = mglt / (ship.mglt * ship.consumables);
							return <Card key={ship.name} name={ship.name} mglt={ship.mglt} stops={Math.floor(stops)} />;
					  })
					: null}
			</Container>
		</>
	);
};

export default Home;
