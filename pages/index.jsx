import PageHeader from '@/components/PageHeader';
import ProductList from '@/components/ProductList';
function ProductPage() {

	return (
    <div>
      <PageHeader title='상품 목록 페이지'/>
      <ProductList />
    </div>
  );
}

export default ProductPage;
