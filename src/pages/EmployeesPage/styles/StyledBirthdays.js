import styled from 'styled-components/macro';

export const StyledBirthdays = styled.section`
    grid-area: birthdays;
    background-color: ${props => props.theme.bgColor.secondary};
    border: 2px double ${props => props.theme.borderColor.primary};
    border-radius: 1.5rem;
`;