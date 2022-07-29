import './App.css'
import Header from './components/Header';
import Hero from "./components/Hero";
import Tool from './components/Tool';

const App = ()=>{
  return(
    <div className="container">
    <Header/>
    <Hero/>
    <Tool/>
    </div>
  )
}

export default App;
