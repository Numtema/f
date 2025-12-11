import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">face</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-text-main">
              FaceàFace
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-text-secondary hover:text-primary'
              }`}
            >
              Home
            </Link>
             <Link
              to="/demo"
              className={`text-sm font-medium transition-colors ${
                isActive('/demo') ? 'text-primary' : 'text-text-secondary hover:text-primary'
              }`}
            >
              Demo
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive('/pricing') ? 'text-primary' : 'text-text-secondary hover:text-primary'
              }`}
            >
              Pricing
            </Link>
           
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="flex h-10 items-center px-4 text-sm font-semibold text-text-main hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="h-10 flex items-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main hover:text-primary"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-border bg-white px-4 py-6 space-y-4 shadow-xl">
           <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-text-secondary hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/demo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-text-secondary hover:text-primary"
          >
            Demo
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-text-secondary hover:text-primary"
          >
            Pricing
          </Link>
          <div className="pt-4 border-t border-neutral-border flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-text-main border border-neutral-border rounded-lg"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-lg shadow-primary/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
