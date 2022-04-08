import React from 'react';
import './App.css';
import Desafio from './Componentes/Desafio';
import Numero from './Componentes/Numero'
import Propriedades from './Componentes/Propriedades';
import Sorteio from './Componentes/Sorteio';
import Recesso from './Componentes/Recesso'
function App() {
  return (
    <div className="App">
      <h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>

      <div className='linha'>
        <Desafio></Desafio>        
      </div>     
      
      <div className='linha'>
        <Numero></Numero>
      </div> 

       <div className='linha'>
         <Propriedades 
         titulo="QUAL SUA NOTA?"
         aluno="Mateus Costa Centeno"
         yellow
         ></Propriedades>
         </div>
         
         <div className='linha'>
         <Sorteio></Sorteio>
         </div>
         
         <div className='linha'>
         <Recesso></Recesso>
        </div> 

    </div>
  )
}

export default App;
