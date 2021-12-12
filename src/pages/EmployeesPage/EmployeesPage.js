import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from 'shortid';
import { FormattedDate } from 'react-intl';
import t from '../../i18n/translate';
import { getEmployees, selectEmployees } from "../../store/employeesSlice";
import { selectBirthdays } from "../../store/birthdaySlice";
import { UserCard, Loader, Error } from "../../components";
import { alphabet, setMonthList, birthdayListByMonth, employeesByAlphabet } from "../../utils";
import {
	StyledWrapperPage,
	StyledEmployees,
	StyledBirthdays,
	StyledBirthdaysList,
	StyledMonthList,
	StyledTitle,
	StyledTitleWrapper,
	StyledMonthItem,
	StyledTitleItem,
	StyledWrapperCards,
	StyledWrapperLetterList,
	StyledTitleLetter,
	StyledEmptyCard,
} from './styles'

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
							{employeesWithLetter[letter].map((employeeData, i) => (
								<UserCard key={shortid.generate()} employee={employeeData} i={i} />
							))}
						</StyledWrapperLetterList>
					) : (
						<StyledWrapperLetterList key={shortid.generate()}>
							<StyledTitleLetter>{letter}</StyledTitleLetter>
							<StyledEmptyCard>
								<StyledTitleItem as="h4" card>{t('no-employees')}</StyledTitleItem>
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
			<StyledEmployees>
				<StyledTitle>{t('employees-title')}</StyledTitle>
				{memoizedEmployeesList}
			</StyledEmployees>
			<StyledBirthdays>
					<StyledTitle as="h2">{t('birthdays-title')}</StyledTitle>
					{Object.keys(birthdaysList).length ?
						monthList.map((month) => (
							<StyledMonthList key={shortid.generate()}>
								<StyledTitleItem underline>{t(month.toLowerCase())}</StyledTitleItem>
								<ul>
									{birthdaysList[month]?.length ?
										birthdaysList[month].map(
											employee => <StyledMonthItem key={shortid.generate()}>
												{`${employee.lastName} ${employee.firstName} - `}
												<FormattedDate value={employee.dob} day='2-digit' /> {' '}
												<FormattedDate value={employee.dob} month='long' /> {', '}
												<FormattedDate value={employee.dob} year='numeric' />{t('year')}
											</StyledMonthItem>
										)
										:
										<StyledMonthItem>{t('no-employees')}</StyledMonthItem>
									}
								</ul>
							</StyledMonthList>
						))
						:
						<StyledTitleItem>{t('list-empty')}</StyledTitleItem>
					}
			</StyledBirthdays>
		</StyledWrapperPage>
	);
};

