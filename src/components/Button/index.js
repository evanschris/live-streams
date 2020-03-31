import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';

export const Button = ({to, title, target, primary, children}) => {
    const StyledButton = styled.a`
        font-weight: 600;
        text-decoration: none;
        color: ${vars.colour.black};
        border: 2px solid ${vars.colour.black};
        padding: 10px 15px;
        margin-right: 15px;
        margin-top: 25px;

        background: ${primary ? vars.colour.primary : 'transparent'};
        

        &:hover {

        }
        &:focus {
            box-shadow: ${vars.colour.focus} 0px 0px 0px 2px;
            outline: none;
        }
    `
    
    return (
        <StyledButton href={to} target={target ? "_blank" : "_parent"} title={title ? title : children}>
            {children}
        </StyledButton>
    )
}

export default Button
