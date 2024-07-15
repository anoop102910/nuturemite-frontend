"use client";
import { Hero } from "./components/hero";
import { Featured } from "./components/featured";
// import { RecentProducts } from "./components/recent";
import { Categories } from "./components/categories";

export default function Page() {
  return (
    <div className="pb-10">
      <Hero />
      <section className="mt-10">
        <Featured />
      </section>
      {/* <RecentProducts /> */}
      <section className="mt-10">
        <Categories />
      </section>
    </div>
  );
}
