import React from 'react'
import { ImgWeather } from './ImgWeather'


export const InfoWeatherCountry = (data) => {



    const { data: countrysWeather } = data

    return (
        <>

            {
                countrysWeather.map((info) => {
                    return <div key={info.name} className="container">
                        <div className="Informacion">
                            <h2>{info.name} - {info.country}</h2>
                            <h3>{info.region} - {new Date(info.localtime).toLocaleString()}</h3>

                        </div>

                        <div className="Imagen-clima">
                            {info.description}<br />
                            
                            <ImgWeather key={info.icon} imgicon={info.icon} />
                        </div>

                        <div className="container-info">
                            <div className="container-info-row img-humedad animate__animated animate__bounceIn"><h1>Humedad<br />{info.humidity}%</h1></div>
                            <div className="container-info-row img-temperatura animate__animated animate__bounceIn"><h1>Temperatura<br />{info.temperature}°C</h1></div>
                            <div className="container-info-row img-Velocidad animate__animated animate__bounceIn"><h1>Velocidad del viento<br />{info.wind_speed} m/s</h1></div>
                        </div>
                        <h2>Proyeccion del clima en horas:</h2>
                        <br />
                        <div className="container-time-hours">

                            {info.minutely.map(days => {
                                return <div className="container-hours-row">{new Date(days.timestamp_utc).toLocaleString()}<br /><b>{days.temp}</b>°C </div>

                            })}

                        </div>
                    </div>
                })
            }
        </>
    )
}
