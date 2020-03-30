import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';

export const PageContainer = (props) => {
    const Outer = styled.div`
        max-width: ${vars.screen_size.desktop};
        margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '15px' : '25px') } auto;
        padding: 0 15px;
        
        @media ${vars.breakpoint.tablet} {
            padding: 0 30px;
            margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '25px' : '40px') }  auto;
        }
        @media ${vars.breakpoint.desktop} {
            margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '40px' : '60px') }  auto;
        }
        @media ${vars.breakpoint.super_hd} {
            margin: ${props.margin === 'none' ? '0px' : (props.margin === 'small' ? '60px' : '80px') }  auto;
            max-width: ${vars.screen_size.hd};
            padding: 0 75px;
        }
    `
    const Inner = styled.div`
        width: 66%;
        display: inline-block;
    `
 
    return (
        <Outer>
            <Inner>{props.children}</Inner>
        </Outer>
    )
}

export default PageContainer
