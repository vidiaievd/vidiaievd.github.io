import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { UserCard } from './UserCard';
import store from '../../store/store';

const employee = {
    id: "5e00928db89ff9c2559f9560",
    dob: "2019-05-09T03:24:32.532Z",
    firstName: "Watson",
    lastName: "Good",
}

describe('UserCard component', () => {
    it('UserCard renders', () => {
        render(
            <Provider store={store}>
                <UserCard employee={employee} />
            </Provider>);

        expect(screen.getByText(`${employee.firstName} ${employee.lastName}`)).toBeInTheDocument();
        expect(screen.getByText('active')).toBeInTheDocument();
        expect(screen.getByText('not active')).toBeInTheDocument();
        expect(screen.getByLabelText('not active')).toBeChecked();
        expect(screen.getByLabelText('active')).not.toBeChecked();
    });

    it('check active', () => {
        render(
            <Provider store={store}>
                <UserCard employee={employee} />
            </Provider>);

        expect(screen.getByLabelText('not active')).toBeChecked();
        expect(screen.getByLabelText('active')).not.toBeChecked();

        userEvent.click(screen.getByText('active'));
        expect(screen.getByLabelText('active')).toBeChecked();
        expect(screen.getByLabelText('not active')).not.toBeChecked();

        userEvent.click(screen.getByText('not active'));
        expect(screen.getByLabelText('not active')).toBeChecked();
        expect(screen.getByLabelText('active')).not.toBeChecked();
    });

    it('userCard snapshot', () => {
        const userCard = render(
            <Provider store={store}>
                <UserCard employee={employee} />
            </Provider>);

        expect(userCard).toMatchSnapshot();
    });

})