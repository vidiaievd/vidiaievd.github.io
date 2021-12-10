import styled from 'styled-components/macro';
import {StyledLink} from '../../Link/';
import img from '../img/logo.svg';

export const StyledLogo = styled.div`
    display: flex;
	height: 100%;
	width: 10rem;
	background: center / contain no-repeat url(${img});
    color: green;
    fill: green;

    ${StyledLink} {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
`;