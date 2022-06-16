import { useState } from "react";
import styled from 'styled-components'

const Controls = () => {
  return (
    <ControlBox>
        <Search>
            <i className='bx bx-search'></i>
            <Input type="text" placeholder='Search for a country...' />
        </Search>
        <Select>
            Filter by Region
            <i className='bx bx-chevron-down' ></i>
        </Select>
    </ControlBox>
  )
}

const ControlBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100;
    padding: 2em;
    @media (min-width: 768px) {
        flex-direction: row;
        width: 300px;
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: .3em 1em;
    font-size: 1.8rem;
    border-radius: 8px;
    box-shadow: var(--shadow);
    background-color: var(--white);
    i {
        margin: .5em;
        font-size: 2.5rem;
    }
`;

const Input = styled.input`
    width: 100%;
    border: none;
    &:focus {
        outline: none;
    }
    @media (min-width: 768px) {
        width: 300px;
    }
`;

const Select = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px;
    padding: 1.5em 1em;
    margin-top: 2em;
    font-size: 1.4rem;
    border: none;
    border-radius: 8px;
    box-shadow: var(--shadow);
    background-color: var(--white);
    cursor: pointer;
    i {
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        margin-top: 0;
    }
`;




export default Controls