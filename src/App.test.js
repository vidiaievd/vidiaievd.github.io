import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App component', () => {
	it('App renders', () => {
		render(<App />);

		expect(screen.getByRole('link')).toBeInTheDocument();
		expect(screen.getByText('Employees Page')).toBeInTheDocument();
	});
})