"use client";
import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (ref:any, options = { threshold: 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

export const Testimonials = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "The quality is exceptional and the fit is just perfect.",
      author: "Sarah Johnson",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
      text: "Westernish has completely transformed my style.",
      author: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      text: "Finally found a brand that combines sustainability and design.",
      author: "Emma Davis",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="bg-black py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={testimonials[current].image}
            alt={testimonials[current].author}
            className="w-20 h-20 rounded-full mx-auto mb-6 ring-4 ring-white/20"
          />

          <p className="text-2xl italic mb-6">
            “{testimonials[current].text}”
          </p>

          <h4 className="font-bold text-xl">{testimonials[current].author}</h4>
          <p className="text-gray-400">{testimonials[current].role}</p>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  current === index ? "bg-white w-8" : "bg-white/30 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
