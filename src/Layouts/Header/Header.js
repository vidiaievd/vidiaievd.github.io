import {NavLink} from 'react-router-dom';
import t from '../../i18n/translate';
import {Logo, Link, Switcher, LanguageSwitcher} from '../../components';
import {StyledHeader, StyledWrapperHeader, StyledLine, StyledNavBar, StyledLinkWrapper} from './styles'

export const Header = ({ changeTheme }) => {
	const handleLogout = () => {

	}

	const AUTHENTICATED_LINKS = [
		{
			id: '1',
			url: '/',
			exact: true,
			title: t('home-menu'),
		},
		{
			id: '2',
			url: '/employees',
			exact: true,
			title: t('employees-menu'),
		},
		{
			id: '3',
			url: '/profile',
			exact: true,
			title: t('profile-menu'),
		},
		{
			id: '4',
			title: t('logout-menu'),
		}
	];

	const NOT_AUTHENTICATED_LINKS = [
		{
			id: '1',
			url: '/',
			exact: true,
			title: t('home-menu'),
		},
		{
			id: '2',
			url: '/employees',
			exact: true,
			title: t('employees-menu'),
		},
		{
			id: '5',
			url: '/auth',
			title: t('auth-menu'),
		}
	];

	const links = NOT_AUTHENTICATED_LINKS;

	return (
		<StyledHeader>
			<StyledWrapperHeader>
				<Logo />
				<StyledNavBar>
					<LanguageSwitcher />
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