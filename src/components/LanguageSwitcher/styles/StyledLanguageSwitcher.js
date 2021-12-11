import styled from 'styled-components/macro';

export const StyledLanguageSwitcher = styled.select`
	border-radius: 1rem;
	margin-right: 1rem;
	padding: 0 .5rem 0 1rem;
	font-family: 'Open Sans';
	font-size: 1rem;
	font-weight: 600;
	background-color: ${props => props.theme.bgColor.primary};
	color: ${props => props.theme.fontColor.primary};

	&:focus{
		outline: 1px solid lightgrey;
	}


`;