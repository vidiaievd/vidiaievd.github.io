import styled from 'styled-components/macro';

export const StyledTitle = styled.div`
	grid-area: code404;
	font-size: 6rem;
	color: #3a3a3a;
	margin: 0;
	margin: 3rem;

	& h1 {
		font-size: 6rem;
		color: ${props => props.theme.fontColor.primary};
	}
`;