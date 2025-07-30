import TextField from '@mui/material/TextField';
import './TextFieldComp.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({ updateCard }) {
    const [city, setcity] = useState("");
    const [error, seterror] = useState(false);
    function handleChange(event) {
        setcity(event.target.value);

    }
    async function handleSubmit(event) {
        try{
            event.preventDefault();
            console.log(city);
            let setinfo = await fetchData();
            setcity("");
            updateCard(setinfo);
            seterror(false);

        }
        catch(err){
            seterror(true);
        }
        



    }
    const url = "http://api.openweathermap.org/data/2.5/weather";
    
    const Api_Key = "2f2a47cba89b1932cc6cd02430d5da39";
    let fetchData = async () => {
        try {
            let response = await fetch(`${url}?q=${city}&appid=${Api_Key}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                Humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description

            }
            console.log(result);
            return result;




        }
        catch(err){
            throw err;
        }

        
    }
    return (
        <div className="search" >
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange} required />
                <br />
                {error && <p style={{color:"red"}}>No place exists! Please enter the valid city.</p>}
                <br /> 
                <Button variant="contained" type='Submit'>Search</Button>

            </form>

        </div>
    )
}