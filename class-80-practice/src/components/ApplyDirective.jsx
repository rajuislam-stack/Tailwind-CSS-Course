//Chapter-08: TailwindCSS @apply Directive

export default function ApplyDirective() {
  return (
    <div>
      <button className="primary-btn "  >
        Click me!
      </button>
   
    <div className="success-alert">
      Data saved successfully!
    </div>

    <div className="error-alert">
      Something went wrong!
    </div>

    <button className="btn-common-style bg-green-600 hover:bg-green-800">Save</button> <br />
    <button className="btn-common-style bg-gray-600 hover:bg-gray-800">Cencel</button> <br />
    <button className="btn-common-style bg-red-600 hover:bg-red-800">Delete</button> <br />
      
    </div>
  )
}
