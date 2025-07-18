import type { Pokemon } from './App';

const pokedex: Pokemon[] = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export function PokemonList() {
  const listItems = pokedex.map((entry) => (
    <li key={entry.number}>{entry.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
