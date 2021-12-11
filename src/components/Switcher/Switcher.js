import {useDispatch, useSelector} from 'react-redux';
import { StyledSwitcher } from './styles';
import { THEME_NAME } from '../../theme';
import {setTheme} from '../../store/sittingSlice';

export const Switcher = () => {
	const dispatch = useDispatch();
	// const currentTheme = useSelector(({sitting}) => sitting.theme);

	const handleChangeLanguage = event => {
		dispatch(setTheme(event.target.value));
	}

	// const current = Object.values(THEME_NAME).find(theme => theme === currentTheme);

		return (
		<StyledSwitcher onChange={handleChangeLanguage}>
			{Object.keys(THEME_NAME).map(theme => (
				<option value={THEME_NAME[theme]} key={THEME_NAME[theme]}>{THEME_NAME[theme]}</option>
			))}
		</StyledSwitcher>
	)
}
