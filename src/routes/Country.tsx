import { useState, useEffect } from "react";
import Link from '../components/Link';
import styled from "styled-components";
import Border from "../components/Border";

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
          setCountry(result)
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
    let currencies: any = [...Object.values(country[0].currencies)];
    let languages: any = [...Object.values(country[0].languages)];
    let borders: any = country[0].borders? [...Object.values(country[0].borders)]: undefined;
    return (
      <Container>
        <Link href={'/'} text={'Back'} />
        <Wrapper>
          <Img className="country_img" src={country[0].flags.svg}/>
          <Content>
            <h2 className="heading">{country[0].name.common}</h2>

            <Details>
              <div className="desc-one">
                <p className="detail"><b>Native Name: </b>{country[0].altSpellings[1]}</p>
                <p className="detail"><b>Popilation: </b>{country[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p className="detail"><b>Region: </b>{country[0].region}</p>
                <p className="detail"><b>Sub Region: </b>{country[0].subregion}</p>
                <p className="detail"><b>Capital: </b>{country[0].capital}</p>
              </div>

              <div className="desc-two">
                <p className="detail"><b>Top Level Domain: </b>
                  {country[0].tld[0]}
                </p>
                <p className="detail"><b>Currencies: </b>
                    {
                      currencies !== undefined ?
                      currencies.map((curr:any, index:number) => {
                        return <span key={index}>{curr.name}, </span>
                      }) : 'no Currencies'
                    }
                </p>
                <p className="detail"><b>Languages: </b>
                  {
                      languages !== undefined ?
                      languages?.map((lang:any, index:number) => {
                        return <span key={index}>{lang}, </span>
                      }) : 'no Lang'
                  }
                </p>
              </div>
            </Details>

            <Borders>
              <p className="box-heading"><b>Border Countries:</b></p>
              <div className="box">
                  {
                      borders !== undefined ?
                      borders.map((borr:any, index:number) => {
                        return <Border key={index} value={borr} />
                      }) : 'no Borders'
                  }
              </div>
            </Borders>

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
  a {
    margin-top: 1em;
    margin-bottom: 4em;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1440px;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`

const Img = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  @media screen and (min-width: 768px){
    padding-right: 5em;
    width: 50%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .heading {
    font-size: 4rem;
    padding: .5em 0;
  }
  @media screen and (min-width: 768px){
    justify-content: space-evenly;
    width: 50%;
    .heading {
      padding: 0 0 .5em 0;
    }
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em 0;
  .desc-one, .desc-two {
    .detail {
      font-size: 1.4rem;
      margin: 1em 0;
    }
  }
  @media screen and (min-width: 768px){
    flex-direction: row;
    .desc-two {
      margin-left: 10em;
    }
  }

`


const Borders = styled.div`
  margin: 1em 0;
  .box-heading {
    font-size: 2rem;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0;
  }
  a {
    margin: 1em 1em 1em 0;
  }
  @media screen and (min-width: 768px){
  }
`

export default Country