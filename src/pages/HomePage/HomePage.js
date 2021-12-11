import t from '../../i18n/translate';
import {StyledWrapper, StyledTitle, StyledParagraph} from './styles'

export const HomePage = () => {
	return (
		<StyledWrapper>
			<StyledTitle>{t('test-task')}</StyledTitle>
			<StyledParagraph>{t('company-name')}</StyledParagraph>
			<StyledParagraph>{t('react')} {t('school')}</StyledParagraph>
		</StyledWrapper>
	)
}