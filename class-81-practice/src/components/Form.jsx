
export default function Form() {
  return (
    <form className="login-form sm:responsive-sm">
      <h1>Login Form</h1>

       <label htmlFor="">
        Name:
        <input type="text" className="input-style" />
       </label> <br />

       <label htmlFor="">
        Password:
        <input type="password" name="" id="" className="input-style"/>
       </label> <br />

       <label htmlFor="">
        Email:
        <input type="email" className="input-style"/>
       </label> <br />

       <button className="border border-white/30 px-14 py-4 rounded">Login</button>
    </form>
  )
}
