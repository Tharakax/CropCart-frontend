import React, { useState, useEffect } from 'react';
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import HomePage from '../pages/homePage.jsx';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FaLeaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-800">CropCart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-8">
              <NavLink 
                to="/home" 
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`
                }
              >
                Shop
              </NavLink>
              <NavLink 
                to="/farmers" 
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`
                }
              >
                Our Farmers
              </NavLink>
              <NavLink 
                to="/recipes" 
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`
                }
              >
                Recipes
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`
                }
              >
                About
              </NavLink>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center">
            {/* Search Bar - Desktop */}
            <div className="hidden md:block mr-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Search for organic produce..."
                  type="search"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <FiHeart className="h-6 w-6" />
              </button>
              <button
              onClick={() => Navigate('/cart')}
              className="p-1 rounded-full text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 relative">
                <FiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-1 rounded-full text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <FiUser className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                {isMobileMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {/* Search Bar - Mobile */}
          <div className="px-4 py-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Search for organic produce..."
                type="search"
              />
            </div>
          </div>
          
          <NavLink 
            to="/home" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/farmers" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Farmers
          </NavLink>
          <NavLink 
            to="/recipes" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Recipes
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <div className="border-t border-gray-200 pt-4 pb-2">
            <div className="flex items-center px-5 space-x-4">
              <button className="p-1 rounded-full text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <FiUser className="h-6 w-6" />
                <span className="sr-only">Account</span>
              </button>
              <button className="p-1 rounded-full text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <FiHeart className="h-6 w-6" />
                <span className="sr-only">Wishlist</span>
              </button>
              <button className="p-1 rounded-full text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 relative">
                <FiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Cart</span>
              </button>
            </div>
          </div>
        </div>

            


      </div>
    </nav>
  );
};

export default Navigation;