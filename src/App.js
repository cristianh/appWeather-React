import React, {useState} from 'react'
import { BusquedaInput } from './Components/BusquedaInput'
import { CountryWeather } from './Components/CountryWeather'




export const App = () => {

    const [newconutry, setNewconutry] = useState('Colombia');

    return (
        <>
            <BusquedaInput setSearchContry={setNewconutry} />
            <hr />
            <CountryWeather country={newconutry} />
            

        </>
    )
}
