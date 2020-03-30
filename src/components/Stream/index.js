import React from 'react'
import styled from 'styled-components';
import * as vars from '../../theme.js';

export const Stream = ({stream}) => {
    const StreamLink = styled.a`
        display: block;
    `
    return (
        <StreamLink href={stream.url} title={stream.title} target="_blank">
            {stream.title}
        </StreamLink>
    )
}

export default Stream
