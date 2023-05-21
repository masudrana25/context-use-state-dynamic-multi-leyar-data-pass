import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipping = () => {
   const [count, setCount] = useContext(CategoryContext);
  return (
    <div>
      <h1>This is Shipping</h1>
      <button onClick={()=>setCount(count+1)}>increase from  shipping</button>
      <h2> Home Count : {count}</h2>
    </div>
  );
};

export default Shipping;