import React from 'react'
import reactDOM from 'react-dom';

 const Count = () => {

    const [ Count , setCount ]= React.setState();


    return (
        <div>
            <p><strong>This is Counter App.</strong></p>
            {/* <h1>{count}</h1>
            <button onClick={()=>setCount(Count + 1)}>increment</button>
            <button onClick={()=>setCount(Count - 1)}>decrement</button>  */}
            <button onClick={()=>setCount(Count + 1)} >INCREMENT</button>
            <h1>{Count}</h1>
            <button onClick={()=>setCount(Count - 1)}>DECREMENT</button>                                          
            

        </div>

    )
}
export default Count;
