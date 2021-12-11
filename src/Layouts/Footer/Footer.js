import t from '../../i18n/translate';
import {StyledFooter} from './styles';

const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<StyledFooter>
			<p>{t('footer-text')} {year} </p>
		</StyledFooter>
	)
}
