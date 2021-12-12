import styled from 'styled-components/macro';

export const StyledWrapperContent = styled.div`
	justify-items: center;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 6rem auto 1rem 2.5rem;
	justify-content: center;
	align-items: center;
	grid-template-areas:
		"img code404"
		"img text404"
		"img ..."
		"img button404";
`;