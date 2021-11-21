import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from 'shortid';

import { getEmployees, selectEmployees } from "../../store/employeesSlice";
import { selectBirthdays } from "../../store/birthdaySlice";

import { UserCard } from "../../components";

import { alphabet, setMonthList, birthdayListByMonth, parseOfDate, employeesByAlphabet } from "../../utils";

import "./style.scss";

const dayOfBirthday = (date) =>
	`${parseOfDate(date).day} ${parseOfDate(date).month}, ${parseOfDate(date).year
	} year`;

const monthList = setMonthList(11);

export const EmployeesPage = () => {
	const dispatch = useDispatch();
	const birthdays = useSelector(selectBirthdays);
	const employees = useSelector(selectEmployees);
	const birthdaysList = birthdayListByMonth(birthdays);

	const employeesWithLetter = employeesByAlphabet(employees);

	const memoizedEmployeesList = useMemo(() => (
		<div className="employees-list">
			{alphabet.map(letter => (
				employeesWithLetter[letter]
					? (
						<div className="letter-card" key={shortid.generate()}>
							<h3>{letter}</h3>
							{employeesWithLetter[letter].map(employeeData => (
								<UserCard key={shortid.generate()} employee={employeeData} />
							))}
						</div>
					) : (
						<div className="letter-card" key={shortid.generate()}>
							<h3>{letter}</h3>
							<div className="empty-card">
								<h4>No Employees</h4>
							</div>
						</div>
					)
			))}
		</div>
	), [employees]);

	useEffect(() => {
		dispatch(getEmployees());
	}, [dispatch]);

	if (!employees.length) {
		return null
	}

	return (
		<div className="content">
			<div className="user-list">
				<h2>Employees</h2>
				{memoizedEmployeesList}
			</div>
			<div className="birthday-list">
				<h2 className="employees-birthday">Employees birthday</h2>
				<hr />
				{Object.keys(birthdaysList).length ?
					monthList.map((month) => (
						<div key={shortid.generate()}>
							<h5>{month}</h5>
							{birthdaysList[month]?.length ?
								birthdaysList[month].map(
									employee => <li key={shortid.generate()}>
										{`${employee.lastName} ${employee.firstName} - ${dayOfBirthday(employee.dob)}`}
									</li>
								)
								:
								<p>No Employees</p>
							}
						</div>
					))
					:
					<div>Employees List is empty</div>
				}
			</div>
		</div>
	);
};

