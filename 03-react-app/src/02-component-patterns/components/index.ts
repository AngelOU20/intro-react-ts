// import { ProductCardProps } from "../interfaces/interfaces";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductTitle } from ".";
import { ProductImage } from ".";
import { ProductButtons } from ".";

export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";

// export * from "./ProductCard";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
