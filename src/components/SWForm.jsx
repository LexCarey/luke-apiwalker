import React, { useState } from 'react'
import {useNavigate}  from 'react-router-dom';

const SWForm = (props) => {
    const [noun, setNoun] = useState("people")
    const [index, setIndex] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        navigate("/" + noun + "/" + index)
    }

    return (
        <div style={{margin: "25px"}}>
            <form onSubmit={handleSubmit}>
                <label style={{marginRight: "10px"}} >Search For: </label>
                <select style={{marginRight: "20px"}} onChange={e => setNoun(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label style={{marginRight: "10px"}} >ID: </label>
                <input style={{marginRight: "10px"}} type="number" onChange={e => setIndex(e.target.value)} />
                <button className='btn btn-primary' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SWForm