"use client";

export const HeroGrid = () => {
  return (
    <section className="pt-20 bg-neutral-100 bg-dot-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        
        {/* Top label */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-600">
            STREET
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            {/* Heading + Main Image */}
            <div>
              <h1 className="
                text-white
                text-[2.5rem]
                lg:text-7xl 
                font-black 
                leading-tight 
                mb-6 
                tracking-tighter
              ">
                MORE <span className="bg-linear-to-r from-[#C47BE4] [#D78FEE] to-white bg-clip-text text-transparent">EXPERIENCES</span>
              </h1>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/desktop.jpg"
                  alt="Adventure"
                  className="
                    w-full 
                    h-55 
                    sm:h-70
                    lg:h-80 
                    object-cover 
                    group-hover:scale-105 
                    transition-transform 
                    duration-700
                  "
                />

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <p className="text-white sm:text-[1.2rem] leading-relaxed">
                    Experience the thrill of adventure with our premium outdoor
                    collection designed for those who dare to explore.
                  </p>
                </div>
              </div>
            </div>

            {/* Small images */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/soso.jpg"
                  alt="Fashion street"
                  className="
                    w-full 
                    h-40
                    sm:h-50
                    object-cover 
                    hover:scale-105 
                    transition-transform 
                    duration-700
                  "
                />
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/wall1.jpeg"
                  alt="Urban style"
                  className="
                    w-full 
                    h-40 
                    sm:h-50
                    object-cover 
                    hover:scale-105 
                    transition-transform 
                    duration-700
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden rounded-xl min-h-90 sm:min-h-120 lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=900&fit=crop"
              alt="Fashion lifestyle"
              className="
                absolute inset-0 
                w-full 
                h-full 
                object-cover 
                hover:scale-105 
                transition-transform 
                duration-700
              "
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <h2 className="
                text-8xl 
                font-black 
                text-white 
                tracking-tighter 
                text-center
              ">
                YOUR <span className="bg-linear-to-r from-[#C47BE4] [#D78FEE] to-white bg-clip-text text-transparent">WAY</span>
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
