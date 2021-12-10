import styled from 'styled-components/macro';

export const StyledEmployeesTitle = styled.section`
    grid-area: employeesTitle;
    background-color: ${props => props.theme.bgColor.primary};
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-left: 2px double ${props => props.theme.borderColor.primary};
    border-right: 2px double ${props => props.theme.borderColor.primary};
    border-top: 2px double ${props => props.theme.borderColor.primary};
`;