import sum from './sum'
import Buttom from './components/Buttom'
import TextTitle from './components/TextTitle'
import "./global.css"


const element= "digital innovation"
const element2= <p><b>Olá Turma =D</b></p>
function soma() {
  return alert(sum(10,20))
}
function PrimeiroJSX() {
  
  return (
    <div>
      <TextTitle>Bruno Caneiro - Introdução ao ReactJS</TextTitle>
      {element}{element2}
      <h1>soma:{}</h1>
      <Buttom onClick={()=> soma()} name="somar"/>
    </div>
  );
}
function App() {
  return (
    <div className="App">
    {PrimeiroJSX()}
  
    </div>
  );
}

export default App;
