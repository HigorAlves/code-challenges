import styled from 'styled-components';

import Colors from 'Assets/Theme/Colors';

export const Card = styled.div`
	background-color: ${Colors.backgroundSecondary};
	width: 200px;
	border-radius: 5px;
	border-color: ${Colors.red};
	border-width: 1px;
	border-style: solid;
	margin: 10px;
`;

export const Image = styled.img`
	width: 200px;
	height: 200px;
	margin-top: 1.5px;
`;

export const VerticalDivider = styled.div`
	height: 2px;
	background-color: ${Colors.red};
	width: 200px;
	margin-bottom: 5px;
`;

export const Title = styled.h3`
	padding: 5;
	font-weight: bold;
	text-align: center;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 5px;
	padding-bottom: 5px;
`;

export const Text = styled.p`
	padding: 5px;
	font-size: 1rem;
`;

export const HorizontalDivider = styled.div`
	height: 28px;
	background-color: ${Colors.red};
	width: 2px;
	margin-bottom: 5px;
`;
