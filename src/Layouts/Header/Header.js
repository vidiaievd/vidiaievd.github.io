import {NavLink} from 'react-router-dom';
import {Logo, Link, Switcher} from '../../components';
import {StyledHeader, StyledWrapperHeader, StyledLine, StyledNavBar, StyledLinkWrapper} from './styles'

export const Header = ({ changeTheme }) => {
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
		<StyledHeader>
			<StyledWrapperHeader>
				<Logo />
				<StyledNavBar>
					<Switcher changeTheme={changeTheme} />
					{links.map(({ id, url, exact, title }) => (
						<StyledLinkWrapper key={id}>
							{
								url ? (
									<Link as={NavLink} to={url} >
										{title}
									</Link>
								) : (
									<Link  onClick={handleLogout}>
										{title}
									</Link>
								)}
						</StyledLinkWrapper>
					))}
				</StyledNavBar>
			</StyledWrapperHeader>
			<StyledLine />
		</StyledHeader>
	)
}