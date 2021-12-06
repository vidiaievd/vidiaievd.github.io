import PT from 'prop-types';
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<article>
				{children}
			</article>
			<Footer />
		</>
	)
}

Layout.propTypes = {

}