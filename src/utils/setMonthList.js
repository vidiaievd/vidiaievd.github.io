import { nameOfMonth } from './nameOfMonth';

export const setMonthList = (getMonth = 1) => {
    const tempArr = [];
    for (let i = getMonth - 1; i < 12; i++) {
      tempArr.push(nameOfMonth[i]);
    }
    for (let i = 0; i < getMonth - 1; i++) {
      tempArr.push(nameOfMonth[i]);
    }
    return tempArr;
  };
