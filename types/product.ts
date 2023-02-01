interface PriceSub {
    amount: number;
    formatted: String;
  }
  
  interface Price {
    base: PriceSub;
    sales: PriceSub;
    eco: PriceSub;
  }
  
  interface Image {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
  }
  
  interface Stock {
    state: boolean;
  }
  
  interface Product {
    price: Price;
    images: Image[];
    reference: string;
    line: string;
    stock: Stock;
    name: string;
    qty: number;
  }

  export default Product