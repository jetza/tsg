"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: "Početna", href: "/" },
  {
    title: "O Nama",
    href: "/o-nama",
    submenu: [
      { title: "Ko smo mi", href: "/o-nama/ko-smo-mi" },
      { title: "Tim", href: "/o-nama/tim" },
    ],
  },
  {
    title: "Delatnosti",
    href: "/delatnosti",
    submenu: [
      { title: "Projekti", href: "/delatnosti/projekti" },
      { title: "Ekspertize", href: "/delatnosti/ekspertize" },
      { title: "Edukacija", href: "/delatnosti/edukacija" },
    ],
  },
  { title: "Registrovani korisnici", href: "/registrovani-korisnici" },
  {
    title: "Dokumenta",
    href: "/dokumenta",
    submenu: [
      { title: "Zakonska regulativa", href: "/dokumenta/zakonska-regulativa" },
      { title: "Standardi", href: "/dokumenta/standardi" },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary-500 text-white rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{
          x:
            isOpen ||
            (typeof window !== "undefined" && window.innerWidth >= 768)
              ? 0
              : -300,
        }}
        className={`fixed left-0 top-0 h-screen w-64 bg-primary-500 text-white shadow-lg z-40 overflow-y-auto ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <h1 className="text-2xl font-heading font-bold">TSG Serbia</h1>
          </Link>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <div>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.title)}
                          className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-primary-400 transition-colors"
                        >
                          <span>{item.title}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              openSubmenu === item.title ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.title && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subitem) => (
                                <li key={subitem.title}>
                                  <Link
                                    href={subitem.href}
                                    className="block px-4 py-2 rounded-lg hover:bg-primary-400 transition-colors text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subitem.title}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 rounded-lg hover:bg-primary-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
