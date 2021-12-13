import PT from 'prop-types';
import {useInView} from 'react-intersection-observer';
import {Header, Footer, ToTopButton} from '../../components';
import {StyledLayoutWrapper, StyledWrapperContent} from './styles';

export const LayoutWrapper = ({ children }) => {
	const { ref, inView } = useInView({
		threshold: 0
	});

	return (
		<StyledLayoutWrapper>
			<Header ref={ref} isFixed={!inView}/>
			<ToTopButton isVisible={!inView}/>
			<StyledWrapperContent>
				{children}
			</StyledWrapperContent>
			<Footer />
		</StyledLayoutWrapper>
	)
}

LayoutWrapper.propTypes = {
	children: PT.node.isRequired
}