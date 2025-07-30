/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function run() {
      try {
        const allItems = await readItems();
        setItems(allItems);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    run();
  }, [isLoading]); // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
