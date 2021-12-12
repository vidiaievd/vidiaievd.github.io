import styled from 'styled-components/macro';

export const StyledLine = styled.hr`
	margin: 0 2rem;
    padding: 0;
    height: 2px;
    border: none;
    background: ${props => props.theme.bgColor.headerLine};
`;