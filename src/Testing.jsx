import React from 'react'
import { useState } from 'react'

function Testing(){

    const [city, setCity] = useState()
    const [weather, setWeather] = useState()

    const handleF = (e)=>{
        e.preventDefault()
        setCity('')
    }

    const handleButton =()=>{
        const weatherApiKey='199f5c0640ad0ef9a53f85eed2bf4171'
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`

        if(city){
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                setWeather(data)
            })
        }
    }
    return (
        <div>
            <form onSubmit={handleF}>
                <input type='text' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                <button onClick={handleButton}>search</button>
            </form>

            <p>{weather && weather.name}</p>
        </div>
    )
}

export default Testing