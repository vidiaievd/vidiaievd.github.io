import styled from 'styled-components/macro';
import image from './laptop1.png';

export const StyledImageWrapper = styled.div`
	grid-area: img;
	height: 10rem;
	width: 16rem;
	background: center / contain no-repeat url(${image});
`;