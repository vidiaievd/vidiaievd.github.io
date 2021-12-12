import PT from "prop-types";
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import t from '../../i18n/translate';
import { addBirthday, removeBirthday, selectIds } from "../../store/birthdaySlice";
import {StyledUserCard, StyledTitleCard, StyledLabel} from './styles';

export const UserCard = ({ employee, i }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (ref) {
            setTimeout(() => {
                setVisible(true)
            }, i * 100)
        }
        return setVisible(null);
    }, [i, ref])
    const dispatch = useDispatch();
    const Ids = useSelector(selectIds);

    const handleSetDB = () => {
        dispatch(addBirthday(employee));
    };

    const handleDelDB = () => {
        dispatch(removeBirthday(employee.id));
    };

    const isChecked = (Ids.includes(employee.id));

    

    return (
        <StyledUserCard
            ref={ref}
            isCheck={isChecked}
            visible={visible}
        >

            <StyledTitleCard isCheck={isChecked}>
                {`${employee.firstName} ${employee.lastName}`}
            </StyledTitleCard>
            <input
                id={`notActive_${employee.id}`}
                type="radio"
                name={employee.id}
                value="false"
                defaultChecked={!isChecked}
                onChange={handleDelDB}
            />
            <StyledLabel htmlFor={`notActive_${employee.id}`}>{t('not-active')}</StyledLabel>
            <br />
            <input
                id={`active_${employee.id}`}
                type="radio"
                name={employee.id}
                value="true"
                onChange={handleSetDB}
                defaultChecked={isChecked}
            />
            <StyledLabel htmlFor={`active_${employee.id}`}>{t('active')}</StyledLabel>
        </StyledUserCard>
    );
};

UserCard.propTypes = {
    employee: PT.shape({
        id: PT.string.isRequired,
        firstName: PT.string.isRequired,
        lastName: PT.string.isRequired,
        dob: PT.string.isRequired,
    }).isRequired,
};
