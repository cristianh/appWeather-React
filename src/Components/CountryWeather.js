import React from 'react'
import { useContrysData } from '../Hook/useContrysData'
import { InfoWeatherCountry } from './InfoWeatherCountry';

export const CountryWeather = ({ country }) => {

    const { data, loading } = useContrysData(country)

    console.log(data);

    return (
        <>
           {loading? 'Cargando...':<InfoWeatherCountry data={data}/> }
        </>
    )
}

CountryWeather.defaultProps = {
    country: 'Colombia'
}