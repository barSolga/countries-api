import Country from "./Country";

const Countries = ( { countries }:any ) => {

  return (
    <>
      {
        countries?.map((country: any) => (
            <Country key={country.cca2} countryData={country} />
        ))
      }
    </>
  )
}

export default Countries