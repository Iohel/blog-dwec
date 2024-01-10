import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {

    const[blogs,SetBlogs] = useState([
        { titulo: "Mi nueva web", body: "Texto para mostrar", autor:"Dios", id:1},
        { titulo: "Pepe", body: "Pepe", autor:"Pepe", id:2},
        { titulo: "Matias el Rumano", body: "Encarcelado", autor:"Saitam", id:3}
    ])

    const[nombre,setNombre] = useState('Pepito');
    const[boolean,setBoolean] = useState(false);
    const handleEliminarBlog = (id)=>{
        const nuevoBlogs = blogs.filter(blog => blog.id !== id);
        SetBlogs(nuevoBlogs);
        setBoolean(true);
    }

    useEffect(()=>{
        console.log("GUN");
        console.log(blogs);

    },[boolean])

	return (
		<div className="home">
		    <BlogList blogs={blogs} titulo="Listado de blogs" handleEliminarBlog={handleEliminarBlog} />
		    <BlogList blogs={blogs.filter(blog => blog.autor === "Dios")} titulo="Blogs de Dios" handleEliminarBlog={handleEliminarBlog}/>
		    <BlogList blogs={blogs.filter(blog => blog.id === 2)} titulo="Blogs de Pepe" handleEliminarBlog={handleEliminarBlog}/>
        <p>{nombre}</p>
        <button onClick={()=>setNombre("Pepe")}>Cambio de nombre</button>
        </div>
	);
}

export default Inicio;