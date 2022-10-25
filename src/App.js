import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title="¡Bienvenidos!" subtitle="Este es tu tienda de manga online" />
    </>
  )
}

export default App;