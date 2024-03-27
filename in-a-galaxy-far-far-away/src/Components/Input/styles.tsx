import styled from 'styled-components';

import Colors from 'Assets/Theme/Colors';

export const Container = styled.section`
	margin-top: 30px;
	display: flex;
	justify-content: center;
`;

export const Input = styled.input`
	outline: none;
	appearance: none;
	height: 50px;
	font-size: 1.5rem;
	border-radius: 6px;
	border-color: ${Colors.red};
	border-width: 2;
	border-style: solid;
	background-color: ${Colors.backgroundSecondary};
	color: ${Colors.font};
	padding-left: 10px;
`;
