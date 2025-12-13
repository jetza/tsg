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
      { title: "Firma", href: "/o-nama/firma" },
      { title: "Zaposleni", href: "/o-nama/zaposleni" },
      { title: "Stručni konsultanti", href: "/o-nama/strucni-konsultanti" },
    ],
  },
  {
    title: "Delatnosti",
    href: "/delatnosti",
    submenu: [
      { title: "Ekspertize", href: "/delatnosti/ekspertize" },
      { title: "Simpozijumi", href: "/delatnosti/simpozijumi" },
      {
        title: "Edukacija",
        href: "/delatnosti/edukacija",
        submenu: [
          {
            title: "Obuka za bezbedno učestvovanje u saobraćaju",
            href: "/delatnosti/edukacija/obuka-za-bezbedno-ucestvovanje",
          },
          {
            title: "Obuka za upotrebu programa PC Crash",
            href: "/delatnosti/edukacija/obuka-pc-crash",
          },
        ],
      },
      { title: "Projekti", href: "/delatnosti/projekti" },
    ],
  },
  { title: "Registrovani korisnici", href: "/registrovani-korisnici" },
  {
    title: "Dokumenta",
    href: "/dokumenta",
    submenu: [
      {
        title: "Srbija",
        href: "/dokumenta/srbija",
        submenu: [
          { title: "Zakoni", href: "/dokumenta/srbija/zakoni" },
          { title: "Podzakonska akta", href: "/dokumenta/srbija/podzakonska-akta" },
        ],
      },
      {
        title: "Crna Gora",
        href: "/dokumenta/crna-gora",
        submenu: [
          { title: "Zakoni", href: "/dokumenta/crna-gora/zakoni" },
          { title: "Podzakonska akta", href: "/dokumenta/crna-gora/podzakonska-akta" },
          {
            title: "Ukoliko putujete automobilom u Crnu Goru",
            href: "/dokumenta/crna-gora/putovanje-automobilom",
          },
        ],
      },
      {
        title: "BiH",
        href: "/dokumenta/bih",
        submenu: [
          { title: "Zakoni", href: "/dokumenta/bih/zakoni" },
          { title: "Podzakonska akta", href: "/dokumenta/bih/podzakonska-akta" },
        ],
      },
      { title: "EU", href: "/dokumenta/eu" },
      { title: "Hrvatska", href: "/dokumenta/hrvatska" },
      { title: "Makedonija", href: "/dokumenta/makedonija" },
      {
        title: "Kazne za pojedine saobraćajne prekršaje u zemljama Evrope",
        href: "/dokumenta/kazne-evropa",
      },
      {
        title: "Zimska oprema u zemljama Evrope",
        href: "/dokumenta/zimska-oprema-evropa",
      },
      { title: "Stručna literatura", href: "/dokumenta/strucna-literatura" },
      { title: "XV Simpozijum", href: "/dokumenta/xv-simpozijum" },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(
    null
  );

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
    if (openSubmenu !== title) {
      setOpenNestedSubmenu(null); // Close nested when switching parent
    }
  };

  const toggleNestedSubmenu = (title: string) => {
    setOpenNestedSubmenu(openNestedSubmenu === title ? null : title);
  };

  const renderSubmenu = (items: MenuItem[], level: number = 0) => {
    return items.map((subitem) => (
      <li key={subitem.title}>
        {subitem.submenu ? (
          <>
            <button
              onClick={() => toggleNestedSubmenu(subitem.title)}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-primary-400 transition-colors text-sm"
            >
              <span>{subitem.title}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openNestedSubmenu === subitem.title ? "rotate-180" : ""
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
              {openNestedSubmenu === subitem.title && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-4 mt-2 space-y-1 overflow-hidden"
                >
                  {renderSubmenu(subitem.submenu, level + 1)}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        ) : (
          <Link
            href={subitem.href}
            className="block px-4 py-2 rounded-lg hover:bg-primary-400 transition-colors text-sm"
            onClick={() => setIsOpen(false)}
          >
            {subitem.title}
          </Link>
        )}
      </li>
    ));
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
                              {renderSubmenu(item.submenu)}
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
