import PT from 'prop-types';
import {Header, Footer} from '../';
import { StyledLayoutWrapper, StyledWrapperContent } from './styles';
export const LayoutWrapper = ({ children, changeTheme }) => {
	return (
		 <StyledLayoutWrapper>
			<Header changeTheme={changeTheme}/>
			<StyledWrapperContent>
				{children}
			</StyledWrapperContent>
			<Footer />
		</StyledLayoutWrapper>
		
	)
}

LayoutWrapper.propTypes = {

}