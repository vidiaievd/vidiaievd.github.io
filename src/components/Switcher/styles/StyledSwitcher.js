import styled from 'styled-components/macro';

export const StyledSwitcher = styled.select`
	border-radius: 1rem;
	margin-right: 1rem;
	padding: 0 .3rem 0 .3rem;
	font-family: 'Open Sans';
	font-size: .8rem;
	font-weight: 600;
	background-color: ${props => props.theme.bgColor.primary};
	color: ${props => props.theme.fontColor.primary};

	&:focus{
		outline: 1px solid lightgrey;
	}


`;