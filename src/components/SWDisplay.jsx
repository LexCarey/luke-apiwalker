import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"



const SWDisplay = () => {
    const [starWarsInfo, setStarWarsInfo] = useState()
    const [error, setError] = useState(false)
    const {noun, index} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${noun}/${index}`)
        .then(response => setStarWarsInfo(response.data))
        .catch(err => {
            console.log(err)
            navigate("/error")
        })
    }, [])

    return (
        <div>
            {
                starWarsInfo?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        {
                            noun=="people"&&
                            <div>
                                <h3>Height: {starWarsInfo.height} cm</h3>
                                <h3>Mass: {starWarsInfo.mass} kg</h3>
                                <h3>Hair Color: {starWarsInfo.hair_color}</h3>
                                <h3>Skin Color: {starWarsInfo.skin_color}</h3>
                            </div>
                        }
                        {
                            noun=="planets"&&
                            <div>
                                <h3>Diameter: {starWarsInfo.diameter}</h3>
                                <h3>Climate: {starWarsInfo.climate}</h3>
                                <h3>Terrain: {starWarsInfo.terrain}</h3>
                                <h3>Population: {starWarsInfo.population}</h3>
                            </div>
                        }
                        {
                            noun=="starships"&&
                            <div>
                                <h3>Model: {starWarsInfo.model}</h3>
                                <h3>Manufacturer: {starWarsInfo.manufacturer}</h3>
                                <h3>Crew Count: {starWarsInfo.crew}</h3>
                                <h3>Passenger Count: {starWarsInfo.passengers}</h3>
                            </div>
                        }
                        
                    </div>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    )
}

export default SWDisplay