import React,{useState} from "react";

const Form1=({updateText,addData,children,})=>{

    let [datas,setData]=useState("");

    function updatedata(e){
        e.preventDefault();
        console.log(datas)
        let ans="";
        let add=0;
        for(let i=0;i<datas.length;i++){
            ans+=datas[i]+"-"+datas.charCodeAt(i);
            add+=parseInt(datas.charCodeAt(i));
            if(i!==datas.length-1){
                ans+=",";
            }
        }
        console.log(add);
         addData(`Sum Of ASCII Value : ${add}`);
        updateText(ans);

    }
    function rest(){
        updateText("")
        setData("");
    }
    return (
        <div>
            <form onSubmit={updatedata}>
                <input type="text" placeholder="Find  ASCII value" onChange={(e)=>setData(e.target.value)}
                value={datas}></input>
                <button>Get ASCII values of Characters</button>
            </form>
            <button className="rest" onClick={rest}>Reset</button>
            {children}
        </div>
    )
}
export default Form1;