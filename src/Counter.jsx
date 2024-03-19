import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);

    const handleCount =()=>{
        const newCount=count + 1;
        setCount(newCount);

    }

    const handleSubCount =()=>{
        const currentCount=count - 1;
        setCount(currentCount);
    }
    
    return(
        <div style={{border:'2px solid darkblue'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleCount}>Add Count</button>
            <button onClick={handleSubCount}>Sub Count</button>
        </div>
    )
}