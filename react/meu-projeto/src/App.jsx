import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {

  const nome = "Joãozinho";

  return (
    <>
      <header className="App App-header">
        <img src={logo} alt="Nothing..." className="App-logo" />
        <HelloWorld />
        <SayMyName nome="Dan"/>
        <SayMyName nome={nome} />
        <Pessoas nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
        <List />

        <h2>Testando Eventos</h2>
        <Evento />
        <Form />

        <h2>Renderização Condicional</h2>
        <Condicional />
      </header>
    </>
  );
}

export default App;
