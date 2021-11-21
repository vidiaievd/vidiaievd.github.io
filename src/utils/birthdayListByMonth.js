import { parseOfDate } from './parseOfDate';

export const birthdayListByMonth = (list=[]) => {
    const tempArr = [];
    for (let i = 0; i < list.length; i++) {
        let keys = parseOfDate(list[i].dob).month;
        if (!tempArr[keys]) {
            tempArr[keys] = [];
        }
        tempArr[keys].push(list[i]);
    }
    return tempArr;
}