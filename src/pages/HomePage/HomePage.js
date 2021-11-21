import { Link } from 'react-router-dom';

export const HomePage = () => {
	return (
		<div>
			<p>HomePage</p>
			<Link to="/employees">Employees Page</Link>
		</div>
	)
}