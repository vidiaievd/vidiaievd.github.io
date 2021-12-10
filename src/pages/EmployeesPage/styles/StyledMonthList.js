import styled from 'styled-components/macro';

export const StyledMonthList = styled.div`
    margin: .7rem;
    padding: .1rem 0;
    border-radius: 1rem;
    border: 1px solid ${props => props.theme.borderColor.secondary};
    background-color: ${props => props.theme.bgColor.primary};
`;