import PT from 'prop-types';
import { Header, Footer } from '../../components';
import { StyledLayoutWrapper, StyledWrapperContent } from './styles';

export const LayoutWrapper = ({ children }) => {
	return (
		<StyledLayoutWrapper>
			<Header />
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