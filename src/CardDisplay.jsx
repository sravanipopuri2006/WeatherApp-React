import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardDisplay.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function CardDisplay({weatherInfo}){
  
    const imgUrl="https://media.istockphoto.com/id/1299473217/photo/the-canopy-and-the-india-gate-at-sunset-in-new-delhi-view-from-the-national-war-memorial.webp?a=1&b=1&s=612x612&w=0&k=20&c=0glslaHgP8tpGMTjzGvu_Z0v73SS9WUhyCPPLG9z42Q=";
    const hotDay="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const coldDay="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rainyDay="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    function capitalizeLetter(str){
        return str[0].toUpperCase()+str.substring(1,str.length);

    }
    return(
       
        <div style={{marginTop:"2em"}}>
            
            <div className='cardData'>
                <Card sx={{ maxWidth: 345 }}>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={weatherInfo.Humidity>70?rainyDay :(weatherInfo.temp>15)?hotDay:coldDay}

                        />
                        <CardContent className='Content'>
                            <Typography gutterBottom variant="h5" component="div">
                                {capitalizeLetter(weatherInfo.city)} &nbsp;
                                {weatherInfo.Humidity>70?<ThunderstormIcon/>:(weatherInfo.temp>15)?<WbSunnyIcon/>:<AcUnitIcon/>}

                                
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>Temperature = {weatherInfo.temp}&deg;C</p>
                                <p>Humidity = {weatherInfo.Humidity}&deg;C</p>
                                <p>Temperature-Max = {weatherInfo.tempMax}&deg;C</p>
                                <p>Temperature-Min = {weatherInfo.tempMin}&deg;C</p>
                                <p>The weather can be described as <i>{weatherInfo.weather}</i> and feels like {weatherInfo.temp}&deg;C</p>

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )

}