import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';
import { formatDate } from '../../helpers.js';

export const SingleDay = ({date, numberOfStreams, cardHeight, children}) => {
    const Outer = styled.div`
        margin-bottom: 175px;
        width: 100%;
        position: relative;
    `
    const Date = styled.div`
        position: absolute;
        left: calc(50% - 50px);
        top: -92px;
        h2 {
            margin: 0;
        }
    `
    const TimeLineOuter = styled.div`
        width: 60px;
        height: ${numberOfStreams*cardHeight + 100}px;
        float: left;
        margin-right: 40px;
        position: relative;
        display: none;

        @media ${vars.breakpoint.tablet} {
            display: block;
        }
    `
    const TimeLine = styled.div`
        width: 4px;
        height: calc(100% - ${cardHeight/2}px);
        background: ${vars.colour.black};
        position: absolute;
        left: calc(50% - 2px);
        top: ${cardHeight/2}px;

        &:after {
            content: "";
            width: 150px;
            height: 4px;
            background: ${vars.colour.black};
            position: absolute;
            bottom: 0;
        }
    `

    return (
        <Outer>
            <Date><h2>{formatDate(date)}</h2></Date>
            <TimeLineOuter>
                <TimeLine />
            </TimeLineOuter>
            {children}
        </Outer>
    )
}

export default SingleDay