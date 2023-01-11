
    import './Weather.css';
    import {useState} from "react";
import { logDOM } from '@testing-library/react';


    

const Weather = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');


    const url = "https://api.openweathermap.org/data/2.5/weather?q=$(location)&appid={d1d170c6d6233b69ea4fff9aa239ef8e}";
    
    



    const searchLocations = (e) => {
            
        if (e.key === 'Enter'){
            fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=895284fb2d2c50a520ea537456963d9c`)
                        .then ((response) => response.json())
                        .then ((data) => setData(data))
                        console.log(data)
                        console.log("shesrulda")
                        setLocation('')
        }

        console.log("veraaaa");
        


                 
    }

    // const temp = (data.main.temp -32) /18;

    
    



    return  (
        <div className='weather'>
            <div className="search">
                <input
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyDown = {searchLocations}
                    placeholder={"Enter Location"}
                    type={'text'}
                />
            </div>
            
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p className={'bold'}>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.name ? <h1>{((data.main.temp -32) /18).toFixed(2)} C</h1> : null}
                    </div>
                    <div className="description">
                        {data.clouds ? <p className={'bold'}>{data.clouds.all} % {data.weather[0].main}</p> :null}
                    </div>
                    {data.name ? null : <h1 className='first-h1'>Please Insert Your City</h1>}
                </div>
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className={'bold'}>{((data.main.feels_like -32) /18).toFixed(2)} C</p> : <p className={'bold'}>0</p>}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className={'bold'}>{data.main.humidity} %</p> : <p className={'bold'}>0</p>}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                    {data.wind ? <p className={'bold'}>{data.wind.speed} ms</p> : <p className={'bold'}>0</p>}
                        <p>Speed</p>
                        
                    </div>
                </div>
            </div>
        </div>



    )
};

export default Weather;