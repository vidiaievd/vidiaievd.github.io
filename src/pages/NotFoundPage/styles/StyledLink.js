import styled from 'styled-components/macro';

export const StyledLink = styled.div`
	grid-area: button404;
	padding: .3rem .5rem;
	background: ${props => props.theme.bgColor.invert};
	border-radius: 2rem;
	align-items: center;

	& a {
		font-size: 1.8rem;
		color: ${props => props.theme.fontColor.invert};
	}

	& a, a:hover {
		text-decoration: none;
	}
`;