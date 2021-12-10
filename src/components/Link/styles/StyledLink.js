import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: ${props => props.theme.fontColor.primary};
    font-weight: 600;
    text-decoration: underline transparent;
    cursor: pointer;
    transition: text-decoration 150ms ease;

    &.active,
    &:hover {
        text-decoration: underline ${props => props.theme.borderColor.card};
    }

    &.active {
        cursor: default;
    }
`;
