import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
  const [ count, setCount ] = useContext(CategoryContext);
  return (
    <div>
      <h1>This is Header</h1>
      <h2>Header Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}> <h2> increase from Header </h2></button>
    </div>
  );
};

export default Header;