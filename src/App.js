import {useState} from 'react';
import { FiSearch } from 'react-icons/fi'
import './style.css';
import backgroundimg from './img/backgroundimg.jpg';
import api from './SERVICES/api';

function App() {

  function App() {
    return (
      <div className='backgroundimg'
        style={{
          backgroundimg: `url(${backgroundimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
        }}
      >
        <h1>Minha aplicação com imagem de background</h1>
      </div>
    );
  }

  const [input, setInput] = useState('')
  const [cep, setCep] = useState('')

 async function handleSearch(){

    if(input === ''){
      alert('Preencha o seu CEP')
      return;
      }

      try{
        const response = await api.get(`${input}/json`);
        setCep(response.data)
        setInput('')

      }catch{
        alert('Ops! Erro ao buscar, certifique-se que o CEP foi digitado corretamente e tente novamente!')
        setInput("")
      }


  }

  return (
    <div className="container">
    <h1 className="title">Buscador CEP</h1>
 
    <div className="containerInput">
    <input
    type="text"
    placeholder="Digite seu CEP..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />


    <button className="buttonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="FFF"/>
    </button>
    </div>

    {Object.keys(cep).length > 0 && (
    <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>
          <span>DDD: {cep.ddd}</span>
    
    </main>
    )}

    </div>
  );
}

export default App;
