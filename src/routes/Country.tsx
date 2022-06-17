import { useState, useEffect } from "react";
import Link from '../components/Link';
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


  if (error) {
    return <ErrorMsg>Couldn`t load country data</ErrorMsg>;
  } else if (!isLoaded) {
    return <ErrorMsg>Loading...</ErrorMsg>;
  } else {
    return (
      <Container>
        <Link href={'/'} text={'Back'} />
        <Wrapper>
          <Img src={country[0].flags.png}/>
          <Content>
            <Heading>{country[0].name.common}</Heading>
            <Desc>
              <p><b>Native Name: </b>{country[0].altSpellings[1]}</p>
              <p><b>Popilation: </b>{country[0].population}</p>
              <p><b>Region: </b>{country[0].region}</p>
              <p><b>Sub Region: </b>{country[0].subregion}</p>
              <p><b>Capital: </b>{country[0].capital}</p>
            </Desc>

          </Content>
        </Wrapper>
      </Container>
    );
  }
}

const ErrorMsg = styled.p`
  text-align: center;
  font-size: 3rem;
  padding: 3em 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  @media screen and (min-width: 768px){
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

const Img = styled.img`
  width: 100%;
  margin: 3em 0;
  max-height: 300px;
  @media screen and (min-width: 768px){
    margin: 0;
    width: 50%;
    padding-right: 5em;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px){
    justify-content: space-evenly;
    width: 50%;
    padding: 5em 0;
  }
`

const Heading = styled.h2`
  font-size: 3rem;
  padding: .5em 0;
`

const Desc = styled.div`
  p {
    font-size: 1.4rem;
    margin: 1em 0;
  }
`

export default Country