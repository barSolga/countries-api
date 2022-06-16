import { useState, useEffect } from "react";
import styled from "styled-components";

const Country = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState<any[]>([]);
  let apiUrl: string = window.location.pathname.split('/')[2];

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/alpha/' + apiUrl)
      .then(res => res.json())
      .then(result => {
          setIsLoaded(true);
          setCountry(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [apiUrl])

  console.log(country)

  if (error) {
    return <ErrorMsg>Couldn`t load country data</ErrorMsg>;
  } else if (!isLoaded) {
    return <ErrorMsg>Loading...</ErrorMsg>;
  } else {
    return (
      <ErrorMsg>
        {country[0].name.common}
      </ErrorMsg>
    );
  }
}

const ErrorMsg = styled.p`
  text-align: center;
  font-size: 3rem;
  padding: 3em 0;
`

export default Country