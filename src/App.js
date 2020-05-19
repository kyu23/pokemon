import React, { useState, useEffect } from 'react';
import axios from 'axios';




function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect( () => {
    showPokemon();
  }, [pokemon]);
  

  const showPokemon = (e) => {
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/`) /* https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151 */
      .then( res => setPokemon(res.data.results) )
      .catch( err => console.log(err) );
  }

  return (
    <div className="App">
      <tbody>
        <tr>
        <button
        onClick = { showPokemon }
        >Fetch Pokemon</button>
          
            { 
              pokemon.map((poke, i) => 
                  <li key={ i }>{poke.name}</li>
                )
            }
          
        </tr>
        
      </tbody>
      
    </div>
    
  );
}

export default App;
