import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from 'shortid';

import { getEmployees, selectEmployees } from "../../store/employeesSlice";
import { selectBirthdays } from "../../store/birthdaySlice";

import { UserCard, Loader, Error } from "../../components";

import { alphabet, setMonthList, birthdayListByMonth, parseOfDate, employeesByAlphabet } from "../../utils";

import styles from "./Employees.module.scss";

const dayOfBirthday = (date) =>
	`${parseOfDate(date).day} ${parseOfDate(date).month}, ${parseOfDate(date).year
	} year`;

const monthList = setMonthList(11);

export const EmployeesPage = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(({ employees }) => employees.loading);
	const isError = useSelector(({ employees }) => employees.error);
	const birthdays = useSelector(selectBirthdays);
	const employees = useSelector(selectEmployees);
	const birthdaysList = birthdayListByMonth(birthdays);

	const employeesWithLetter = employeesByAlphabet(employees);

	const memoizedEmployeesList = useMemo(() => (
		<div className={styles.cardsWrapper}>
			{alphabet.map(letter => (
				employeesWithLetter[letter]
					? (
						<div className={styles.letterWrapper} key={shortid.generate()}>
							<h3 className={styles.letter}>{letter}</h3>
							{employeesWithLetter[letter].map(employeeData => (
								<UserCard key={shortid.generate()} employee={employeeData} />
							))}
						</div>
					) : (
						<div className={styles.letterWrapper} key={shortid.generate()}>
							<h3 className={styles.letter}>{letter}</h3>
							<div className={styles.emptyCard}>
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

	if (isLoading) {
		return <Loader />
	}

	if (isError) {
		return <Error message={isError} />
	}

	return (
		<article className={styles.article}>
			<section className={styles.employeesTitle}>
				<h1 className={styles.title}>Employees</h1>
			</section>
			<section className={styles.employeesList}>
				{memoizedEmployeesList}
			</section>
			<section className={styles.birthdaysTitle}>
				<h2 className={styles.title}>Birthdays title</h2>
			</section>
			<section className={styles.birthdaysList}>
				{Object.keys(birthdaysList).length ?
					monthList.map((month) => (
						<div key={shortid.generate()} className={styles.monthWrapper}>
							<h3 className={styles.month}>{month}</h3>
							<ul>
								{birthdaysList[month]?.length ?
									birthdaysList[month].map(
										employee => <li key={shortid.generate()} className={styles.monthItem}>
											{`${employee.lastName} ${employee.firstName} - ${dayOfBirthday(employee.dob)}`}
										</li>
									)
									:
									<li className={styles.monthItem}>No Employees</li>
								}
							</ul>
						</div>
					))
					:
					<div>Employees List is empty</div>
				}
			</section>
		</article>
	);
};

