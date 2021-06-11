import React, {useState} from 'react'
import { useGlobalContext } from '../MyGlobalContext'


interface Props {
    
}

const List:React.FC<Props>= props => {
    const { countries, setCountries, setTarget } = useGlobalContext()
    const [newCountry, setNewCountry] = useState<string>("")
    const handleChange = (element:any)=>{
        element.preventDefault()
        setNewCountry(element.target.value)
    }

    const handleClick = ()=>{
        if(newCountry.replace(/ /g,'') === ""){
            alert("Input is empty")
            return
        }
        setCountries([...countries,newCountry])   
    }

    const setAsTarget = (element:any)=>{
        console.log(element.target.textContent)
        setTarget(element.target.textContent)
       
        
    }
    
    return (
        <div className="border search-bar">
        <button onClick={handleClick}>Add Country</button>
        <input type="text" onChange={handleChange}></input>
        { countries.map(country=><p onClick={setAsTarget}>{country}</p>) }
        </div>
        
            
        
    )
}

export default List
