


export const getGifs = async( category ) => { //funciona como promesa así que se le pone async
//encodeUri quita espacios y hace que se vea como una irl
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
    const resp = await fetch( url ); //hasta que no da resultados el fetch no sigue
    const { data } = await resp.json(); //cuande resp tiene resultados, saca la data como JSOn

    return data.map( img => { //retorna solo una parte del JSON
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })


}