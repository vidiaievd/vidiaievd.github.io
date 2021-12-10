import styled from 'styled-components/macro';

export const StyledTitle = styled.h1`
    margin: 0;
    padding: 1rem 0;
    font-family: "Open Sans";
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.borderColor.primary};
`;