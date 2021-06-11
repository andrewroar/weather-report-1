import './App.css';
import React, { useState } from 'react'
import { MyGlobalContext } from './MyGlobalContext'
import List from './component/list';
import WeatherDisplay from './component/weatherdisplay';
import axios, {AxiosResponse} from "axios"


function App() {
  const [countries, setCountries] = useState<string[]>(['London',"York"])
  const [target, setTarget] = useState<string|undefined>(countries[0])

  
  return (
    <div className="App">
      <body>
      <MyGlobalContext.Provider value= {{ countries, setCountries, target, setTarget }}>
        <div className="weather-box">
          <List></List>
          <WeatherDisplay></WeatherDisplay>
        </div>
      </MyGlobalContext.Provider>
      </body>
  
    </div>
  );
}

export default App;
