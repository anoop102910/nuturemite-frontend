import { cn } from "@/lib/utils";
import React from "react";

export const PriceFilter = ({className}) => {
  const priceRanges = [
    { id: "price-all", label: "All Price", range: "1000" },
    { id: "price-1", label: "0 - 100", range: "150" },
    { id: "price-2", label: "100 - 200", range: "295" },
    { id: "price-3", label: "200 - 300", range: "246" },
    { id: "price-4", label: "300 - 400", range: "145" },
    { id: "price-5", label: "400 - 500", range: "168" },
  ];

  return (
    <div className={cn("h-min w-full",className)}>
      <h2 className="h2-primary">Filter By Price</h2>
      <div className="bg-white p-4 px-6 mb-30">
        <form className="">
          {priceRanges.map(range => (
            <div className="flex justify-between items-start">
              <div key={range.id} className="flex gap-10  mb-3">
                <input type="checkbox" className="w-4" id={range.id} />
                <label className="custom-control-label" htmlFor={range.id}>
                  {range.label}
                </label>
              </div>
              <span className="text-xs border p-[0.1rem]">{range.range}</span>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};
