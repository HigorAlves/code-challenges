import React from 'react';

import { Container, Input } from './styles';

const InputComponent = (props: any): React.ReactElement => (
	<Container>
		<Input name='input' type='number' min='0' placeholder='How many MGLT?' onChange={(e) => props.set(e.target.value)} />
	</Container>
);

export default InputComponent;
