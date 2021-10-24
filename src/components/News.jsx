import React, { useState, useEffect } from 'react'

export const News = () => {
    const [city, setcity] = useState([]);
    const [search, setsearch] = useState();
    // useEffect(() => {
    const apikey = `34fb4577b1049c50da6546c1f8fff9be`;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}`;
    // const api = `api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}`;
    const apif = async () => {
        const f = await fetch(api);
        const f1 = await f.json();
        console.log(f1.main)
        // console.log(api)
        setcity(f1.main);
        // return(
        // city.map(
        //     ()=>{
        //         return(
        //         <p>{city.weather.id}</p>
        //         )
        //     }
        // )
        // )
    }

    // apif();
    // })
    return (
        <>
            <div className="container">

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter the City" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => {
                        setsearch(e.target.value)
                    }} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={apif}>Search</button>
                </div>
            </div>
            {/* {console.log(city)} */}
            {
                <div className="container">
                    <h1>{search}</h1>
                    <p>Min Temp: {city.temp_min}℉</p>
                    <p>Max Temp: {city.temp_max}℉</p>
                </div>
            }


        </>
    )
}

