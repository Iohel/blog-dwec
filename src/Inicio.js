import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {
  const [blogs, SetBlogs] = useState(null);
  const [cargando, SetCargando] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
            console.log(res);
            if(!res.ok){
                throw Error("No recovered information.");
            }
          return res.json();
        })
        .then((datos) => {
          //console.log(datos);
          SetBlogs(datos);
          SetCargando(false);
          SetError(null);
        })
        .catch(err=>{
            /* console.log(err.message); */
            SetError(err.message);
            SetCargando(false);
        })

    }, 1000);
  }, []);

  return (
    <div className="home">
      {cargando && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} titulo="Listado de blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.autor === "Dios")}
          titulo="Blogs de Dios"
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.id === 2)}
          titulo="Blogs de Pepe"
        />
      )}
    </div>
  );
};

export default Inicio;
