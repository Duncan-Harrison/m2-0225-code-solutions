import './App.css';
import { PokemonList } from './PokemonList';

export type Pokemon = {
  number: string;
  name: string;
};

function App() {
  return (
    <>
      <PokemonList />
    </>
  );
}

export default App;
