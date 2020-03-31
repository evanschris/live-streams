import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';
import filter from '../../assets/filter.svg';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import { GenericInner } from '../PageContainer';
import Link from '../Link';
import { isToday } from '../../helpers.js';

export const StickyToolbar = ({dateInView, currentTime}) => {
    const Outer = styled.div`
        position: sticky;
        background: ${vars.colour.off_white};
        padding: 15px 0;
        z-index: 999;
    `
    const Icon = styled.img`
        width: 17px;
        height: auto;
        vertical-align: middle;
    `

    const Inner = styled(GenericInner)`
        display: flex;
        justify-content: space-between;
    `
    const LinkContainer = styled.div`
        vertical-align: middle;
        line-height: 35px;
        a {
            line-height: 35px;
            font-size: 20px;
            img {
                margin-right: 10px;
                margin-top: -3px;
            }
        }
    `
    const Buffer = styled.div`
        width: 80px;
    `

    const DateContainer = styled.div`
    `
    const DateTitle = styled.h1`
        display: inline-block;
        font-weight: 600;
        font-size: 20px;
        line-height: 35px;
        margin: 0 125px;
    `
    return (
        <Outer>
            <Inner>
                <Buffer />
                <DateContainer>
                    <Icon src={arrowLeft} alt=""/>
                    <DateTitle>{isToday(dateInView, currentTime)}</DateTitle>
                    <Icon src={arrowRight} alt=""/>
                </DateContainer>
                <LinkContainer>
                    <Link to="/">
                        <Icon src={filter} alt=""/>
                        Filter
                    </Link>
                </LinkContainer>
            </Inner>
        </Outer>
    )
}

export default StickyToolbar
