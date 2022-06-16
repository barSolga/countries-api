import styled from "styled-components";

const Country = ( { countryData }:any ) => {

  return (
    <CountryBox>
        <Img src={countryData.flags.png} alt={countryData.name.common + " flag"} />
        <h2>{countryData.name.common}</h2>
        <InfoBox>
          <Info><b>Population:</b> {countryData.population}</Info>
          <Info><b>Region:</b> {countryData.region}</Info>
          <Info><b>Capital:</b> {countryData.capital ? countryData.capital : 'none'}</Info>
        </InfoBox>
    </CountryBox>
  )
}

// ======= styled components ======= 
const CountryBox = styled.div`
  max-width: 350px;
  margin: 2em;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  overflow: hidden;
`;

const Img = styled.img`
  min-width: 100%;
  max-width: 350px;
  max-height: 150px;
`

const InfoBox = styled.div`

`;

const Info = styled.p`

`;



// ======= export component =======
export default Country