import {StyledToTopButton} from './styles';


export const ToTopButton = ({isVisible}) => {
	const handleToTop = () => {
		window.scrollTo({ top: 0 });
	}
	return (
		<StyledToTopButton isVisible={isVisible} onClick={handleToTop}/>
	)
}