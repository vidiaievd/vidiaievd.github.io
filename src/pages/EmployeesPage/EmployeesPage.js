import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from 'shortid';
import { getEmployees, selectEmployees } from "../../store/employeesSlice";
import { selectBirthdays } from "../../store/birthdaySlice";
import { UserCard, Loader, Error } from "../../components";
import { alphabet, setMonthList, birthdayListByMonth, parseOfDate, employeesByAlphabet } from "../../utils";
import {
	StyledWrapperPage, 
	StyledEmployeesTitle, 
	StyledEmployeesList, 
	StyledBirthdaysTitle, 
	StyledBirthdaysList, 
	StyledTitle,
	StyledMonthList,
	StyledMonthItem,
	StyledTitleItem,
	StyledWrapperCards,
	StyledWrapperLetterList,
	StyledTitleLetter,
	StyledEmptyCard,
} from './styles'

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
		<StyledWrapperCards>
			{alphabet.map(letter => (
				employeesWithLetter[letter]
					? (
						<StyledWrapperLetterList key={shortid.generate()}>
							<StyledTitleLetter>{letter}</StyledTitleLetter>
							{employeesWithLetter[letter].map(employeeData => (
								<UserCard key={shortid.generate()} employee={employeeData}/>
							))}
						</StyledWrapperLetterList>
					) : (
						<StyledWrapperLetterList key={shortid.generate()}>
							<StyledTitleLetter>{letter}</StyledTitleLetter>
							<StyledEmptyCard>
								<StyledTitleItem as="h4" card>No Employees</StyledTitleItem>
							</StyledEmptyCard>
						</StyledWrapperLetterList>
					)
			))}
		</StyledWrapperCards>
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
		<StyledWrapperPage>
			<StyledEmployeesTitle>
				<StyledTitle>Employees</StyledTitle>
			</StyledEmployeesTitle>
			<StyledEmployeesList>
				{memoizedEmployeesList}
			</StyledEmployeesList>
			<StyledBirthdaysTitle>
				<StyledTitle as="h2">Birthdays title</StyledTitle>
			</StyledBirthdaysTitle>
			<StyledBirthdaysList>
				{Object.keys(birthdaysList).length ?
					monthList.map((month) => (
						<StyledMonthList key={shortid.generate()}>
							<StyledTitleItem underline>{month}</StyledTitleItem>
							<ul>
								{birthdaysList[month]?.length ?
									birthdaysList[month].map(
										employee => <StyledMonthItem key={shortid.generate()}>
											{`${employee.lastName} ${employee.firstName} - ${dayOfBirthday(employee.dob)}`}
										</StyledMonthItem>
									)
									:
									<StyledMonthItem>No Employees</StyledMonthItem>
								}
							</ul>
						</StyledMonthList>
					))
					:
					<StyledTitleItem>Employees List is empty</StyledTitleItem>
				}
			</StyledBirthdaysList>
		</StyledWrapperPage>
	);
};

