export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: "$129.99",
      image: "/trend3.jpeg",
      tag: "BESTSELLER",
    },
    {
      id: 2,
      name: "Urban Streetwear",
      price: "$89.99",
      image: "/trending.jpeg",
      tag: "NEW",
    },
    {
      id: 3,
      name: "Classic White Tee",
      price: "$49.99",
      image: "/trend5.jpeg",
      tag: "ESSENTIAL",
    },
    {
      id: 4,
      name: "Designer Sneakers",
      price: "$159.99",
      image: "/trend4.jpeg",
      tag: "TRENDING",
    },
  ];

  return (
    <section className="bg-neutral-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
            STREET READY <span className="text-[#C47BE4]">FAVOURITES</span>
          </h2>
          <button className="text-sm font-bold underline underline-offset-4 hover:no-underline self-start sm:self-auto">
            Browse All →
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full 
                    h-64 sm:h-72 lg:h-96 
                    object-cover 
                    group-hover:scale-110 
                    transition-transform 
                    duration-700
                  "
                />

                {/* TAG */}
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold rounded-full">
                  {product.tag}
                </span>

                {/* HOVER CTA */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <button
                    className="
                      bg-white text-black 
                      px-6 py-3 rounded-full 
                      font-bold text-sm
                      opacity-0 
                      group-hover:opacity-100 
                      translate-y-4 
                      group-hover:translate-y-0 
                      transition-all duration-300
                    "
                  >
                    QUICK VIEW
                  </button>
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-base sm:text-lg leading-snug">
                  {product.name}
                </h3>
                <p className="text-xl sm:text-2xl font-black">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
