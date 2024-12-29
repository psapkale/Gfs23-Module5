export interface CartItemType {
   id: number;
   title: string;
   imgUrl: string;
   price: number;
   quantity: number;
}

export const data: CartItemType[] = [
   {
      id: 1,
      title: "Samsung Galaxy S8",
      imgUrl: "https://www.course-api.com/images/cart/phone-1.png",
      price: 399.99,
      quantity: 1,
   },
   {
      id: 2,
      title: "Google Pixel",
      imgUrl: "https://www.course-api.com/images/cart/phone-2.png",
      price: 499.99,
      quantity: 1,
   },
   {
      id: 3,
      title: "Xiaomi Redmi Note 2",
      imgUrl: "https://www.course-api.com/images/cart/phone-3.png",
      price: 699.99,
      quantity: 1,
   },
   {
      id: 4,
      title: "Samsung Galaxy S7",
      imgUrl: "https://www.course-api.com/images/cart/phone-4.png",
      price: 599.99,
      quantity: 1,
   },
];
