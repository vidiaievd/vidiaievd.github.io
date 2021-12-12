import { useDispatch, useSelector } from 'react-redux';
import { StyledSwitcher } from './styles';
import { reducers } from '../../store/sittingSlice';

export const Switcher = ({type, list}) => {
	const dispatch = useDispatch();
	const currentValue = useSelector(({ sitting }) => sitting[type]);

	const handleChangeValue = event => {
		dispatch(reducers[type](event.target.value));
	}

	const current = Object.values(list).find(item => item === currentValue);

	return (
		<StyledSwitcher onChange={handleChangeValue} defaultValue={current}>
		 	{Object.keys(list).map(item => (
		 		<option value={list[item]} key={list[item]}>{item}</option>
		 	))}
		 </StyledSwitcher>
	)
}
