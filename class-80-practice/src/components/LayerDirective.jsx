//Chapter-09: TailwindCSS @layer Directive

export default function LayerDirective() {
  return (
    <div>

      <h1>Hello TailwindCSS (@layer directive)</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, obcaecati! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, officiis?</p>

      <button className="btn-style">
        Click me!
      </button>

      <h1 className="text-shadow text-40 padding p-10">Text Shadow 1</h1>
      

      <div className="card content-auto ">
        Card 1
      </div>
  

    {/* Practice Project: "Custom Blog Styles" */}
     
     <div className="blog-card">

      <h2 className="text-grow">My first blog post!</h2>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, aliquam quisquam sit eos itaque fugit, quae, eius laborum est repudiandae molestiae nam voluptatibus corrupti perferendis quos velit accusantium? Dicta, impedit?</p>

      <a href="#">Visit my blog</a>

     </div>
    </div>
  )
}
