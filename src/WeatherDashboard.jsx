import React, { useState } from 'react'

function WeatherDashboard (){

    const[city, setCity] = useState('')
    const[weather, setWeather] = useState({})
    
    const handleInput = (e)=>{
        setCity(e.target.value) 
    }

    const handleSearchBtn =()=>{
        const apiKey= 'eb4d52a2e4faa18e26d23a726e4f9418'
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
    }

    return (
        <>
            <div className='bg-black bg-cover bg-repeat w-screen h-screen flex items-center justify-center'>
                <div className='bg-wea bg-no-repeat bg-cover w-3/5 h-screen ms-12'>
                    <div className='mt-3 flex items-center justify-center'>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            setCity('')
                        }}>
                            <input type='text' value={city} placeholder='Search city' className='bg-transparent w-12 sm:w-24 md:w-56 lg:w-80 h-10 rounded-lg  border-solid border-2 border-white-600 ps-3 pe-8 py-5 outline-none text-2xl text-white' onChange={handleInput}/>
                            <button className='text-xl text-white font-bold ms-3' onClick={handleSearchBtn}>Search</button>
                        </form>
                    </div>
                    
                    <div className='mt-12'>
                        <h1 className='text-6xl ms-1 xl:ms-44 lg:ms-24 md:ms-32 sm:ms-28 text-white underline font-bold'>{weather && weather.name}, {weather.sys && weather.sys.country}</h1>
                    </div>

                    <div className='mt-10'>
                        <div>

                            <p className='text-9xl text-white text-center ms-0 xl:ms-44 lg:ms-36 md:ms-20 sm:ms-4'>{weather.main && weather.main.temp}</p>
                        </div>
                        <p className='text-3xl text-white text-left ms-2 xl:ms-44 lg:ms-24 md:ms32 sm:ms-28 mt-8 '>{weather.weather && weather.weather[0].main}</p>
                    </div>

                    <div className='mt-8'>
                        <div className='bg-black bg-opacity-35 w-3/5 xl:w-3/5 lg:w-72 md:w-72 sm:w-3/5 xl:h-14 lg:h-14 md:h-14 rounded-xl mt-5  text-white xl:flex lg:flex md:flex sm:block justify-evenly items-center ms-12 xl:ms-44 lg:ms-36 md:ms-36 sm:ms-20 p-2 sm:p-4'>
                            <p className='font-bold text-center'>Max Temp: <span className='font-normal text-xl'>{weather.main && weather.main.temp_max}</span></p>
                            <p className='font-bold text-center'>Min Temp: <span className='font-normal text-xl'>{weather.main && weather.main.temp_min}</span></p>
                            <p className='font-bold text-center'>Feels Like: <span className='font-normal text-xl'>{weather.main && weather.main.feels_like}</span></p>
                        </div> 
                        <div className='bg-black bg-opacity-35 w-3/5 xl:w-3/5 lg:w-72 md:w-72 sm:w-3/5 h-22 ms-12 xl:ms-44 lg:ms-36 md:ms-36 sm:ms-20 rounded-xl mt-7 text-white xl:flex lg:flex md:flex sm:block justify-evenly items-center py-2'>
                            <div>
                                <p className='text-center text-xl'>{weather && weather.visibility/1000} km</p>
                                <p className='text-center font-bold'>Visibility</p>
                            </div>
                            <div>
                                <p className='text-center text-xl'>{weather.main && weather.main.humidity}</p>
                                <p className='text-center font-bold'>Humidity</p>
                            </div>
                            <div>
                                <p className='text-center text-xl'>{weather.wind && weather.wind.speed} mph</p>
                                <p className='text-center font-bold'>Wind Speed</p>
                            </div>
                        </div> 
                        <div className='bg-black bg-opacity-35 w-3/5 xl:w-3/5 lg:w-72 md:w-72 sm:w-3/5 xl:h-16 lg:h-16 md:h-16 sm:h-24 rounded-xl ms-12 xl:ms-44 lg:ms-36 md:ms-36 sm:ms-20 mt-7 text-white xl:flex lg:flex md:flex sm:block justify-evenly items-center py-2'>
                            <p className='font-bold'>Lon: <span className='font-normal text-xl'>{weather.coord && weather.coord.lon}</span></p>
                            <p className='font-bold'>Lat: <span className='font-normal text-xl'>{weather.coord && weather.coord.lat}</span></p>
                            <p className='font-bold'>temp: <span className='font-normal text-xl'>35.6</span></p>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeatherDashboard;