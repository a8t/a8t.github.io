import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../assets/vars.json'

const faSymbols = {
    frontend: 'diamond',
    backend: 'cogs',
    misc: 'random',
}

const colors = {
    frontend: 'lightgreen',
    backend: 'lightpink',
    misc: 'lightblue',
}

const TechBubble = styled.div`
    background: ${props => props.color || 'rgba(0, 0, 0, 0.15)'};
    padding: 5px 13px;
    margin-right: 8px;
    border-radius: 6px;
    font-size: 0.9em;
    @media screen and (max-width: ${breakpoints.xsmall}) {
        border-radius: 5px;
        font-size: 0.8em;
        margin-right: 5px;
    }
`

const Symbol = styled.div`
    margin-right: 4px;
    margin-top: 1px;
`

const Tech = props => (
    <TechBubble color={colors[props.type]}>
        <Symbol className={`fa fa-${faSymbols[props.type]}`} />
        {props.children}
    </TechBubble>
)

export default Tech
