"use client";
import Error from "@/components/shared/error";
import Loader from "@/components/shared/loader";
import { useProduct } from "@/lib/data";
import { Icon } from "@iconify/react";
import React from "react";
import ProductPageSkeleton from "./skeleton";
import { Button } from "@/components/ui/button";
import AddToCart from "../components/AddToCart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddToWishlist from "../components/AddToWishlist";

export default function Product({ params }) {
  const slug = params.slug;
  const { product, isLoading, error } = useProduct(slug);
  if (isLoading) return <ProductPageSkeleton count={1} />;
  product.discountedPrice = product.price - (product.price * product.discount) / 100;
  if (error) return <Error />;

  return (
    <div className=" py-8 pt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] p-10 bg-white test:bg-slate-700 mb-4">
              <img
                className="w-full h-full object-cover overflow-hidden object-center "
                src={product.image || "./noimage.png"}
                alt="Product Image"
              />
            </div>
          </div>

          <div className="md:flex-1 p-10 bg-white">
            <p className="text-slate-600 text-3xl font-bold test:text-slate-300 mb-4">
              {product.title}
            </p>
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
                {/* <span className="text-slate-600 test:text-slate-300"> {product.avgRating}</span> */}
                {[...Array(5)].map(index => (
                  <Icon
                    className="inline text-xl text-orange-500"
                    key={index}
                    icon="mingcute:star-fill"
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-slate-600 test:text-slate-300 mt-2 mb-8">{product.description}</p>
            </div>
            <div className="flex -mx-2 mb-4 gap-4">
              <AddToCart product={product} />
              <AddToWishlist product={product}/>
            </div>
          </div>
        </div>
        {/*   <div>
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="vendor">Vendor</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <div className="py-10 px-6">{product.description}</div>
            </TabsContent>
            <TabsContent value="vendor">
              <div className="p-40">
                <div className="py-10 px-6">{product.description}</div>
              </div>
            </TabsContent>
          </Tabs>
        </div> */}
      </div>
    </div>
  );
}
{
  /* <Review product={product} /> */
}
