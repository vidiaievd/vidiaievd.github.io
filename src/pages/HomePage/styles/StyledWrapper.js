import styled from 'styled-components/macro';
import img from '../img/comp.jpg';

export const StyledWrapper = styled.article`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	color: ${props => props.theme.fontColor.secondary};
	background: center / cover no-repeat url(${img});
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		background: ${props => props.theme.bgGradient.primary};
		z-index: 1;
	}
`;