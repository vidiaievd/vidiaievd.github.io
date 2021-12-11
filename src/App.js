import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { I18Provider } from './i18n';
import { BarmTheme } from './hoc'
import { EmployeesPage, NotFoundPage, HomePage } from './pages';
import { LayoutWrapper } from './Layouts';
import store from './store/store';
import { GlobalStyles } from './styles';

export const App = () => {

	return (
		<Provider store={store}>
			<HashRouter>
				<I18Provider>
					<BarmTheme>
						<GlobalStyles />
						<LayoutWrapper >
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/employees" element={<EmployeesPage />} />
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</LayoutWrapper>
					</BarmTheme>
				</I18Provider>
			</HashRouter>
		</Provider>
	);
}