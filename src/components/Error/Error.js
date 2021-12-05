import PT from "prop-types";
import {Link} from 'react-router-dom'
import './style.scss'

export const Error = ({message}) => {
	return (
		<div className="backdrop">
			<div className="modal">
				<h1>Error:</h1>
				<hr/>
				<p>{message}</p>
				<Link to="/" className="error-button">Go back Home</Link>
			</div>
		</div>
	)
}

Error.propTypes = {
	message: PT.string.isRequired
};