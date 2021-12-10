// import styles from './home.module.scss';
import {StyledWrapper, StyledTitle, StyledParagraph} from './styles'

export const HomePage = () => {
	return (
		<StyledWrapper>
			<StyledTitle>Test task</StyledTitle>
			<StyledParagraph>{'Yalantis\nReact School'}</StyledParagraph>
		</StyledWrapper>
	)
}