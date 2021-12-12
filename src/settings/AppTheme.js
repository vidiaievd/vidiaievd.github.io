import { ThemeProvider } from 'styled-components';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { THEME } from '../theme';

export const AppTheme = memo(({children}) => {
	const current = useSelector(({ sitting }) => sitting.theme);

	return <ThemeProvider theme={THEME[current]}>{children}</ThemeProvider>;
});