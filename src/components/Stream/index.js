import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';
import { formatLongDate } from '../../helpers.js';
import Link from '../Link';
import Button from '../Button';
import calendar from '../../assets/calendar.svg';
import logo from '../../assets/logo.svg';

export const Stream = ({stream, date}) => {
    const Outer = styled.div`
        background: ${vars.colour.grey};
        border-bottom: 3px solid ${vars.colour.grey_dark};
        padding: 25px;
        display: flex;
        margin-bottom: 25px;
    `
    const TimeSection = styled.div`
        font-size: 26px;
        font-weight: 600;
        margin-right: 25px;
        position: relative;
        min-width: 77px;
    `
    const TopSection = styled.div`
        display: flex;
        justify-content: space-between; 
    `
    const DetailsSection = styled.div`
        width: 100%;
        span {
            margin-left: 5px;
        }
    `
    const Title = styled.h3`
        font-weight: 600;
        font-size: 20px;
        margin: 0;
    `
    const Description = styled.p`
        max-width: 700px;
    `
    const Icon = styled.img`
        width: 25px;
        height: auto;
        vertical-align: text-bottom;
        margin-right: 8px;
    `
    const VerticalCentre = styled.div`
        position: absolute;
        top: calc(50% - 16px);
        &:before {
            content: "";
            background: ${vars.colour.black};
            position: absolute;
            width: 22px;
            height: 22px;
            border-radius: 100%;
            left: -106px;
            top: calc(50% - 11px);
            display: none;

            @media ${vars.breakpoint.tablet} {
                display: block;
            }
        }
    `
    const ButtonContainer = styled.div`
        margin-top: 30px;
        margin-bottom: 15px;
    `

    return (
        <Outer>
            <TimeSection>
                <VerticalCentre>{stream.time}</VerticalCentre>
            </TimeSection>
            <DetailsSection>
                <TopSection>
                    <Title>{stream.title}</Title>
                    <span>{formatLongDate(date)}</span>
                </TopSection>
                <p>
                    Streamed by: 
                    {stream.company_url ? 
                        <span><Link to={stream.company_url} target={true}>{stream.company}</Link></span>
                        :
                        <span>{stream.company}</span>
                    }
                </p>
                <Description>{stream.desc}</Description>
                
                <ButtonContainer>
                    <Button to="/">
                        <Icon src={calendar} />
                        Add to calendar
                    </Button>
                    <Button to={stream.url} target={true} primary={true}>
                        <Icon src={logo} />
                        View stream
                    </Button>
                </ButtonContainer>
            </DetailsSection>
        </Outer>
    )
}

export default Stream
