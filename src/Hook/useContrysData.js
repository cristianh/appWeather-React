import React, {useState,useEffect} from 'react'
import { countrysWeatherStack } from '../Helpers/apiWeather'

export const useContrysData = (country) => {

   

    const [countrysWeather, setCountrysWeather] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        countrysWeatherStack(country).then((countrysWeatherInfo) => {

            console.log(typeof(countrysWeatherInfo))
            
            setTimeout(() => {
                setCountrysWeather({
                    data:countrysWeatherInfo,
                    loading:false
                })
            }, 3000);
            
        })

      
    }, [country])
    
    return countrysWeather;
}
