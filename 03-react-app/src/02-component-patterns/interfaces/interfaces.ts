import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface Props {
  product: Product;
  children?: React.ReactNode | ReactElement | ReactElement[];
}

export interface ProductCardProps {
  Title: React.FC<{ title?: string }>;
  Image: React.FC<{ img?: string | undefined }>;
  Buttons: React.FC<ProductButtonsProps | Record<string, never>>;
}

export interface ProductButtonsProps {
  increaseBy: (value: number) => void;
  count: number;
}

export interface ProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
