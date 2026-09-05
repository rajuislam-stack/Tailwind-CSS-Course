//@appy directive in TailwindCSS

export default function ApplyDirective() {
  return (
    <div>
      <button className="primary-btn">Click me!</button> <br />

      <button className="primary-btn text-red-700 hover:bg-red-500">Click me !</button>

       <div className="primary-div hover:bg-red-500">
         this is apply directive's div!
       </div>

       <div className="alert-success">
        Showing Alert!
       </div>

       <div className="alert-error">
        Showing Alert!
       </div>
    </div>
  )
}
