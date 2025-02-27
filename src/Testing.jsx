import React from "react"
import { useState } from "react";

function Testing (){
    const[city, setCity]= useState('')
    const[weather, setWeather] = useState({})
    const[hourly, setHourly] = useState({})
    const handleInput=(e)=>{
        setCity(e.target.value)
    }

    const handleBtn=()=>{
        const apiKey= 'eb4d52a2e4faa18e26d23a726e4f9418'
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        // const hourlyUrl=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${apiKey}`
        const hourlyUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

        if(city){
            fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setWeather(data)
            })

        }

        if(city){
            fetch(hourlyUrl)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setHourly(data)
            })
            
        }
    }
    return(
        <>
        <div className="mt-5 ml-5">
            <form onSubmit={(e)=>{
                e.preventDefault()
                setCity('')
            }}>
                <input type="text" placeholder="enter city" value={city} onChange={handleInput}/>
                <button onClick={handleBtn}> Search </button>
            </form>
        </div>    

        
                        <h1 className='text-6xl ms-1 xl:ms-44 lg:ms-24 md:ms-32 sm:ms-28 text-black underline font-bold'>{weather && weather.name}, {weather.sys && weather.sys.country}</h1>

                        {/* <p className='text-9xl text-black text-center ms-0 xl:ms-44 lg:ms-36 md:ms-20 sm:ms-4'>{weather.main && weather.main.temp}</p> */}

                        <p className='text-9xl text-black text-center ms-0 xl:ms-44 lg:ms-36 md:ms-20 sm:ms-4'>{hourly.list && hourly.list[2].dt_txt}</p>
                    
        </>
        
    )
}

export default Testing;