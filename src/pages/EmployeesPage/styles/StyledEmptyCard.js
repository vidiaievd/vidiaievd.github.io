import styled from 'styled-components/macro';

export const StyledEmptyCard = styled.div`
    border: 1px solid ${props => props.theme.borderColor.red};
    border-radius: 10px;
    margin: 1rem auto;
    padding: 0.2rem 1rem;
    background-color: ${props => props.theme.bgColor.red};
    box-shadow: ${props => props.theme.shadow.red};
    text-align: center;
`;