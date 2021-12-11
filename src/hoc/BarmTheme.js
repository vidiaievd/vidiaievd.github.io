import { ThemeProvider } from 'styled-components';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { THEME } from '../theme';

export const BarmTheme = memo(({children}) => {
	const getTheme = useSelector(({ sitting }) => sitting.theme);

	return <ThemeProvider theme={THEME[getTheme]}>{children}</ThemeProvider>;
});