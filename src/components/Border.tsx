import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Border = ({ value }:any) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [border, setBorder] = useState<any[]>([]);
  let apiUrl: string = value;

  console.log(value);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/alpha/' + apiUrl)
      .then(res => res.json())
      .then(result => {
          setIsLoaded(true);
          setBorder(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <p>no data</p>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    console.log(border);
    return (
      <A href={'/country/' + border[0].cca2}>
        {border[0].name.common}
      </A>
    )
  }
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

export default Border