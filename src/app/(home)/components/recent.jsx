import { ProductCard } from "@/app/(home)/shop/components/ProductCard";

const products = [
  {
    id: 1,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 5,
    reviews: 99,
  },
  {
    id: 2,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 4.5,
    reviews: 85,
  },
  {
    id: 1,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 5,
    reviews: 99,
  },
  {
    id: 2,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 4.5,
    reviews: 85,
  },
  {
    id: 1,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 5,
    reviews: 99,
  },
  {
    id: 2,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 4.5,
    reviews: 85,
  },
  {
    id: 2,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 4.5,
    reviews: 85,
  },
  {
    id: 2,
    image: "/test2.png",
    name: "Product Name Goes Here",
    price: 123.0,
    discountedPrice: 123.0,
    rating: 4.5,
    reviews: 85,
  },
];
export const RecentProducts = () => {
  return (
    <div>
      <h2 className="uppercase mb-6 text-4xl text-slate-500 font-medium ">
        Recent Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
