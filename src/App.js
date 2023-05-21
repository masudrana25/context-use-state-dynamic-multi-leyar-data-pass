import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipping from './components/Shipping/Shipping';

  export const CategoryContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={[count,setCount]}>
          <h2> App.js Count : {count}</h2>
          <Header></Header>
          <Home></Home>
          <Shipping></Shipping>
    </CategoryContext.Provider>
  );
}

export default App;
