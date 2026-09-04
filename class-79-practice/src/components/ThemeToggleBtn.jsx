import { useRef } from "react";

export default function ThemeToggleBtn() {
   let rootHtml = useRef(document.documentElement)

  function handleThemeChange(){
    rootHtml.current.classList.toggle('dark');

    if(rootHtml.current.classList.contains('dark')){
      localStorage.setItem('theme', 'dark');
    }
    else{
      localStorage.setItem('theme', 'light')
    }
  }

  function handlePrefBySystem(){
    localStorage.clear();
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      rootHtml.current.classList.add('dark');
    }
    else{
      rootHtml.current.classList.remove('dark');
    }
  }

  window.addEventListener('load', ()=>{
    let savedPref = localStorage.getItem('theme');

    if(savedPref === 'dark' || (!savedPref && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      rootHtml.current.classList.add('dark')
    }
    else{
      rootHtml.current.classList.remove('dark')
    }
  })

  let systemPref = window.matchMedia('(prefers-color-scheme: dark)')
  
  systemPref.addEventListener('change',(e)=>{
    if(!localStorage.getItem('theme')){
       if(e.matches){
      rootHtml.current.classList.add('dark');
     }
     else{
      rootHtml.current.classList.remove('dark');
     }
    }
  })


  return (
    <>
    <button onClick={handleThemeChange} className="border-none rounded shadow-xl px-4 py-2 bg-white mx-8 dark:bg-gray-800 hover:cursor-pointer">Change Theme</button> <br />

    <button  onClick={handlePrefBySystem} className="m-2 border-none rounded shadow-xl px-4 py-2 bg-white mx-8 dark:bg-gray-800 hover:cursor-pointer">
      Device Preference
    </button>
    </>
  )
}
