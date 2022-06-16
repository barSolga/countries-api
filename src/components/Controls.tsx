import { useState } from "react";
import styled from 'styled-components';

const Controls = ({ setRegion, setName, filterCountries }:any ) => {
    const [option, setOption] = useState('Filter by Region');
    const [select, setSelect] = useState(false);

    return (
        <ControlBox>
            <Search>
                <i className='bx bx-search'></i>
                <Input 
                    type="text" 
                    placeholder='Search for a country...' 
                    onInput={(event:any) => {
                        setName(`${event.target.value}`);
                    }} />
            </Search>
            <Select onClick={() => setSelect(!select)}>
                <p>{option}</p>
                <i className='bx bx-chevron-down' ></i>
                <Options className={select ? 'active' : ''} >
                    <p onClick={() => {setRegion('all'); setOption('All')}}>All</p>
                    <p onClick={() => {setRegion('region/africa'); setOption('Africa')}}>Africa</p>
                    <p onClick={() => {setRegion('region/america'); setOption('America')}}>America</p>
                    <p onClick={() => {setRegion('region/asia'); setOption('Asia')}}>Asia</p>
                    <p onClick={() => {setRegion('region/europe'); setOption('Europe')}}>Europe</p>
                    <p onClick={() => {setRegion('region/oceania'); setOption('Oceania')}}>Oceania</p>
                </Options>
            </Select>
        </ControlBox>
    )
}

const ControlBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    padding: 3em;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: .3em 1em;
    font-size: 1.8rem;
    border-radius: 8px;
    width: 100%;
    box-shadow: var(--shadow);
    background-color: var(--white);
    i {
        margin: .5em;
        font-size: 2.5rem;
    }
    @media (min-width: 768px) {
        width: 400px;
    }
`;

const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
    @media (min-width: 768px) {
        width: 300px;
    }
`;

const Select = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.5em 2em;
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
        width: 250px;
    }
`;

const Options = styled.div`
    position: absolute;
    text-align: left;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    margin-top: 1em;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: var(--shadow);
    overflow: hidden;
    p {
        padding: 1em 2em;
        &:hover {
            background-color: #3e3e3e;
            color: var(--white)
        }
    }
    &.active {
        height: auto;
    }
`




export default Controls