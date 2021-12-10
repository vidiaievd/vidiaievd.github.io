import styled from 'styled-components/macro';

export const StyledTitleCard = styled.h4`
	margin: 0;
	font-size: 1rem;
	margin-bottom: 0.5rem;
	border-bottom: 1px solid ${props => props.theme.borderColor.cardTitle};
    color: ${props => props.isCheck ? 'blue' : 'black'};
`;