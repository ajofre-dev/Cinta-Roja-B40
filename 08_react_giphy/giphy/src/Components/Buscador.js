import React, {useState, useEffect} from 'react'
import imageCard from './imageCard'
import axios from 'axios';

const Buscador = () => {
    

    const [gif, setGif] = useState('');
    const [texto, setTexto] = useState('');

    const ObtenerGif = () => {
        
        
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=eRpCfAcacE7aoTo8byRZEb5vhvIbLE0q&q=${texto}&limit=2`)
        .then(({ data }) => {
            console.log(data.data)
            setGif(data.data[0].images.downsized_large.url);

        })
        .catch((err) => console.error(err))

        

    }

    const handleChange = (event) => {
        //console.log(event.target.value);
        setTexto(event.target.value);
    }
    
    return (
        <div>
            <p>Boton para peticion</p>
            <input type="text" onChange={handleChange} />
            <button onClick={() => ObtenerGif()}>Hacer peticion</button>
            <img src={gif} alt=""/>
        </div>
    )
}

export default Buscador;
