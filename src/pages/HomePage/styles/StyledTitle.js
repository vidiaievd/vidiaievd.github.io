import styled, { keyframes } from 'styled-components/macro';

const position = keyframes`
  from {
    left: 15%;
	opacity: 0
  }
  to {
    left: 0;
	opacity: 1
  }
`;

export const StyledTitle = styled.h1`
	position: relative;
	font-size: 3rem;
	font-style: italic;
	z-index: 10;
	margin-right: 3rem;
	animation: ${position} 0.5s linear;
`;