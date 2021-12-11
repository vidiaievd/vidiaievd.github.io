import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {IntlProvider} from 'react-intl';
import messages from './messages/index';

const Provider = ({children}) => {
	const getLanguage = useSelector(({ sitting }) => sitting.language);

	return (
	<IntlProvider
		locale={getLanguage}
		textComponent={Fragment}
		messages={messages[getLanguage]}
	>
		{children}
	</IntlProvider>
)};

export default Provider