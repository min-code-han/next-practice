import axios from 'axios';
import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products').then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <ul>
      {products &&
        products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
    </ul>
  );
}

export default ProductList;
