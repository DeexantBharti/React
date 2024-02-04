import { useState,useCallback,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8);
  const[numberAllowed,setnumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const [Password,setPassword] = useState("");

  const passwordref = useRef(null);


  const passwordGenerator = useCallback(() => {
    let  pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
      str+="0123456789"
    if(numberAllowed) str+="!@#$%^&&*()"
    for(let i = 1;i<=length;i++){
      let char =Math.floor( Math.random() *str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(Password)

  },[Password])
useEffect(()=>{
  passwordGenerator();
},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <h1 className='text-white text-4xl text-center my-3'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-800'>
     <div className="flex shadow rounded-lg  overflow-hidden mb-4">
      <input 
      type = "text"
      value = {Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordref}
      />
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input
        type='range'
        min = {6}
        max = {35}
        value = {length}
        className=' cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div classNaprevme="flex items-center gap-x-1">
        <input
        type='checkbox'
        defaultChecked = {numberAllowed}
        id = "numberInput"
        onChange={()=>{
          setnumberAllowed((prev)=>!prev)
        }}
        />
        <label htmlFor="numberInput">Numbers&Characters</label>
      </div>
     </div>
    </div>
    
    </>
  )
}

export default App
