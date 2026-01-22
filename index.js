import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Zap, Shield, Users, Sparkles, ChevronRight, Menu, X } from 'lucide-react';

export default function QuickieLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Amina K.",
      location: "Nairobi",
      text: "Met my person within a week! The vibe here is different - real Kenyans, real connections.",
      image: "👩🏾"
    },
    {
      name: "Brian M.",
      location: "Mombasa",
      text: "Finally, a dating app that gets Kenyan culture. No fake profiles, just genuine people.",
      image: "👨🏿"
    },
    {
      name: "Wanjiru N.",
      location: "Kisumu",
      text: "Love how easy it is to find someone who shares my interests. Quickie is the real deal!",
      image: "👩🏾‍🦱"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
                <Heart className="text-white" size={20} fill="white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                Quickie
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Features</a>
              <a href="#how" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Success Stories</a>
              <button className="px-6 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-rose-600 font-medium">Features</a>
              <a href="#how" className="block text-gray-700 hover:text-rose-600 font-medium">How It Works</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-rose-600 font-medium">Success Stories</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 rounded-full text-sm font-semibold">
                  🇰🇪 Kenya's #1 Dating App
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-pulse">
                  Perfect Match
                </span>
                in Kenya
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with real Kenyans looking for genuine relationships. From Nairobi to Mombasa, find love that's authentically Kenyan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center">
                  Start Your Journey
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-rose-500 text-rose-600 rounded-full font-bold text-lg hover:bg-rose-50 transition-all">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-800">50K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">2,500+</div>
                  <div className="text-sm text-gray-600">Matches Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">1,200+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-4xl">
                      👨🏿
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">David, 28</h3>
                      <p className="text-gray-600">Software Developer • Nairobi</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    "Loves hiking, nyama choma weekends, and good konversation. Looking for someone to explore Kenya with! 🏔️"
                  </p>

                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">Travel</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Foodie</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Adventure</span>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button className="flex-1 py-3 border-2 border-gray-300 rounded-full text-gray-600 hover:border-rose-500 hover:text-rose-500 transition-all transform hover:scale-105">
                      ✕ Pass
                    </button>
                    <button className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center">
                      <Heart fill="white" size={20} className="mr-2" />
                      Like
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Quickie?</h2>
            <p className="text-xl text-gray-600">Designed for Kenyans, by Kenyans</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl hover:bg-gradient-to-br hover:from-rose-50 hover:to-orange-50 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Connections</h3>
              <p className="text-gray-600 leading-relaxed">
                Match with people in your city instantly. Real-time notifications when someone likes you back.
              </p>
            </div>

            <div className="group p-8 rounded-2xl hover:bg-gradient-to-br hover:from-rose-50 hover:to-orange-50 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safe & Verified</h3>
              <p className="text-gray-600 leading-relaxed">
                Every profile is verified. We prioritize your safety with photo verification and secure messaging.
              </p>
            </div>

            <div className="group p-8 rounded-2xl hover:bg-gradient-to-br hover:from-rose-50 hover:to-orange-50 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Our algorithm connects you with compatible people based on interests, location, and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-rose-100">Real people, real love stories</p>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-3xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-white w-8' : 'bg-rose-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Sparkles className="absolute -top-8 left-1/4 text-rose-400 animate-pulse" size={32} />
            <Sparkles className="absolute -top-4 right-1/3 text-orange-400 animate-pulse" size={24} />
            
            <h2 className="text-5xl font-bold mb-6">
              Ready to Find Love?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of Kenyans who have found their perfect match on Quickie
            </p>
            
            <button className="px-12 py-5 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center">
              Get Started Free
              <Heart className="ml-3" fill="white" size={24} />
            </button>

            <p className="mt-6 text-gray-500">No credit card required • Free to join</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={20} fill="white" />
                </div>
                <span className="text-2xl font-bold">Quickie</span>
              </div>
              <p className="text-gray-400">Find love, the Kenyan way.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Quickie. Made with ❤️ in Kenya</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
