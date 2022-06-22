import React from 'react'
import styled from 'styled-components'

const Link = ({ text, href }:any) => {
  return (
    <A href={href}>
        {text == 'Back' ? <i className='bx bx-arrow-back'></i>: ''}
        {text}
    </A>
  )
}

const A = styled.a`
    display: flex;
    align-items: center;
    padding: .6em 2em;
    text-align: center;
    background-color: var(--white);
    box-shadow: 0 0 5px #00000035;
    font-size: 1.6rem;
    text-decoration: none;
    transition: background-color .3s, color .3s;
    &:hover {
        background-color: #3e3e3e;
        color: #fff;
    }
    i {
        margin-right: 10px;
        font-size: 2rem;
    }
`

export default Link