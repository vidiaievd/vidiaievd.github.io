import styled from 'styled-components/macro';

export const StyledBirthdaysList = styled.section`
    grid-area: birthdaysList;
    background-color: ${props => props.theme.bgColor.secondary};
    border-left: 2px double ${props => props.theme.borderColor.primary};
    border-right: 2px double ${props => props.theme.borderColor.primary};
    border-bottom: 2px double ${props => props.theme.borderColor.primary};
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
`;