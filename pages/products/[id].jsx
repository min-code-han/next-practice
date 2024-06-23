import { fetchProductById } from '@/api';
import ProductInfo from '@/components/ProductInfo';


export default function ProductDetailPage({ productDetail }) {
  return (
    <>
      <ProductInfo productDetail={productDetail} />
    </>
  );
}

export async function getServerSideProps(context) {

  const id = context.params.id
  const { data } = await fetchProductById(id);

  return {
    props: { 
      productDetail: data 
    },
  };
}
