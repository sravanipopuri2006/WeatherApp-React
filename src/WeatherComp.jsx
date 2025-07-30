import SearchBox from "./TextFieldComp";
import CardDisplay from "./CardDisplay";
import { useState } from "react";
export default function Weather(){
    const[weatherInfo,changeInfo]=useState({
        city:"Delhi",
        Humidity: 28,
        feelsLike: 27.04,
        temp: 28.05,
        tempMax: 28.05,
        tempMin: 28.05,
        weather: "clear sky"

    })
    
    function updateCard(newResult){
        changeInfo(newResult);
    }
    return(
        <>
        <SearchBox updateCard={updateCard}/>
        <CardDisplay weatherInfo={weatherInfo}/>
        </>
    )

}