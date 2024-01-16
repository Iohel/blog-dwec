import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Inicio = () => {

  const {sotad:blogs, cargando, error} = useFetch("http://localhost:8000/blogs");

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
