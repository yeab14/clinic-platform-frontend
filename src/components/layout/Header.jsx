
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Search,
  User,
  Bell,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Doctors", path: "/doctors" },
    { label: "Appointment", path: "/appointment" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      
      <div className="w-full bg-gradient-to-r from-primary-900 to-primary-400 text-white backdrop-blur-md">
        <div className="container-custom px-6">
          <div className="flex items-center justify-between h-10">

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 opacity-90">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mon - Sat: 8AM - 8PM</span>
              </div>
              <div className="hidden md:flex items-center gap-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Medical Street</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <span className="text-sm">Emergency: (123) 456-7890</span>
              </div>
              <button className="hidden lg:flex items-center gap-2 hover:opacity-80 transition">
                <Bell className="w-4 h-4" />
                <span className="text-sm">Notifications</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-primary-100 to-white backdrop-blur-xl
        ${scrolled ? "shadow-xl py-2" : "py-4"}
      `}
      >
        <div className="container-custom">

          <div className="flex items-center justify-between h-25">

      
            <Link to="/" className="flex items-center gap-4 group relative">

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative"
              >
               
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/40 to-primary-800/40 blur-xl"
                />

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <span className="text-white text-3xl font-black">+</span>
                  </div>
                </div>
              </motion.div>

      
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent tracking-tight">
                  ClinicCare
                </h1>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Shield className="w-4 h-4 text-primary-600" />
                  Premium Healthcare
                </p>
              </div>
            </Link>

          
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                    relative px-5 py-3 rounded-lg font-medium transition-all
                    ${
                      active
                        ? "text-primary-700 bg-primary-50 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                  >
                    {item.label}

          
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 rounded-t-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>


            <div className="flex items-center gap-4">

           

      
              <div className="hidden xl:flex items-center gap-3 px-4 py-2.5 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Emergency</p>
                  <a className="font-bold text-gray-800">(123) 456-7890</a>
                </div>
              </div>

          
              <Link
                to="/appointment"
                className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium shadow-md hover:shadow-lg transition"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>

            
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-gray-50"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

  
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="hidden lg:block mt-4 overflow-hidden"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-14 pr-4 py-4 bg-white/70 border border-gray-200 rounded-xl shadow-sm backdrop-blur-md focus:ring-2 focus:ring-primary-500"
                    placeholder="Search doctors, services, symptoms..."
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

   
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="lg:hidden fixed top-0 right-0 w-80 h-full bg-white/80 backdrop-blur-xl shadow-xl z-[999] p-6"
          >
            <div className="flex flex-col gap-6">

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium ${
                    location.pathname === item.path
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

        
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
