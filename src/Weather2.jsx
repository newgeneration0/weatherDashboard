import React from 'react'
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { CiCloud } from "react-icons/ci";
import { BsCloudSunFill } from "react-icons/bs";
import { useState } from 'react';
import WavesIcon from '@mui/icons-material/Waves';
import AirIcon from '@mui/icons-material/Air';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LightModeIcon from '@mui/icons-material/LightMode';
import StormIcon from '@mui/icons-material/Storm';
import NavigationIcon from '@mui/icons-material/Navigation';
import NearMeIcon from '@mui/icons-material/NearMe';
import CloudIcon from '@mui/icons-material/Cloud';
import ModeNightIcon from '@mui/icons-material/ModeNight';

function Weather2 (){
    const[city, setCity]=useState('')
    const[weather, setWeather]=useState([])
    const[time, setTime]=useState([])
    const[rise, setRise]=useState([])
    const[hourly, setHourly]=useState([])

    const handleInput=(e)=>{
        setCity(e.target.value)
    }
    const handleSearch=()=>{
        const weatherApiKey='199f5c0640ad0ef9a53f85eed2bf4171'
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
        const timeApikey='65066f4e2d9448a0a500f2446ed9c8ed'
        const Url=`https://api.ipgeolocation.io/timezone?apiKey=${timeApikey}&location=${city}`
        const riseUrl =`https://api.ipgeolocation.io/astronomy?apiKey=${timeApikey}&location=${city}`
        const hourlyUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&limit=${5}&appid=${weatherApiKey}&units=metric`

        
        if(city){
            fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setWeather(data)
                console.log(data)
            })

            fetch(Url)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setTime(data)
            })

            fetch(riseUrl)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setRise(data)
                console.log(data)
            })

            fetch(hourlyUrl)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setHourly(data)
                console.log(data)
            })
        }
    }
    return(
    <>
        <div className=" bg-gradient-to-r from-zinc-900 to-white bg-cover bg-no-repeat h-screen">
            <div className='ms-36 text-center'>
                {/* <div className='bg-black w-12 h-10 flex items-center rounded-2xl mt-5'>
                    <p className='text-white text-left mx-2'>ON</p>
                </div> */}
                <div className=''>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setCity('')
                    }}>
                    {/* <span className='ms-28 text-xl text-white'>Enter City</span> */}
                    <input type='text' value={city} onChange={handleInput} placeholder='Search for your prefferred city' className=' bg-zinc-800 outline-none text-white text-lg w-96 ms-2 rounded-xl h-10 px-4 me-5 mt-7'/>
                    <button onClick={handleSearch} className='text-black text-lg bg-white hover:bg-black hover:text-white hover:text-xl hover:border-white rounded-md border border-black px-4 py-1'>search</button>
                </form>
                </div>
                {/* <div className='bg-green-600 w-60 h-10 flex items-center ms-36  rounded-2xl mt-5'>
                    <p className='text-white text-left ms-2'>Current Location</p>
                </div> */}
            </div>
            <div>
                <div className='flex ms-56 mt-10'>
                    <div className='w-4/12 h-64 bg-zinc-800 rounded-2xl shadow-lg shadow-black text-center'>
                        <p className='mt-9 text-5xl text-white font-bold'>{weather && weather.name} {weather.sys && weather.sys.country}</p>
                        <p className='text-7xl mt-9 text-white font-bold'>{time && time.time_24}</p>
                        <p className='text-white text-md'>{time && time.date_time_txt}</p>
                    </div>
                    <div className='w-6/12 h-64 bg-zinc-800 rounded-2xl ms-10 shadow-lg  shadow-black flex'>
                        <div className='ms-5 mt-6'>
                            <p className='text-5xl text-white font-bold '>{weather.main && weather.main.temp}&deg;C</p>
                            <p className='text-xl text-white mb-3'>Feels like: <span className='font-bold'>{weather.main && weather.main.feels_like}&deg;C</span></p>
                            <div className='flex items-center justify-center mt-7 ms-2'>
                                <LuSunrise className='text-5xl font-normal text-white inline-block me-2 clear-both'/>
                                <p className='text-white text-lg font-bold inline-block'>Sunrise <span className='block text-sm font-normal'>{rise && rise.sunrise} AM</span></p>
                            </div>
                            <div className='flex items-center justify-center mt-3 ms-2'>
                                <LuSunset className='text-5xl font-normal text-white inline-block me-2'/>
                                <p className='text-white text-lg font-bold inline-block'>Sunset <span className='block text-sm font-normal'>{rise && rise.sunset} PM</span></p>
                            </div>
                        </div>
                        <div className='ms-11 mt-8 text-center'>
                            <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'9rem'}}/>
                            <p className='text-2xl font-bold text-white mt-5'>{weather.weather && weather.weather[0].main}</p>
                        </div>
                        <div className='ms-11 mt-7'>
                            <div className='text-center'>
                            <WavesIcon sx={{ color:'white', fontSize:'3rem'}}/>
                            <p className='text-white text-lg'>{weather.main && weather.main.humidity}%</p>
                            <p className='text-white'>Humidity</p>
                            </div>
                            <div className='text-center mt-3'>
                            <AvTimerIcon sx={{ color:'white', fontSize:'3rem'}}/>
                            <p className='text-white text-lg'>{weather.main && weather.main.pressure} hPa</p>
                            <p className='text-white'>Pressure</p>
                            </div>
                        </div>
                        <div className='ms-8 mt-7'>
                            <div className='text-center'>
                            <AirIcon sx={{ color:'white', fontSize:'3rem'}}/>
                            <p className='text-white text-lg'>{weather.wind && weather.wind.speed} km/h</p>
                            <p className='text-white'>Wind Speed</p>
                            </div>
                            <div className='mt-3 text-center'>
                            <StormIcon sx={{ color:'white', fontSize:'3rem'}}/>
                            <p className='text-white text-lg'>{weather && weather.visibility/1000} km</p>
                            <p className='text-white'>Visibility</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div>
                <div className='flex ms-56 mt-12'>
                    <div className='w-3/12 h-64 bg-zinc-800 rounded-2xl shadow-lg  shadow-black'>
                    <h1 className='text-center text-white text-2xl font-bold mt-2 mb-2'>5 Days Forecast:</h1>
                    <div className='flex items-center justify-around text-center mb-2'>
                    <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[10].main.temp}&deg;C</p>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[10].dt_txt}</p>
                    </div>
                    <div className='flex items-center justify-around text-center mb-2'>
                    <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[18].main.temp}&deg;C</p>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[18].dt_txt}</p>
                    </div>
                    <div className='flex items-center justify-around text-center mb-2'>
                        <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[26].main.temp}&deg;C</p>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[26].dt_txt}</p>
                    </div>
                    <div className='flex items-center justify-around text-center mb-2'>
                    <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[34].main.temp}&deg;C</p>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[34].dt_txt}</p>
                    </div>
                    <div className='flex items-center justify-around text-center mb-2'>
                        <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[39].main.temp}&deg;C</p>
                        <p className='text-white text-lg'>{hourly.list && hourly.list[39].dt_txt}</p>
                    </div>

                    </div>
                    <div className='w-7/12 h-64 bg-zinc-800 rounded-2xl ms-10 shadow-lg  shadow-black'>
                        <h2 className='text-center text-white text-2xl font-bold mt-2'>Hourly Forecast:</h2>
                        <div className='flex items-center justify-evenly mx-13 mt-3'>
                            <div className='bg-zinc-700 w-28 h-48 rounded-2xl text-center py-1'>
                                <p className='text-white text-lg font-bold mb-2'>{hourly.list && hourly.list[2].dt_txt}</p>
                                <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                                <p className='text-white text-lg font-bold mt-2 mb-2'>{hourly.list && hourly.list[2].main.temp}&deg;C</p>
                                {/* <NavigationIcon sx={{ color:'#2196f3', fontSize:'2rem'}}/> */}
                                <p className='text-white text-lg font-bold mt-2'>{hourly.list && hourly.list[2].wind.speed}km/h</p>
                            </div>
                            <div className='bg-zinc-700 w-28 h-48 rounded-2xl text-center py-1'>
                                <p className='text-white text-lg font-bold mb-2'>{hourly.list && hourly.list[3].dt_txt}</p>
                                <LightModeIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                                <p className='text-white text-lg font-bold mb-2 mt-2'>{hourly.list && hourly.list[3].main.temp}&deg;C</p>
                                {/* <NearMeIcon sx={{ color:'#2196f3', fontSize:'2rem'}}/> */}
                                <p className='text-white text-lg font-bold mt-2'>{hourly.list && hourly.list[3].wind.speed}km/h</p>
                            </div>
                            <div className='bg-zinc-700 w-28 h-48 rounded-2xl text-center py-1'>
                                <p className='text-white text-lg font-bold mb-2'>{hourly.list && hourly.list[4].dt_txt}</p>
                                <ModeNightIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                                <p className='text-white text-lg font-bold mb-2 mt-2'>{hourly.list && hourly.list[4].main.temp}&deg;C</p>
                                {/* <NavigationIcon sx={{ color:'#2196f3', fontSize:'2rem'}}/> */}
                                <p className='text-white text-lg font-bold mt-2'>{hourly.list && hourly.list[4].wind.speed}km/h</p>
                            </div>
                            <div className='bg-zinc-700 w-28 h-48 rounded-2xl text-center py-1'>
                                <p className='text-white text-lg font-bold mb-2'>{hourly.list && hourly.list[5].dt_txt}</p>
                                <ModeNightIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                                <p className='text-white text-lg font-bold mb-2 mt-2'>{hourly.list && hourly.list[5].main.temp}&deg;C</p>
                                {/* <NearMeIcon sx={{ color:'#2196f3', fontSize:'2rem'}}/> */}
                                <p className='text-white text-lg font-bold mt-2'>{hourly.list && hourly.list[5].wind.speed}km/h</p>
                            </div>
                            <div className='bg-zinc-700 w-28 h-48 rounded-2xl text-center py-1'>
                                <p className='text-white text-lg font-bold mb-2'>{hourly.list && hourly.list[6].dt_txt}</p>
                                <ModeNightIcon sx={{ color:'#ffeb3b', fontSize:'2rem'}}/>
                                <p className='text-white text-lg font-bold mt-2 mb-2'>{hourly.list && hourly.list[6].main.temp}&deg;C</p>
                                {/* <NavigationIcon sx={{ color:'#2196f3', fontSize:'2rem'}}/> */}
                                <p className='text-white text-lg font-bold mt-2'>{hourly.list && hourly.list[6].wind.speed}km/h</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-end me-10'><p className='text-black mt-8 font-bold text-xl'>...by Great<span className='text-orange-500'>IBB</span></p></div>
        </div>
    </>
    )
}
export default Weather2;