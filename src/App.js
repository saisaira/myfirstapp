import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import B from './components/balaji'
import ClassBasedCom from './components/classBasedComponent'
import Hooks from './components/hooksInc';

function App() {

  return (
    <div className="App">
      <Home />
      <ClassBasedCom name="Rajesh"> APSSDC </ClassBasedCom>
        <h1> Hooks Concept</h1>
        <Hooks/>
    </div>
  );
}

let Home=()=>{
  return(
    <h1>This is my Home Component</h1>
  );
}


export default App;
