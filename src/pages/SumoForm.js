import React from 'react';
import { useEffect, useState } from 'react';



export default function SumoForm(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [weight, setweight] = useState('')
    const [heyas, setHeya] = useState([])
    const [sumos, setSumos] = useState([])
    const [selectedHeya, setSelectedHeya] = useState('')
    

    
    const getHeyas = () => {
        fetch('http://localhost:3000/heyas')
            .then(response => response.json())
            .then((result) => setHeya(result))
    }

    const getSumos = () => {
        fetch('http://localhost:3000/sumos')
            .then(response => response.json())
            .then((result) => setSumos(result))
    }

    useEffect(getHeyas, [])
    useEffect(getSumos, [])


    const renderSumo = () => sumos.map(sumo => {return (

            <div className="Sumo-Card">
                <h4>{sumo.name}</h4>
                <div className="Sumo-Info">
                    <div>{sumo.weight}</div>
                    <div>{sumo.age}</div>
                    <div>{sumo.heya.name}</div>
                </div>
            </div>
    )})


    return (
        <div>
            <div className="card-container">{renderSumo()}</div>
            {/* <form>
                <input>
                    Name
                </input>
            </form>    */}
        </div>
    )
}
