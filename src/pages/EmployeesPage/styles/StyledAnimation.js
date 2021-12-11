import styled, { keyframes } from 'styled-components/macro';

const position = keyframes`
  from {
    right: -120%;
  }
  to {
    right: 0;
  }
`;
export const StyledAnimation = styled.div`
	position: relative;
	animation: ${position};
`;