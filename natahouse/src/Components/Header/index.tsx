import React from 'react';

import { Container } from './styles';

const Header = (): React.ReactElement => (
	<Container>
		<h1>Star Wars: How many Stops</h1>
		<p>Find the better Spaceship for your travel!</p>
		<small>
			Created by:
			<a href='https://github.com/higoralves/' target='blank'>
				Higor Alves
			</a>
		</small>
	</Container>
);

export default Header;
