import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { THEME, THEME_NAME } from './theme'
import { EmployeesPage, NotFoundPage, HomePage } from './pages';
import { LayoutWrapper } from './Layouts';
import { GlobalStyles } from './styles';
import store from './store/store';

export const App = () => {
	const [themeApp, setThemeApp] = useState(THEME_NAME.LIGHT);
	return (
		<Provider store={store}>
			<HashRouter>
				<ThemeProvider theme={THEME[themeApp]}>
					<GlobalStyles />
					<LayoutWrapper changeTheme={setThemeApp} >
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/employees" element={<EmployeesPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</LayoutWrapper>
				</ThemeProvider>
			</HashRouter>
		</Provider>
	);
}