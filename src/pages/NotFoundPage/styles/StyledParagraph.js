import styled from 'styled-components/macro';

export const StyledParagraph = styled.div`
	grid-area: text404;
	margin: 1rem;

	& p {
		color: ${props => props.theme.fontColor.primary};
		font-size: 1.2rem;
	}
`;