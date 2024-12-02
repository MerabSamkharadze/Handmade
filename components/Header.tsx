"use client";

import React from "react";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const changeLanguage = (locale: string) => {
    setIsOpen(false);

    router.push(`/${locale}${pathname.slice(3)}`);
  };
  const { user } = useUser();
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
          {user ? (
            <a href="/api/auth/logout">Logout</a>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </nav>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black text-white p-2 rounded-md border text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {pathname.includes("/ka") ? "ქარ" : "Eng"}
          </button>
          {isOpen && (
            <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40 overflow-hidden">
              <button
                onClick={() => changeLanguage("en")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ka")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                ქართული
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
