import PT from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

import { addBirthday, removeBirthday, selectIds } from "../../store/birthdaySlice";

export const UserCard = ({ employee }) => {
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
        <div className={`user-card ${isChecked ? "active" : ""}`}>
            <h4 className={`user-card__name ${isChecked ? "active" : ""}`}>
                {`${employee.firstName} ${employee.lastName}`}
            </h4>
            <input
                id='not-active'
                type="radio"
                name={employee.id}
                value="false"
                defaultChecked={!isChecked}
                onChange={handleDelDB}
            />
            <label htmlFor="not-active">not active</label>
            <br />
            <input
                id='active'
                type="radio"
                name={employee.id}
                value="true"
                onChange={handleSetDB}
                defaultChecked={isChecked}
            />
            <label htmlFor="active">active</label>
        </div>
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
