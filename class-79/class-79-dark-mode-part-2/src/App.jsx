//Tailwind css Dark and Light mode (Part-2) and Directive & Functions

import { useState } from "react"
import Practice from "./components/Directives-functions-Practice";


export default function App() {
  const [isLight, setIsLight] = useState(true);

   window.onload = function(){
    let savedTheme = localStorage.getItem('theme');
    
     if(savedTheme == 'dark' || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)){
       setIsLight(false)
       document.documentElement.classList.add('dark')
     }
     else{
      setIsLight(true)
      document.documentElement.classList.remove('dark')
     }
  }
 
  function handleThemeChange(){
   setIsLight(!isLight);
   document.documentElement.classList.toggle('dark');

   if(document.documentElement.classList.contains('dark')){
    localStorage.setItem('theme', 'dark')
   }
   else{
    localStorage.setItem('theme', 'light')
    }
  }

  function handleThemeBySystemPreference(){
     localStorage.clear();

     let symtemMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

     if(symtemMode){
      document.documentElement.classList.add('dark');
      setIsLight(false)
     }
     else{
      document.documentElement.classList.remove('dark');
      setIsLight(true)
     }
  }

  const systemPrefersChange = window.matchMedia("(prefers-color-scheme: dark)");

  systemPrefersChange.addEventListener('change',(e)=>{
     if(!localStorage.getItem('theme')){
      if(e.matches){
         document.documentElement.classList.add('dark');
         setIsLight(false)
      }
      else{
     document.documentElement.classList.remove('dark');
     setIsLight(true)
      }
     }
  })

  return (
   <>
    <nav className="w-full h-10 bg-red-100 flex items-center justify-end p-2">
      <button className="bg-white dark:bg-black px-3 py-1 rounded shadow-2xl " onClick={handleThemeChange}>{isLight ? '🌙 Dark': '☀ Light'}</button>

      <button onClick={handleThemeBySystemPreference} className="bg-white text-black px-4 py-1 ml-1 dark:bg-black dark:text-white rounded">
        System
      </button>
    </nav>

    <div className="max-w-sm text-3xl font-bold h-40 my-4 mx-auto bg-white shadow-xl flex justify-center items-center dark:bg-red-100 dark:text-red-900 hover:bg-gray-100 dark:hover:bg-red-300">This is TailWindCSS!</div>

    <p className="p-2">Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora?.</p>

    <Practice/>
   </>
  )
}
