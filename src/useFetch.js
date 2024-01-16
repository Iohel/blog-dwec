import { useState, useEffect } from "react";
const useFetch = (url)=> {

    const [sotad, SetSotad] = useState(null);
    const [cargando, SetCargando] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error("No recovered information.");
                }
              return res.json();
            })
            .then(datos => {
              //console.log(datos);
              SetSotad(datos);
              SetCargando(false);
              SetError(null);
            })
            .catch(err=>{
                /* console.log(err.message); */
                SetError(err.message);
                SetCargando(false);
            })
    
        }, 1000);
    }, [url]);
    return {sotad,cargando,error};
}

export default useFetch;