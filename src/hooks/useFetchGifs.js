import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { //useEffect se usa para que no se dispare la renderización de todo, solo de esto

        getGifs( category ) //funcion en helpers que funciona como promesa
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])




    return state; // { data:[], loading: true };


}


