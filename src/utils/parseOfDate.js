import { nameOfMonth } from './nameOfMonth';

export const parseOfDate = (date) => {
    const _date = new Date(date);
    _date.day = _date.getDate();
    _date.month = nameOfMonth[_date.getMonth() + 1];
    _date.year = _date.getFullYear();
    return _date;
};