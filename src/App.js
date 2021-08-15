import React, { useState } from 'react'
import { BusquedaInput } from './Components/BusquedaInput'
import { CountryWeather } from './Components/CountryWeather'




export const App = () => {

    const [newconutry, setNewconutry] = useState('Colombia');

    return (
        <>
            <div  className="App">
                <BusquedaInput setSearchContry={setNewconutry} />
                <hr />
                <CountryWeather country={newconutry} />
            </div>

        </>
    )
}
