//Class-79: Practice //Topics:Chapter-06: Tailwind CSS Dark Mode — Beginner to Advanced ,Chapter-07: TailwindCSS Functions & Directives

import DerectivesFunctions from "./components/DerectivesFunctions";
import ThemeToggleBtn from "./components/ThemeToggleBtn";

export default function App() {
  return (
    <>
    <div className="h-40 max-w-sm shadow-xl rounded mx-auto my-4 text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-900">App

      <img src="https://react.dev/images/docs/scientists/MK3eW3As.jpg" alt="scientists" className="rounded m-2 dark:invert-25" />
    </div>

    <input type="text" className="border-2 rounded m-4 hover:bg-red-100 dark:hover:bg-blue-950 dark:focus:outline-none dark:focus:ring-white dark:focus:ring-2"/> <br />


    <ThemeToggleBtn/> <br/>

      <DerectivesFunctions/>
    </>
  )
}
