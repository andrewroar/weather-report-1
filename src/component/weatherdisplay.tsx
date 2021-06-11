import React, {useState, useEffect,FunctionComponent} from 'react'
import { useGlobalContext } from '../MyGlobalContext'
import axios, {AxiosResponse} from "axios"
import WeatherBox from "./weatherbox"

interface Props{

}



const WeatherDisplay:React.FunctionComponent<Props>= props => {
    const { target,setTarget} = useGlobalContext()

    interface weatherstructure{
        temp:string;
        cloud?:string;
        icon?:string;
    }

    const [weatherData,setWeatherData] = useState<weatherstructure>({"cloud":"","temp":"","icon":""})
    const [dataMounted,setDataMounted] = useState<boolean>(false)

    const  fetchData = async()=>{
        return axios.request<any>({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${target}&appid=73f1ba53d1d0aefb5577f5b2f9511294&units=metric`}).then(res=>{
                console.log(res.data)
                setWeatherData({"cloud":res.data.weather[0].main,"temp":res.data.main.temp,"icon":res.data.weather[0].icon})
                setDataMounted(true)
            }).catch(err=>{console.log(err)
                setDataMounted(false)})     
    }

    useEffect(() => {
        fetchData()
        
    }, [setTarget, target]);


   

    return (
        <div className="weather-display border">
            
            {dataMounted && <div className="weather-display-context">
            <h2>{target}</h2>
                <p>{weatherData.temp}</p>
                <p>{weatherData.cloud}</p>
                <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Weather icon"></img>
                </div>}
            
            
            
        </div>
    )

    

}


export default WeatherDisplay;