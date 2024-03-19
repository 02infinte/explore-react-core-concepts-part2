import { useState } from "react"

export default function Team(){
    const[player,setTeam]=useState(11);

    const handleAdd=()=>{
       const totalNewPlayer=player+1;
        setTeam(totalNewPlayer);
    }

    const handleRemove=()=>{
        const totalNewPlayer=player-1;
        setTeam(totalNewPlayer);
    }
    const teamStyle={
        border:'2px solid red',
        borderRadius:'15px',
        margin:'15px',
        padding:'15px'
    }
    return(
        <div style={teamStyle}>
        <h3>Players:{player}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>

        </div>
        

    )
}