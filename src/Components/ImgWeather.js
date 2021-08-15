import React, { useState, useEffect } from 'react'

export const ImgWeather = ({ imgicon }) => {

    const [image, setImage] = useState(imgicon);

    useEffect(() => {
        setImage(imgicon)
    }, [imgicon]);



    return (
        <>
            <img src={`https://www.weatherbit.io/static/img/icons/${image}.png`} />
        </>
    )
}



ImgWeather.defaultProps = {
    imgicon: 'c01d'
}
