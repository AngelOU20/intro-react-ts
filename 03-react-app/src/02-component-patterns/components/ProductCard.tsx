import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard: React.FC<Props> = ({ children, product }) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider value={{ count, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;