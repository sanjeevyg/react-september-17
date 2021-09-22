import React from 'react';
import { useEffect, useState } from 'react';



export default function SumoForm(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
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
                    <div>Weight: {sumo.weight}</div>
                    <div>Age: {sumo.age}</div>
                    <div>Heya: {sumo.heya.name}</div>
                </div>
            </div>
    )})

    const renderHeyaOption = () => heyas.map(heya => {return (
        <option key={heya.id} value={heya.id}>
            {heya.name}
        </option>
    )
    })

    const handleClick = (event) => {
        event.preventDefault()
        const bodyInfo = {
            name, age, weight, heya_id: selectedHeya
        }

        const option = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(bodyInfo)
        }

        fetch("http://localhost:3000/sumos", option)
            .then(response => response.json())
            .then(addSumo)
    }

    const addSumo = (newSumo) => {
        const newSumoList = [...sumos, newSumo]
        setSumos(newSumoList)
    }




    return (
        <div>
            <div className="card-container">{renderSumo()}</div>

            <form className="sumo-form" onSubmit={handleClick}>
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    value={name}
                    placeholder="name"
                    onChange={(event) => setName(event.target.value)}
                />

             <label htmlFor="weight">Weight:</label>
                <input 
                    id="weight" 
                    type="number" 
                    value={weight} 
                    min="0" 
                    placeholder="weight"
                    onChange={(event) => setWeight(event.target.value)}
                />

                <label htmlFor="age">Age:</label>
                <input 
                    id="age" 
                    type="number" 
                    value={age} 
                    min="18" 
                    placeholder="age"
                    onChange={(event) => setAge(event.target.value)}
                />
                <select id="sumo-heya" value={selectedHeya} onChange={(event)=> setSelectedHeya(event.target.value)} >
                        <option value="">Select the heya!</option>
                        {renderHeyaOption()}
                </select>
                <input type="submit" value="Submit" />
            </form>   
        </div>
    )
}
