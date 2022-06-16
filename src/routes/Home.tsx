import { useState, useEffect } from "react";
import styled from "styled-components";
import Controls from "../components/Controls";
import Countries from "../components/Countries";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [name, setName] = useState('')
  let apiUrl: string = name === '' ? `${region}` : `name/${name}`;

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/' + apiUrl)
      .then(res => res.json())
      .then(result => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [apiUrl])

  if (error) {
    return <ErrorMsg>Couldn`t load countries list</ErrorMsg>;
  } else if (!isLoaded) {
    return <ErrorMsg>Loading...</ErrorMsg>;
  } else {
    return (
      <Container>
        <Controls setRegion={setRegion} setName={setName} />
        <Wrapper>
          {
            countries.length !== undefined ? <Countries countries={countries} /> : <ErrorMsg>No results</ErrorMsg>
          }
          
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1440px;
`

const ErrorMsg = styled.p`
  text-align: center;
  font-size: 3rem;
  padding: 3em 0;
`

export default Home