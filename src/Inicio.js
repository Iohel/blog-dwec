import { useState } from "react";

const Inicio = () => {

    const[blogs,SetBlogs] = useState([
        { titulo: "Mi nueva web", body: "Texto para mostrar", autor:"dios", id:1},
        { titulo: "Pepe", body: "Pepe", autor:"Pepe", id:2},
        { titulo: "Matias el Rumano", body: "Encarcelado", autor:"Saitam", id:2}
    ])

	return (
		<div className="home">
		    {blogs.map((blog)=>
                
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.titulo}</h2>
                <p>Escrito por {blog.autor}.</p>
                </div>
                
            )}
		</div>
	);
}

export default Inicio;