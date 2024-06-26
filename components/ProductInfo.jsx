import Image from 'next/image';
import React from 'react'
import styles from "./ProductInfo.module.css"

export default function ProductInfo({ productDetail }) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={productDetail.imageUrl}
          alt={productDetail.name}
          width={300}
          height={250}
        />
      </div>
      <div className={styles.description}>
        <p>{productDetail.name}</p>
        <p>$ {productDetail.price}</p>
      </div>
    </div>
  );
}
