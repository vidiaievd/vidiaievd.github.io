import PT from "prop-types";
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBirthday, removeBirthday, selectIds } from "../../store/birthdaySlice";
import {StyledUserCard, StyledTitleCard, StyledLabel} from './styles';

export const UserCard = ({ employee }) => {
    // const [animation, setAnimation] = useState(false);
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
            isCheck={isChecked}
            // onClick={() => setAnimation(true)}
            // onAnimationEnd={() => setAnimation(false)}
            // animation={animation}
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
            <StyledLabel htmlFor={`notActive_${employee.id}`}>not active</StyledLabel>
            <br />
            <input
                id={`active_${employee.id}`}
                type="radio"
                name={employee.id}
                value="true"
                onChange={handleSetDB}
                defaultChecked={isChecked}
            />
            <StyledLabel htmlFor={`active_${employee.id}`}>active</StyledLabel>
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
