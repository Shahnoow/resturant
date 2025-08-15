import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 mt-12 bg-footerBg text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {/* Brand / QuickEat */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">FOODZY</h2>
          <p className="mb-4 text-sm md:text-base">
            The Best Restaurants in Your Home
          </p>
          <p className="max-w-lg text-sm md:text-base">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
            pretium quam.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 font-semibold text-lg md:text-xl">Menu</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Home</li>
            <li>About Us</li>
            <li>Restaurants</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 font-semibold text-lg md:text-xl">
            Contact Info
          </h3>
          <p className="text-sm md:text-base">
            1717 Harrison St, San Francisco, CA 94103, United States
          </p>
          <p className="text-sm md:text-base">foodzy@mail.net</p>
          <p className="text-sm md:text-base">+1 425 326 16 27</p>
        </div>
      </div>

      <div className="mt-8 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} QuickEat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
