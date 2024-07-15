"use client"
const carouselItems = [
  {
    id: 1,
    image: "img/carousel-1.jpg",
    title: "Men Fashion",
    description:
      "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    buttonLabel: "Shop Now",
  },
  {
    id: 2,
    image: "img/carousel-2.jpg",
    title: "Women Fashion",
    description:
      "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    buttonLabel: "Shop Now",
  },
  {
    id: 3,
    image: "img/carousel-3.jpg",
    title: "Kids Fashion",
    description:
      "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    buttonLabel: "Shop Now",
  },
];

export const Carousel = () => {
  return (
    <div className="container mb-3">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 px-5 lg:px-0">
        <div className="lg:col-span-8">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade mb-10 lg:mb-0"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {carouselItems.map((item, index) => (
                <li key={item.id} className={`inline-block mr-1 ${index === 0 ? "active" : ""}`}>
                  <button
                    className={`w-3 h-3 bg-gray-500 rounded-full active:bg-gray-800 focus:outline-none`}
                    data-target="#header-carousel"
                    data-slide-to={index}
                  ></button>
                </li>
              ))}
            </ol>
            <div className="carousel-inner relative">
              {carouselItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`carousel-item absolute top-0 left-0 w-full h-full ${
                    index === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={`Carousel ${index + 1}`}
                  />
                  <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className="max-w-sm mx-auto">
                      <h1 className="text-4xl mb-4 animate__animated animate__fadeInDown">
                        {item.title}
                      </h1>
                      <p className="mx-4 mb-4 animate__animated animate__bounceIn">
                        {item.description}
                      </p>
                      <a
                        href="#"
                        className="btn btn-outline-light inline-block py-2 px-6 animate__animated animate__fadeInUp"
                      >
                        {item.buttonLabel}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">{/* Placeholder for product offers */}</div>
      </div>
    </div>
  );
};
