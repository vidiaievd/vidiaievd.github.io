import PT from 'prop-types';
import { Header, Footer } from '../';
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

}