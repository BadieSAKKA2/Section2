import './App.css';
import Header from './Components/Header/Header';
import ItemsList from "./Components/ItemsList/ItemsList"
import Intro from "./Components/Intro/Intro"

function App() {
  

  return (
    <div>
        <Header></Header>
        <Intro />
        <ItemsList />
    </div>
  );
}

export default App;
