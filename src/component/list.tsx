import React, {useState} from 'react'
import { useGlobalContext } from '../MyGlobalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


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
            return
        }
        
        let detectRepeat = false
       countries.forEach(country=>{
            if (country == newCountry){
                return detectRepeat = true
            }     
        })

        console.log(detectRepeat) 
        if(!detectRepeat){
            setCountries([...countries,newCountry])
        }
        
   
    }

    const setAsTarget = (element:any)=>{
        console.log(element.target.textContent)
        setTarget(element.target.textContent)
       
        
    }

    const deleteTarget = (element:any)=>{
        console.log(element.target)
        console.log(element.target.parentElement.parentElement.textContent)
        const newList = countries.filter(item=>{return item !== element.target.parentElement.parentElement.textContent})
        setCountries(newList) 
    }
    
    return (
        <div className="border search-bar">
        <button onClick={handleClick}>Add Country</button>
        <input type="text" onChange={handleChange}></input>
        { countries.map(country=><div className="country-list"><p onClick={setAsTarget}>{country}<FontAwesomeIcon className="cross-icon"  onClick={deleteTarget} icon={faTimes} /></p></div>) }
        </div>
        
            
        
    )
}

export default List
