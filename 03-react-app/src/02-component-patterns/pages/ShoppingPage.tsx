
import ProductCard, { ProductTitle, ProductImage, ProductButtons } from '../components';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '/coffee-mug.png'
};

const ShoppingPage: React.FC = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='Café con leche' />
          <ProductButtons />
        </ProductCard>

        {/* <ProductCard product={product}>
          <ProductImage image={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons increaseBy={increaseBy} count={count} />
        </ProductCard> */}
      </div>
    </div>
  );
};

export default ShoppingPage;