import {StyledFooter} from './styles'

const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<StyledFooter>
			<p>All Rights Reserved, {year} </p>
		</StyledFooter>
	)
}
