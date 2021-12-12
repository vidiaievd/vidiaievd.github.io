import styled, {keyframes} from 'styled-components/macro';

const position = keyframes`
  from {
    top: -120%;
  }
  to {
    top: 0;
  }
`;

export const StyledHeader = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: start;
	transition: all 1s ease;
	animation: ${position} 0.5s linear;
`;