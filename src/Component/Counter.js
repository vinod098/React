import './App.css';
import { useState , useEffect } from 'react';

const Counter = () =>{
    const [counter , setCounter] = useState(0);

    // useEffect(()=>{   
    //     setCounter(100);   //value only set in strt becz dependency array is empty
    // } , []);       

    useEffect(()=>{   
        alert("you have changed the counter to "+ counter) // if we want ant reason that  useEffect run on ever counter chane then counter will be in dependency array  
    } , [counter]); // means we can call some code if something happens in UI

    return (
        <div className='App'>
            <div>
                <button onClick={()=>setCounter((prevcount)=>prevcount-1)}>-</button>
                <h1>{counter}</h1>
                <button onClick={()=>setCounter((prevcount)=>prevcount+1)}>+</button>
            </div>
        </div>
    )
}

export default Counter;