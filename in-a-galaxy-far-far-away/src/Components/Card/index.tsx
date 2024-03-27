import React from 'react';

import { Card, Image, VerticalDivider, Title, InfoContainer, Text, HorizontalDivider } from './styles';

interface Props {
	name: string;
	mglt: number;
	stops: number;
}

const CardComponent = (props: Props): React.ReactElement => (
	<Card>
		<Image src={require('../../Assets/Images/example.jpeg')} alt='Example Image' />
		<VerticalDivider />
		<Title>{props.name}</Title>
		<InfoContainer>
			<Text>MGLT: {props.mglt}</Text>
			<HorizontalDivider />
			<Text>Stops: {props.stops}</Text>
		</InfoContainer>
	</Card>
);

export default CardComponent;
