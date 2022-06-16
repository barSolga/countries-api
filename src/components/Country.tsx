import styled from "styled-components";

const Country = ( { countryData }:any ) => {

  return (
    <CountryBox>
        <Img src={countryData.flags.png} alt={countryData.name.common + " flag"} />
        <InfoBox>
          <Name>{countryData.name.common}</Name>
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
  box-shadow: var(--shadow);
  background-color: var(--white);
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  @media (min-width: 310px) {
    width: 300px;
    height: 180px;
  }
`;

const InfoBox = styled.div`
  padding: 0 2em 4em 2em;
`;

const Name = styled.h2`
  margin: 1em 0;
  font-size: 1.8rem;
  max-width: 20ch;
`;

const Info = styled.p`
  margin-bottom: .1em 0;
  font-size: 1.2rem;
`;



// ======= export component =======
export default Country