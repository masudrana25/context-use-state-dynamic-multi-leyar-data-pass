import React, { useContext } from 'react';
import './CategoryDetails.css'
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
  const count = useContext(CategoryContext);
  return (
    <div>
      <h6>This is Category Details Section , Count : {count}</h6>
    </div>
  );
};

export default CategoryDetails;