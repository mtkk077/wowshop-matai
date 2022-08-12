export enum AlertType {
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export type Alert = {
  isAction?: boolean;
  type: AlertType;
  message: string;
};

export type Category = {
  id: string;
  name: string;
  description?: string;
  url: string;
};

export type Brand = {
  id: string;
  name: string;
  url: string;
  description?: string;
};

export type Option = {
  [key: string]: string;
};

export type Product = {
  id: string;
  category: {
    name: string;
    id: string;
    url: string;
  };
  description: string;
  discount?: {
    percent: number;
    discountedPrice: number;
  } | null;
  image: string;
  name: string;
  brand: {
    name: string;
    id: string;
  };
  price: number;
  weight: number;
  isLocked?: boolean;
};

export type Error = {
  isError: boolean;
  message: string;
};

export type CartItem = {
  productId: Product['id'];
  price: Product['price'];
  quantity: number;
  totalPrice: number;
  weight: Product['weight'];
  totalWeight: number;
  profit?: number;
  discount?: number;
  discountedPrice?: number;
};

export type ProductCartItem = CartItem & {
  name: Product['name'];
  categoryUrl: Product['category']['url'];
  image: Product['image'];
  isWished: boolean;
};
