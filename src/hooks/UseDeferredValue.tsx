import { useState, useDeferredValue } from 'react';

import { generateProducts } from '../utils/generateProducts';
const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [filterTerm, setFilterTerm] = useState('');
  
  const filteredProducts = filterProducts(filterTerm);
  const deferredProducts = useDeferredValue(filteredProducts);

  function updateFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      <ul>
        {deferredProducts.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
