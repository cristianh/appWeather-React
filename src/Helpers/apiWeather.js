export const countrysWeatherStack = async (country) => {

    const api_key = '616b5b3bd2fa4aaeb24cbeb05c2d91ae';
    const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${api_key}&include=minutely&lang=es&city=${encodeURI(country)}`
    
    const result = await fetch(url);

   
        const {data,minutely} = await result.json();
        

        const respDataweather = data.map(cityweather =>{
            console.log(cityweather);
            return {
                name: cityweather.city_name,
                country: cityweather.timezone,
                region: cityweather.country_code,
                localtime: cityweather.ob_time,
                temperature: cityweather.temp,
                description:cityweather.weather.description,
                wind_speed: cityweather.wind_spd,
                humidity: cityweather.rh,
                minutely        
            }

            /* icon: "c02d" */
                /* weather_icons: current.weather_icons[0],
                humidity: current.humidity,
                wind_speed: cityweather.wind_spd */

        }) 
        console.log(typeof(respDataweather));
        
        return respDataweather;
 


}

