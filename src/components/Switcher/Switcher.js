import { StyledSwitcher } from './styles';
import { THEME_NAME } from '../../theme'

export const Switcher = ({ changeTheme }) => {
	const handleChangeLanguage = event => {
		changeTheme(event.target.value)
	}
	return (
		<StyledSwitcher onChange={handleChangeLanguage}>
			{Object.keys(THEME_NAME).map(theme => (
				<option value={THEME_NAME[theme]} key={THEME_NAME[theme]}>{THEME_NAME[theme]}</option>
			))}
		</StyledSwitcher>
	)
}
