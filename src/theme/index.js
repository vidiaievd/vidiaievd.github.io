import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';

export const THEME_NAME = {
	LIGHT: 'light',
	DARK: 'dark',
}

export const THEME = {
	[THEME_NAME.LIGHT]: lightTheme,
	[THEME_NAME.DARK]: darkTheme,
}
