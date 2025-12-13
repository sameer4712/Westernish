import { ArrowRight } from "lucide-react";

export const FashionRevolution = () => {
  return (
    <section className="bg-neutral-100 py-16 sm:py-20 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT - IMAGE */}
          <div className="relative flex justify-center lg:block">
            {/* Decorative Circle */}
            <div className="hidden sm:block absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 sm:w-32 h-24 sm:h-32 border-4 border-[#C47BE4] rounded-full opacity-20"></div>

            <img
              src="/lifestyle.jpeg"
              alt="Fashion group"
              className="
                w-full 
                max-w-105 sm:max-w-130 lg:max-w-none
                h-90 sm:h-120 lg:h-150
                object-cover rounded-xl shadow-2xl
              "
            />

            {/* Badge */}
            <div
              className="
                absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8
                bg-black text-white
                w-24 h-24 sm:w-32 sm:h-32
                rounded-full flex items-center justify-center border border-gray-500
              "
            >
              <span className="text-[10px] sm:text-xs font-bold text-center leading-tight px-2">
                FASHION<br />FORWARD
              </span>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4 block">
              BE PART OF SOMETHING
            </span>

            <h2 className="
              text-4xl sm:text-5xl lg:text-7xl
              font-black mb-6 sm:mb-8
              leading-tight tracking-tighter
            ">
              INTRODUCING <br />
              FASHION <span className="font-light text-[#C47BE4]">REVOLUTION</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg">
              We are redefining what fashion means in the modern world. Our
              collection brings together sustainable practices, cutting-edge
              design, and timeless style.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
              Join thousands who have already made the switch to conscious
              fashion. Every piece tells a story, every purchase makes an impact.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className="
                  bg-black text-white
                  px-8 sm:px-10 py-3 sm:py-4
                  rounded-full font-bold
                  hover:bg-gray-800
                  transition-all hover:scale-105
                  flex items-center gap-2 group
                "
              >
                EXPLORE NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
