import { useState, useTransition } from 'react';

import { generateProducts } from '../utils/generateProducts';
const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p style={{color: 'black'}}>Updating List...</p>}
      <ul>
        {filteredProducts.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
