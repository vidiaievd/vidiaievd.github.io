import { createGlobalStyle } from 'styled-components';
import DinProFont from './fonts/dinpro-bold.otf';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	@font-face {
 		font-family: 'DinPro';
  		src: local('DinPro'), url(${DinProFont}) format('otf');
	}

	html {
		font-size: 18px;
		height: 100%;
	}

	body {
		background: ${props => props.theme.bgColor.primary};
		color: ${props => props.theme.fontColor.primary};
  		height: 100%;
		font-family: 'DinPro', 'Open Sans', sans-serif, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	#root {
		height: 100%;
	}
`;