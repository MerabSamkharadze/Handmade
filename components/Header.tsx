import React from "react";
import { Link } from "@/i18n/routing";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Handmade</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="/products" className="hover:text-gray-200 transition">
            Products
          </Link>
          <a href="/api/auth/login">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
