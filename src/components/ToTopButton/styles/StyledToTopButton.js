import styled from 'styled-components/macro';
import ArrowUpIcon from './arrow-up.svg';

const size = '45px';

export const StyledToTopButton = styled.button`
	display: flex;
	position: fixed;
	bottom: 1.5rem;
	right: ${props => props.isVisible ? '1.5rem' : '-2rem'};
	height: ${size};
	width: ${size};
	background: center / 50% no-repeat url(${ArrowUpIcon}) ${props => props.theme.bgColor.primary};
	border-radius: 50%;
	box-shadow: none;
	border: none;
	z-index: 100;
	transition: all 0.3s;
`;