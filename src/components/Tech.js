import styled from 'styled-components'

const Tech = styled.span`
    background: ${props => props.color || 'rgba(0, 0, 0, 0.15)'};
    padding: 5px 15px;
    margin-right: 10px;
    border-radius: 5px;
`

export default Tech
