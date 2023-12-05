import './App.css';
import Header from './Components/Header/Header';
import ItemsList from "./Components/ItemsList/ItemsList"
import Intro from "./Components/Intro/Intro"


function App() {
  

  return (
    <div>
        <Header></Header>
        <div className='body'>
        <Intro />
        <ItemsList />
        </div>
    </div>
  );
}

export default App;
