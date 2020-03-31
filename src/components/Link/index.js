import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';

export const Link = ({to, target, title, children}) => {
    const StyledLink = styled.a`
        font-weight: 600;
        text-decoration: none;
        color: ${vars.colour.black};

        &:hover {
            text-decoration: underline;
        }
        &:focus {
            box-shadow: ${vars.colour.focus} 0px 0px 0px 2px;
            outline: none;
        }
    `
    
    return (
        <StyledLink href={to} target={target ? "_blank" : "_parent"} title={title ? title : children}>
            {children}
        </StyledLink>
    )
}

export default Link
