import './App.css';

import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Se vienen cositas..."} />
      
  
    </div>
  );
}

export default App;
