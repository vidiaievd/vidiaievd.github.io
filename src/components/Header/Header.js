import {NavLink} from 'react-router-dom';
import t from '../../i18n/translate';
import {Logo, Link, Switcher} from '../../components';
import {LOCALES} from '../../i18n';
import {THEME_NAME} from '../../theme';
import {NAVIGATION} from '../../settings';
import {StyledHeader, StyledWrapperHeader, StyledLine, StyledNavBar, StyledLinkWrapper} from './styles'

export const Header = () => {
	const handleLogout = () => {
		console.log('[ logout :) ]')
	}

	return (
		<StyledHeader>
			<StyledWrapperHeader>
				<Logo />
				<StyledNavBar>
					<Switcher type='theme' list={THEME_NAME}/>
					<Switcher type='language' list={LOCALES}/>
					{NAVIGATION.map(({ id, url, translateKey }) => (
						<StyledLinkWrapper key={id}>
							{
								url ? (
									<Link as={NavLink} to={url} >
										{t(translateKey)}
									</Link>
								) : (
									<Link  onClick={handleLogout}>
											{t(translateKey)}
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