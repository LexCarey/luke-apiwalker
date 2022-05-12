import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"



const SWDisplay = () => {
    const [starWarsInfo, setStarWarsInfo] = useState()
    const [homeWorld, setHomeWorld] = useState()
    const options = [{
            people: ["height", "mass", "hair_color", "skin_color"],
            planets: ["diameter", "climate", "terrain", "population"],
            starships: ["model", "manufacturer", "crew", "passengers"]
        }]
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

    const getHomeWorld = (link) => {
        if (noun=="people") {
            axios.get(link)
        .then(response => setHomeWorld(response.data))
        .catch(err => {
            console.log(err)
            navigate("/error")
        })
        console.log(homeWorld)
        if (homeWorld) {
            return "Home World: " + homeWorld.name
        } else {
            return "Loading..."
        }
        }
    }

    const properString = (string) => {
        return string.charAt(0).toUpperCase() + string.replace(/_/g, ' ').slice(1)
    }

    return (
        <div>
            {
                starWarsInfo?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        {
                            options[0][noun].map((temp, i) => {
                                return <h3 key={i}>{properString(temp)}: {starWarsInfo[temp]}</h3>
                            })
                        }
                        {<h3>{getHomeWorld(starWarsInfo.homeworld)}</h3>}
                    </div>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    )
}

export default SWDisplay


//         {getHomeWorld(starWarsInfo.homeworld)}
//         {
//             homeWorld?
//             <h3>Home World: {homeWorld.name}</h3>
//             :
//             <h3>Home World Loading</h3>
//         }
