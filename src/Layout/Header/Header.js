import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {

	const handleLogout = () => {

	}

	const AUTHENTICATED_LINKS = [
		{
			id: '1',
			url: '/',
			exact: true,
			title: 'Home'
		},
		{
			id: '2',
			url: '/employees',
			exact: true,
			title: 'Employees',
		},
		{
			id: '3',
			url: '/profile',
			exact: true,
			title: 'Profile'
		},
		{
			id: '4',
			title: 'Logout'
		}
	];

	const NOT_AUTHENTICATED_LINKS = [
		{
			id: '1',
			url: '/',
			exact: true,
			title: 'Home'
		},
		{
			id: '2',
			url: '/employees',
			exact: true,
			title: 'Employees',
		},
		{
			id: '5',
			url: '/auth',
			title: 'Auth'
		}
	];

	const links = NOT_AUTHENTICATED_LINKS;

	return (
		<>
			<header className={styles.header}>
				<Link className={styles.logo} to="/"/>
				<nav className={styles.nav}>
					{links.map(({ id, url, exact, title }) => (
						<div className={styles.item} key={id}>
							{
								url ? (
									<Link to={url} >
										{title}
									</Link>
								) : (
									<Link as={NavLink} onClick={handleLogout}>
										{title}
									</Link>
								)}
						</div>

					))}
				</nav>
			</header >
			<hr className={styles.hr} />
		</>
	)
}