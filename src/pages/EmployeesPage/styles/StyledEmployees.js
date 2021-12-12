import styled from 'styled-components/macro';

export const StyledEmployees = styled.section`
    grid-area: employees;
    padding: 0 .5rem;
    background-color: ${props => props.theme.bgColor.primary};
    border: 2px double ${props => props.theme.borderColor.primary};
    border-radius: 1.5rem;
`;