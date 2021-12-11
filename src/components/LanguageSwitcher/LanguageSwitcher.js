import { useDispatch, useSelector } from 'react-redux';
import { LOCALES } from '../../i18n';
import { StyledLanguageSwitcher } from './styles';
import { setLanguage } from '../../store/sittingSlice';

export const LanguageSwitcher = () => {
	const dispatch = useDispatch();
	// const currentLanguage = useSelector(({sitting}) => sitting.language);

	const handleChangeLanguage = event => {
		dispatch(setLanguage(event.target.value));
	}

	return (
		<StyledLanguageSwitcher onChange={handleChangeLanguage}>
			{Object.keys(LOCALES).map(lang => (
				<option value={LOCALES[lang]} key={LOCALES[lang]}>{lang}</option>
			))}
		</StyledLanguageSwitcher>
	)
}
