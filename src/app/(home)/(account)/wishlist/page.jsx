"use client";
import Link from "next/link";
import { useWishlistItems } from "@/lib/data";
import Loader from "@/components/shared/loader";
import Error from "@/components/shared/common/error";
import { tst } from "@/lib/utils";
import api from "@/lib/api";

const Wishlist = async () => {
  const { wishlistItems, isLoading, error, mutate } = useWishlistItems();

  async function handleItemRemove(item) {
    try {
      await api.delete(`/wishlistitems/${item.id}`);
      mutate(wishlistItems.filter(wishlistItem => wishlistItem.id !== item.id));
    } catch (error) {
      tst.error(error);
    }
  }
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (wishlistItems.length === 0)
    return (
      <div className="w-full flex  justify-between pt-40 items-center text-center text-slate-500 text-2xl">
        Add item to wishlist
      </div>
    );

  return (
    <div className="w-full relative">
      <h2 className="h2-primary">Wishlist</h2>
      
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className=" divide-gray-200 divide-y-4">
            {wishlistItems.map(wishlistItem => (
              <li key={wishlistItem.id} className="flex py-6 bg-white w-full px-4 ">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={wishlistItem.product.image || "./noimage.png"}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col gap-6 ">
                  <Link href={`/shop/${wishlistItem.product.slug}`} className="flex">
                    <div>
                      <div className="flex text-base font-medium text-gray-900">
                        <h3>{wishlistItem.product.title}</h3>
                        <p className="ml-4">{wishlistItem.product.price}</p>
                      </div>
                      <p className="font-normal text-sm line-clamp-1">
                        {wishlistItem.product.description}
                      </p>
                    </div>
                  </Link>

                  <p>
                    <button
                      onClick={() => handleItemRemove(wishlistItem)}
                      type="button"
                      className="font-medium text-orange-600 hover:text-orange-500"
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
