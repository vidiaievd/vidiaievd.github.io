import { useContext, useMemo } from 'react';
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { ThemeContext } from 'styled-components';
import t from '../../i18n/translate';
import { selectEmployees } from "../../store/employeesSlice";
import { selectBirthdays } from "../../store/birthdaySlice";
import { parseOfDate, nameOfMonth } from '../../utils';
import { StyledWrapperChart } from './styles';

export const ChartsPage = () => {
	const birthdays = useSelector(selectBirthdays);
	const employees = useSelector(selectEmployees);
	const palette = useContext(ThemeContext);

	const fillData = data => {
		const _data = Array(12).fill(0);
		data.map(employee => _data[parseOfDate(employee?.dob).getMonth()]++);
		return _data;
	};

	const options = useMemo(() => ({
		grid: {
			xaxis: {
				type: 'category',
				lines: {
					show: true
				},
			},
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: true,
			labels: {
				style: {
					colors: palette.fontColor.primary,
				},
			},
		},

		noData: {
			text: 'STATISTICS NOT FOUND',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: "white",
				fontSize: '22px',
			}
		},
		chart: {
			toolbar: {
				show: false,
			},
			foreColor: palette.fontColor.primary,
		},
		stroke: {
			width: 2,
			curve: 'smooth',
		},
		xaxis: {
			categories: nameOfMonth,
			labels: {
				style: {
					colors: palette.fontColor.primary,
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: palette.fontColor.primary,
				},
			},
		},
		tooltip: {
			theme: palette.type,
		}
	}), [palette]);

	const series = useMemo(() => ([
		{
			name: 'active',
			data: fillData(birthdays),
		},
		{
			name: 'not active',
			data: fillData(employees),
		}
	]), [birthdays, employees]);

	return (
		<StyledWrapperChart>
			<h1>{t('title-charts')}</h1>
			<Chart
				options={options}
				series={series}
				type="area"
				height="90%"
				width="100%"
			/>
		</StyledWrapperChart >
	)
};

