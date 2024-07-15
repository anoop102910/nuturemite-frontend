import Link from "next/link";

const categories = [
  { id: 1, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 2, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 3, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 4, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 5, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 6, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 7, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 8, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 8, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 8, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 8, image: "/test.png", name: "Category Name", productCount: 100 },
  { id: 8, image: "/test.png", name: "Category Name", productCount: 100 },
];

export const Categories = () => {
  return (
    <div>
      <h2 className="h2-primary">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {categories.map(category => (
          <div key={category.id} className="bg-white ">
            <Link href="#" className="text-decoration-none">
              <div className="flex items-center px-4 ">
                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                  <img
                    className="w-full h-full object-cover"
                    src={category.image}
                    alt={category.name}
                  />
                </div>
                <div className="flex-grow pl-3 px-4 h-full">
                  <h6>{category.name}</h6>
                  <small className="text-body">{category.productCount} Products</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
