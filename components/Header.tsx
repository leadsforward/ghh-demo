"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

// Primary navigation - always visible
const primaryNavigation = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Our Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// Secondary navigation - in hamburger menu
const secondaryNavigation = [
  { name: "About Us", href: "/about" },
  { name: "Areas Served", href: "/areas-served" },
  { name: "Financing", href: "/financing" },
  { name: "Resources", href: "/resources" },
];

const services = [
  { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { name: "Whole-Home Remodeling", href: "/services/whole-home-remodeling" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    // Use passive listener for performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen || isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isHamburgerOpen]);

  const phoneNumber = "(913) 379-2423";

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          prefersReducedMotion ? "transition-none" : ""
        } ${
          isScrolled
            ? "px-4 sm:px-6 lg:px-8 pt-3 lg:pt-4"
            : "px-0"
        }`}
        style={{
          transitionTimingFunction: "ease-out",
        }}
      >
        <nav
          className={`mx-auto transition-all duration-300 ${
            prefersReducedMotion ? "transition-none" : ""
          } ${
            isScrolled
              ? "max-w-[1200px] bg-white/95 backdrop-blur-[10px] rounded-2xl shadow-lg border border-neutral-200/50"
              : "w-full bg-white"
          }`}
          style={{
            transitionTimingFunction: "ease-out",
          }}
        >
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo - GHH */}
            <Link
              href="/"
              className="flex-shrink-0 group"
              aria-label="Gold Heart Homes"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="text-3xl font-serif font-bold text-neutral-900 group-hover:text-primary-700 transition-colors tracking-tight">
                    GHH
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Primary Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {primaryNavigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setIsServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setIsServicesOpen(false)
                  }
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-neutral-700 hover:text-neutral-900 font-medium text-sm transition-colors rounded-md hover:bg-neutral-50 relative group ${
                      item.name === "Services" ? "font-semibold" : ""
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="inline-block w-3 h-3 ml-1 transform group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>
                  {item.hasDropdown && isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 animate-fade-in z-50">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors rounded-md mx-2"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Side - Phone, Hamburger, CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center text-neutral-700 hover:text-primary-700 font-semibold text-sm transition-colors px-3 py-2 rounded-md hover:bg-neutral-50 whitespace-nowrap"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                {phoneNumber}
              </a>

              {/* Hamburger Menu for Secondary Items */}
              <div className="relative">
                <button
                  onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                  className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors"
                  aria-label="More menu"
                  aria-expanded={isHamburgerOpen}
                >
                  <Menu className="w-5 h-5" />
                </button>

                {isHamburgerOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsHamburgerOpen(false)}
                    ></div>
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 z-50 animate-fade-in">
                      {secondaryNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors rounded-md mx-2"
                          onClick={() => setIsHamburgerOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/contact"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-700 transition-colors whitespace-nowrap min-h-[44px] flex items-center shadow-sm hover:shadow-md"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="text-primary-600 font-semibold text-sm whitespace-nowrap px-2 py-1"
                aria-label="Call us"
              >
                {phoneNumber}
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-neutral-900 rounded-md hover:bg-neutral-50 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              {/* Mobile CTA - Immediately Visible */}
              <Link
                href="/contact"
                className="block w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold text-center mb-6 hover:bg-primary-700 transition-all active:scale-95 shadow-lg min-h-[44px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Link>

              {/* Divider */}
              <div className="border-t border-neutral-200 mb-4"></div>

              {/* Primary Navigation */}
              {primaryNavigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors ${
                      item.name === "Services" ? "font-semibold" : ""
                    }`}
                    onClick={() => {
                      if (!item.hasDropdown) setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Divider */}
              <div className="border-t border-neutral-200 my-4"></div>

              {/* Secondary Navigation */}
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-lg">
        <Link
          href="/contact"
          className="block w-full bg-primary-600 text-white px-6 py-4 text-center font-semibold hover:bg-primary-700 transition-all active:scale-95 min-h-[44px] flex items-center justify-center"
        >
          Schedule Consultation
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
