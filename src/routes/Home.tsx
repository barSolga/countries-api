import { useState, useEffect } from "react";
import styled from "styled-components";
import Countries from "../components/Countries";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
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
  }, []);

  if (error) {
    return <div>Couldn`t load countries list</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <Countries countries={countries} />
        {/* {countries?.length > 0 ?  : 'No Countries to show' } */}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
`

export default Home