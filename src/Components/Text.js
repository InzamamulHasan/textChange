import React,{useState} from "react";

const Text=()=>{
    let [count,setCount]=useState(0);

    return(
        <div class="text">
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <button className="rest" onClick={()=>setCount(0)}>Reset</button>
        </div>
    ) 
}
export default Text;

