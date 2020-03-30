import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';

export const SingleDay = ({date, children}) => {
    const Outer = styled.div`
    `

    return (
        <Outer>
            <p>{date}</p>
            {children}
        </Outer>
    )
}

export default SingleDay
