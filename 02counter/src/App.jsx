import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)


let [counter,setcounter] = useState(15)


  // let counter = 56;
  const addvalue= ()=>{if(counter >19) return;
    // counter = counter+1;
    setcounter(counter+1)// put that value in setcounter that what will be the new value in counter
  }
  const remvalue =()=>{
    if(counter ==0) return;
    setcounter(counter-1) 
    
  }
  return (
    <>
   <h2>chai aur react</h2>
   <h1>coutner value: {counter}</h1>
   <button onClick={addvalue}>Add value{counter}</button>
   <button onClick={remvalue}>Remove value{counter}</button>
    </>
  )
}

export default App
