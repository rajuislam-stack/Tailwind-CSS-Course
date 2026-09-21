//Practice from CodeJogot Documentation //Topics: @utility directive 

import Form from "./components/Form";

export default function App() {
  return (
    <div className="p-4">
      input: <input type="text" className=" hover:my-shadow w-1/2 p-2 border border-gray-300 rounded focus:input-focus" /> 
      
      <br/>
      <Form/>
    </div>
  )
}
