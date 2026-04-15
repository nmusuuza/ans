'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury 5-Bedroom Villa",
      location: "Kololo, Kampala",
      price: "UGX 1.2B",
      type: "Villa",
      image: "https://source.unsplash.com/random/600x400/?luxury,villa",
      beds: 5,
      baths: 6,
      area: "850 sqm"
    },
    {
      id: 2,
      title: "Modern 3-Bed Apartment",
      location: "Bugolobi, Kampala",
      price: "UGX 450M",
      type: "Apartment",
      image: "https://source.unsplash.com/random/600x400/?modern,apartment",
      beds: 3,
      baths: 3,
      area: "320 sqm"
    },
    {
      id: 3,
      title: "Prime Commercial Land",
      location: "Entebbe Road",
      price: "UGX 890M",
      type: "Land",
      image: "https://source.unsplash.com/random/600x400/?land",
      beds: 0,
      baths: 0,
      area: "2,500 sqm"
    },
    {
      id: 4,
      title: "Family Home in Gated Estate",
      location: "Muyenga, Kampala",
      price: "UGX 680M",
      type: "House",
      image: "https://source.unsplash.com/random/600x400/?family,home",
      beds: 4,
      baths: 4,
      area: "620 sqm"
    }
  ];

  const handleSearch = () => {
    if (searchLocation.trim()) {
      alert(`Searching for properties near ${searchLocation}`);
    } else {
      alert("Please enter a location to search");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-house text-3xl"></i>
              <span className="text-2xl font-bold tracking-tight">ANS Real Estate</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-blue-200">Buy</a>
              <a href="#" className="hover:text-blue-200">Rent</a>
              <a href="#" className="hover:text-blue-200">Sell</a>
              <a href="#" className="hover:text-blue-200">Projects</a>
              <a href="#" className="hover:text-blue-200">Virtual Tours</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 px-5 py-2 hover:bg-blue-600 rounded-full transition">
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
              <button className="bg-white text-blue-700 px-6 py-2.5 rounded-full font-semibold hover:bg-green-500 hover:text-white transition">
                List Your Property
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-2xl p-2"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-blue-600 space-y-4">
              <a href="#" className="block hover:text-blue-200">Buy</a>
              <a href="#" className="block hover:text-blue-200">Rent</a>
              <a href="#" className="block hover:text-blue-200">Sell</a>
              <a href="#" className="block hover:text-blue-200">Projects</a>
              <a href="#" className="block hover:text-blue-200">Virtual Tours</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[85vh] flex items-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://source.unsplash.com/random/1920x1080/?luxury,villa')` }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Premium properties • Secure transactions • Trusted since 2015
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-2">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center gap-4 px-6 py-5">
                <i className="fa-solid fa-location-dot text-green-600 text-2xl"></i>
                <input 
                  type="text" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Ntinda, Kololo, Bugolobi..." 
                  className="flex-1 outline-none text-lg text-zinc-700"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-green-600 hover:bg-green-700 px-12 py-5 rounded-3xl text-white font-semibold transition"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">Featured Properties</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map(p => (
              <div key={p.id} className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="font-semibold text-xl mb-1">{p.title}</div>
                  <div className="text-green-600">{p.location}</div>
                  <div className="text-3xl font-bold mt-4">{p.price}</div>
                  <div className="flex gap-5 mt-6 text-sm text-zinc-500">
                    {p.beds > 0 && <span>🛏 {p.beds}</span>}
                    {p.baths > 0 && <span>🛁 {p.baths}</span>}
                    <span>📏 {p.area}</span>
                  </div>
                  <button className="mt-8 w-full bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <i className="fa-solid fa-house text-3xl"></i>
            <span className="text-2xl font-bold">ANS Real Estate</span>
          </div>
          <p className="text-blue-200 mb-8">Ntinda, Kampala, Uganda</p>
          
          <div className="space-y-2 text-blue-200">
            <p>📞 +256 752 959 439</p>
            <p>✉️ info@ans.co.ug</p>
          </div>

          <p className="text-blue-300 text-sm mt-12">
            © 2026 ANS Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}