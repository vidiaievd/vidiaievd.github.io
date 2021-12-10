import styled, {css} from 'styled-components/macro';

export const StyledUserCard = styled.div`
	
    border-radius: 10px;
    margin: 1rem auto;
    padding: 0.2rem 1rem;
    color: ${props => props.theme.fontColor.card};
    transform: scale(1);
    transition: all 0.3s ease-out;

    ${props =>  {
        if (props.isCheck) {
            return css`
                background-color: ${props => props.theme.bgColor.checkCard};
                border: 1px solid ${props => props.theme.borderColor.checkCard};
                box-shadow: 5px 5px 5px ${props => props.theme.shadow.checkCard};
            `
        } else {
            return css`
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
