"use client";
import Error from "@/components/shared/error";
import Loader from "@/components/shared/loader";
import { useProduct, useProducts } from "@/lib/data";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ProductPageSkeleton from "./skeleton";
import AddToCart from "../components/AddToCart";
import AddToWishlist from "../components/AddToWishlist";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "../components/ProductCard";
import Tabs from "./tabs";

export default function Product({ params }) {
  const slug = params.slug;
  const { product, isLoading, error } = useProduct(slug);
  const [quantity, setQuantity] = useState(1);
  // const { products, isLoading: isProductLoading } = useProducts({ catgoryId: product?.categoryId }) 

  if (isLoading) return <ProductPageSkeleton count={1} />;

  product.discountedPrice = product.price - (product.price * product.discount) / 100;


  if (error) return <Error />;

  return (
    <div className=" py-8 pt-10">
      <div className="mx-auto ">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* Carousel */}
          <div className="px-4 basis-2/5">
            <div className="h-[460px] p-10 bg-white test:bg-slate-700 mb-4">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <img
                      className="w-full h-full object-cover overflow-hidden object-center "
                      src={product.image || "./noimage.png"}
                      alt="Product Image"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      className="w-full h-full object-cover overflow-hidden object-center "
                      src={product.image || "./noimage.png"}
                      alt="Product Image"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      className="w-full h-full object-cover overflow-hidden object-center "
                      src={product.image || "./noimage.png"}
                      alt="Product Image"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:flex-1 p-10 bg-white basis-1/5">
            <p className="text-slate-600 text-3xl font-bold  mb-4">{product.title}</p>
            <div className="mb-4 space-y-4">
              <div className="mr-4">
                {product.discount && (
                  <span className="text-2xl text-slate-500 ">${product.discountedPrice}</span>
                )}
                <span className={`${product.discount && "line-through text-red-600 text-lg"} `}>
                  {" "}
                  ${product.price}
                </span>{" "}
                {product.discount && (
                  <span className="text-sm text-green-600">{product.discount}% off</span>
                )}
              </div>

              <div>
                {[...Array(5)].map(index => (
                  <Icon
                    key={index}
                    className="inline text-xl text-orange-500"
                    icon="mingcute:star-fill"
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-slate-600 test:text-slate-300 mt-2 mb-8">{product.description}</p>
            </div>
            <div className="flex mb-4 gap-4 items-center">
              <Select
                className="w-full"
                value={quantity}
                onValueChange={value => setQuantity(value)}
              >
                <SelectTrigger className="border-slate-600 w-32 focus:ring-0">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 100 }, (_, i) => i + 1).map(i => (
                    <SelectItem key={i} value={i}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {<AddToCart quantity={quantity} product={product} />}
            </div>
          </div>

        

          {/* You May Also Like */}
       {/*    {!isProductLoading && (
            <div>
              <h2 className="h2-primary">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )} */}
        </div>
        <Tabs/>
      </div>
    </div>
  );
}
{
  /* <Review product={product} /> */
}
