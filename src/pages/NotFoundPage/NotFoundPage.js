import { Link } from '../../components';
import {
	StyledWrapper,
	StyledImageWrapper,
	StyledTitle,
	StyledParagraph,
	StyledLink,
	StyledWrapperContent,
} from './styles'

export const NotFoundPage = () => {
	return (
		<StyledWrapper>
			<StyledWrapperContent>
				<StyledImageWrapper />
				<StyledTitle> <h1>404</h1></StyledTitle>
				<StyledParagraph><p>Ooops... It seems you lost</p></StyledParagraph>
				<StyledLink>
					<Link to="/">Go back home</Link>
				</StyledLink>
			</StyledWrapperContent>

		</StyledWrapper>
	)
}