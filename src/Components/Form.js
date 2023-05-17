import React,{useState} from "react";

const Form=()=>{
    let [name,setName]=useState("");
    let [up,setUp]=useState("")

    function sub(e){
        e.preventDefault();
        setUp(name.toUpperCase());
        console.log(up);
    }
    function reset(){
        setName("");
        setUp("");
    }
    return (
        <div>
            <form onSubmit={sub}>
                <input type="text" placeholder="Change to uppercase" onChange={(e)=>setName(e.target.value)}
                value={name}>
                </input>
                <button>To UpperCase</button>
            </form>
            <button className="rest" onClick={reset}>Reset</button>
            <p>{up||name}</p>
            
        </div>
    )
}
export default Form;