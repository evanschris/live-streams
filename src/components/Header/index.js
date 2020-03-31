import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';
import logo from '../../assets/logo.svg';
import { GenericInner } from '../PageContainer';
import Link from '../Link';

export const Header = () => {
    const Outer = styled.div`
        background: ${vars.colour.primary};
        padding: 15px 0;
    `
    const Icon = styled.img`
        width: 55px;
        height: auto;
        vertical-align: middle;
    `

    const Inner = styled(GenericInner)`
        display: flex;
        justify-content: space-between;
    `
    const LinkContainer = styled.div`
        vertical-align: middle;
        a {
            line-height: 40px;
            font-size: 20px;
        }
    `
    return (
        <Outer>
            <Inner>
                <Icon src={logo} alt=""/>
                <LinkContainer>
                    <Link to="/">Suggest a stream</Link>
                </LinkContainer>
            </Inner>
        </Outer>
    )
}

export default Header
