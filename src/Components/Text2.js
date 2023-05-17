import React,{useState} from "react";
const Text2=()=>{
    let [count,setCount]=useState({gold:0,silver:0,bronze:0})
    let {gold, silver, bronze}=count
    function increaseGold(){
        setCount({gold:gold+1,silver:silver,bronze:bronze})
    }
    function increaseSilver(){
        setCount({gold:gold,silver:silver+1,bronze:bronze})
    }
    function increaseBronze(){
        setCount({gold:gold,silver:silver,bronze:bronze+1})
    }
    function resetAll(){
        setCount({gold:0,silver:0,bronze:0})
    }

    return(
        <div className="text2">
            <div>
            <h1  style={{color:"gold"}}>Gold : {gold}</h1>
            <h1  style={{color:"silver"}}>Silver : {silver}</h1>
            <h1  style={{color:" rgb(173, 163, 65)"}}>Bronze : {bronze}</h1>
            </div>
            <div>
                <button style={{backgroundColor:"gold"}} onClick={increaseGold}>Gold</button>
                <button style={{backgroundColor:"silver",color:"black"}} onClick={increaseSilver}>Silver</button>
                <button style={{backgroundColor:" rgb(173, 163, 65"}} onClick={increaseBronze}>Bronze</button>
            </div>
            <div>
            <button className="rest" onClick={resetAll}>Reset All</button>
            </div>
            
            
        </div>
    )
}
export default Text2;