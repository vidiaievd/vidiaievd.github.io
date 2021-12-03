import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { EmployeesPage, NotFoundPage, HomePage } from './pages';
import store from './store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}