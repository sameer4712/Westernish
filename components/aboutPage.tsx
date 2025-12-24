'use client';

import React, { useEffect, useRef } from 'react';
import { TrendingUp, MapPin, Clock, Users, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white overflow-hidden">
      {/* Hero Section with Bento Grid */}
      <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 fade-in-element">
            {/* Stat Card 1 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      4.4/5
                    </h3>
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-gray-600 font-medium">Customer Rating</p>
                  <p className="text-sm text-gray-400">Based on 58+ reviews</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
                  ))}
                </div>
              </div>
              <div className="flex -space-x-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-white">
              <Sparkles className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-5xl font-bold mb-2">2</h3>
              <p className="text-white/90 font-medium mb-1">Premium Outlets</p>
              <p className="text-sm text-white/70">Across Kochi City</p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/80">Thoppumpady • Kadavanthara</p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                1000+
              </h3>
              <p className="text-gray-600 font-medium mb-1">Happy Customers</p>
              <p className="text-sm text-gray-400">Fashion enthusiasts trust us</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                <span className="text-xs font-semibold text-gray-500">88%</span>
              </div>
            </div>
          </div>

          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 fade-in-element">
            {/* Left Product Image */}
            <div className="lg:col-span-4 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-gradient-to-br from-orange-100 to-amber-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/api/placeholder/400/600"
                  alt="Fashion Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                    <p className="text-sm font-bold text-gray-800 mb-2">Best Ratings ⭐</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl">😊</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
              <div>
                <p className="text-purple-600 font-semibold mb-3 tracking-widest uppercase text-sm">A Bit</p>
                <h1 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
                  ABOUT US
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Westernish Kochi brings you the finest collection of trendy Western fashion. From chic dresses to 
                  stylish tops and trousers, we curate pieces that reflect your unique style. Experience premium quality, 
                  comfortable fits, and unbeatable prices at our outlets.
                </p>
              </div>

              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-fit">
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE MORE
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </div>

            {/* Right Product Image */}
            <div className="lg:col-span-4 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/api/placeholder/400/600"
                  alt="Fashion Style"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations - Dark Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYyYzAgMi0yIDQtMiA0cy0yLTItMi00di0yem0wLTMwYzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNFY0ek0wIDM0YzAtMiAyLTQgMi00czIgMiAyIDR2MmMwIDItMiA0LTIgNHMtMi0yLTItNHYtMnptMC0zMGMwLTIgMi00IDItNHMyIDIgMiA0djJjMCAyLTIgNC0yIDRzLTItMi0yLTRWNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 fade-in-element">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto rotate-6 hover:rotate-12 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-5xl font-black mb-4">Visit Our Stores</h2>
            <p className="text-purple-200 text-lg">Experience fashion excellence at our premium locations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Thoppumpady Store */}
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-6 right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Main Store
              </div>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Thoppumpady
                </h3>
                <p className="text-purple-100 mb-2">Jn, Kazhuthumuttu, Kochi, Thoppumpady</p>
                <p className="text-purple-200 text-sm">PIN: 682005</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Mon-Fri: 10:00 AM - 10:00 PM</p>
                    <p className="text-purple-200 text-sm">Sat: 10:00 AM - 10:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                  <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <p className="text-purple-200 text-sm">Near Fort Kochi, Mattancherry, Palluruthy</p>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-2xl">
                Get Directions →
              </button>
            </div>

            {/* Kadavanthara Store */}
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-6 right-6 bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                New Store
              </div>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Kadavanthara
                </h3>
                <p className="text-purple-100 mb-2">Kadavanthara, Ernakulam, Kochi</p>
                <p className="text-purple-200 text-sm">PIN: 682020</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Open Daily</p>
                    <p className="text-purple-200 text-sm">10:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-purple-200 text-sm">Major commercial hub area</p>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-2xl">
                Get Directions →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4 bg-white fade-in-element">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/api/placeholder/600/500"
                  alt="Westernish Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">Our Community</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We take pride in serving the vibrant fashion community of Kochi. With our helpful and polite staff, 
                comfortable and stylish collections, and reasonable pricing, Westernish has become the trusted choice 
                for fashion enthusiasts across the city.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our commitment to quality and customer satisfaction reflects in our 4.4-star rating. Every piece is 
                carefully curated to ensure you get the best fit, fabric, and style.
              </p>

              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">58+</p>
                  <p className="text-gray-600 text-sm">Happy Reviews</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1000+</p>
                  <p className="text-gray-600 text-sm">Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4.4/5</p>
                  <p className="text-gray-600 text-sm">Rating</p>
                </div>
              </div>

              <button className="px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-element {
          opacity: 0;
        }

        .fade-in-element.animate-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;