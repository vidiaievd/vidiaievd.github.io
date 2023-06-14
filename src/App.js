import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { I18Provider } from './i18n';
import { AppTheme } from './settings'
import { EmployeesPage, NotFoundPage, HomePage, ChartsPage, WebCamPage } from './pages';
import { LayoutWrapper } from './Layouts';
import store from './store/store';
import { GlobalStyles } from './styles';

export const App = () => {

	return (
		<Provider store={store}>
			<HashRouter>
				<I18Provider>
					<AppTheme>
						<GlobalStyles />
						<LayoutWrapper >
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/employees" element={<EmployeesPage />} />
								<Route path="/charts" element={<ChartsPage />} />
								<Route path="/webcam" element={<WebCamPage />} />
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</LayoutWrapper>
					</AppTheme>
				</I18Provider>
			</HashRouter>
		</Provider>
	);
}