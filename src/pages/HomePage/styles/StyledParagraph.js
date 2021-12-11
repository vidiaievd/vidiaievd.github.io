import styled, { keyframes } from 'styled-components/macro';

const position = keyframes`
  from {
    left: 50%;
	opacity: 0
  }
  to {
    left: 0;
	opacity: 1
  }
`;

export const StyledParagraph = styled.p`
	position: relative;
	left: 0;
	font-size: 4.5rem;
	font-weight: 600;
	font-style: italic;
	white-space: pre-wrap;
	text-align: right;
	margin-right: 3rem;
	z-index: 10;
	animation: ${position} 0.5s linear ;
`;