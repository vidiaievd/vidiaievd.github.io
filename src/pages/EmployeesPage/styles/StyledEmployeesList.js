import styled from 'styled-components/macro';

export const StyledEmployeesList = styled.section`
    grid-area: employeesList;
    padding: 0 .5rem;
    background-color: ${props => props.theme.bgColor.primary};
    border-left: 2px double ${props => props.theme.borderColor.primary};
    border-right: 2px double ${props => props.theme.borderColor.primary};
    border-bottom: 2px double ${props => props.theme.borderColor.primary};
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
`;