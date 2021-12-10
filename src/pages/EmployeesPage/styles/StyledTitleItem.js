import styled from 'styled-components/macro';

export const StyledTitleItem = styled.h3`
    font-family: "Open Sans";
    font-size: 1rem;
    margin: ${props => props.card ? '1.6rem auto': '.5rem auto .5rem 1.5rem'};
	text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;