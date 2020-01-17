import React, { useState, useEffect} from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

// 3 CONCEITOS ESSENCIAIS REACT

//COMPONENTE: Bloco ISOLADO de HTML, CSS, JS, no qual NÃO interfere no restante da aplicação
//PROPRIEDADE: = ATRIBUTO, Informações que o componente PAI passa para o componente FILHO
//ESTADO: Informações mantidas pelo componente (Lembrar: IMUTABILIDADE)


function App() { //JSX

  const [devs, setDevs] = useState([]);

  

  useEffect( () =>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [] );

  async function handleAddDev(data){

    const response = await api.post('/devs', data);
    
    setDevs([...devs, response.data]);
  }

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
