import { useState } from 'react';
import { Items } from './Items';
import { SearchBar } from './SearchBar';

export type Props = {
  sources: string[];
};

export function SearchableList({ sources }: Props) {
  const [input, setInput] = useState('');

  return (
    <>
      <SearchBar input={input} onChange={setInput} />
      <Items qualm={input} sources={sources} />
    </>
  );
}
