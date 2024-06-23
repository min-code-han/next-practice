import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./ProductList.module.css"
import { fetchProductList } from '@/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductList().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id} className={styles.item}>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={250}
                />
                <div>{product.name}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
