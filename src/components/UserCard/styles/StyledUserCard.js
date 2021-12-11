import styled, {css, keyframes} from 'styled-components/macro';

const scale = keyframes`
  from {
    transform: rotateX(0deg);
  }
  50% {
      transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

export const StyledUserCard = styled.div`
	position: relative;
    top: 100px;
    opacity: 0;
    border-radius: 10px;
    margin: 1rem auto;
    padding: 0.2rem 1rem;
    color: ${props => props.theme.fontColor.card};
    transform: scale(1);
    transition: all 0.5s ease;


    ${props =>  {
    if (props.isCheck && props.visible) {
            return css`
                top: 0;
                opacity: 1;
                background-color: ${props => props.theme.bgColor.checkCard};
                border: 1px solid ${props => props.theme.borderColor.checkCard};
                box-shadow: 5px 5px 5px ${props => props.theme.shadow.checkCard};
                animation: ${scale} 0.5s linear;
            `
        } else if ((props.visible)){
            return css`
                top: 0;
                opacity: 1;
                background-color: ${props => props.theme.bgColor.card};
                border: 1px solid ${props => props.theme.borderColor.card};
                box-shadow: 5px 5px 5px ${props => props.theme.shadow.card};
            `
        }
    }}

	&:hover {
        transform: scale(1.05);
    }
`;
