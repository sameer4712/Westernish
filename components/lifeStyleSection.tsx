"use client";

import { motion } from "framer-motion";

export const LifestyleSections = () => {
  const sections = [
    {
      title: "SHOP THE LOOK, LIVE IN THE VIBE",
      description:
        "Curate your perfect style with our handpicked collections. From street to chic, we've got everything you need to express yourself.",
      image: "/trend.jpeg",
      tag: "VIBE",
    },
    {
      title: "FREE WORLDWIDE SHIPPING ABOVE $99",
      description:
        "Shop with confidence knowing your fashion finds will arrive safely, anywhere in the world. No boundaries, just style.",
      image: "/girl.jpeg",
      tag: "SHIPPING",
    },
    {
      title: "SUMMER SALE NEW COLLECTION GREAT ARRIVALS",
      description:
        "Discover our latest summer collection with exclusive pieces that define the season. Limited time offers on premium styles.",
      video: "/summer.mp4",
      tag: "OFFERS",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 bg-dot-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20 sm:space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-center lg:text-left ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3 block">
                {section.tag}
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 leading-tight tracking-tighter">
                {section.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-7 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                {section.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-black text-black px-7 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all"
              >
                LEARN MORE
              </motion.button>
            </motion.div>

            {/* MEDIA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`relative ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              {section.video ? (
                <motion.video
                  src={section.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-70 sm:h-90 lg:h-125 object-cover rounded-xl shadow-xl"
                />
              ) : (
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-70 sm:h-90 lg:h-125 object-cover rounded-xl shadow-xl"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
