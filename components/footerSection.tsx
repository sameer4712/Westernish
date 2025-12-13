export default function FooterSection() {
  const footerLinks = {
    SHOP: ["Women", "New Arrivals", "Sale"],
    SUPPORT: ["Customer Service", "Shipping", "Returns", "Size Guide"],
    "FOLLOW US": ["Instagram", "Twitter", "Facebook"],
  };

  return (
    <>
      {/* Newsletter */}
      <section className="bg-neutral-100 py-20 bg-dot-fade">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tighter font-playfair">
            STAY IN THE <span className="text-[#C47BE4]">LOOP</span>
          </h2>

          <p className="text-amber-50 mb-8 text-lg font-poppins">
            Subscribe to get exclusive access to new drops, special offers, and style inspiration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-black font-poppins"
            />
            <button className="bg-white text-black px-10 py-4 border border-black rounded-full font-black hover:bg-amber-50 transition-all font-poppins">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-black bg-linear-to-r from-[#C47BE4] [#D78FEE] to-white bg-clip-text text-transparent mb-4 tracking-wide font-playfair">
                WESTERNISH
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                Contemporary fashion for the modern lifestyle. Express yourself.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold mb-4 text-sm tracking-wider font-poppins">
                  {title}
                </h4>
                <ul className="space-y-3 text-gray-400 text-sm font-poppins">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm font-poppins">
            © 2024 Westernish. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
