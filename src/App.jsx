import { useEffect, useState } from 'react'
import Player from './Player'

function App() {
 
  const [dark,setDark]=useState(false)

  useEffect(()=>{

    if(dark){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")

    }
  },[dark])

  const toggle=()=>{
    setDark(!dark)
  }
  
  return (
    <>
      <div className='min-h-screen dark:bg-gray-800
      py-9 dark:text-white'>
        <button onClick={toggle}
        className='fixed top-2 right-1 w-9 h-9 text-neutral-950 
        transition-colors  pr-7 pt-2 dark:text-white '>

        <i className={`${dark ?"fa-solid fa-sun":"fa-solid fa-moon"} fa-xl `}></i>
        </button>

           <Player/>
            
      </div>
    </>
  )
}

export default App
