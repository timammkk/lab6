import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Message name="Daffy Duck" job="animal" age={44}/>
      <Team name="Liverpool" trophies={15}/>
      <Team name="Senegal" trophies={7}/>
      <Team name="Cote d'ivoire" trophies={0}/>
    </div>
  );
}

export default App;
