"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Color palette from lightest to darkest (better visibility on hover)
const menuColors = [
  "#F0F4F8", // primary-50 (lightest)
  "#B0BEC5", // primary-100
  "#78909C", // primary-200
  "#546E7A", // primary-300
  "#263238", // primary-500 (darkest)
];

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
          {
            title: "Podzakonska akta",
            href: "/dokumenta/srbija/podzakonska-akta",
          },
        ],
      },
      {
        title: "Crna Gora",
        href: "/dokumenta/crna-gora",
        submenu: [
          { title: "Zakoni", href: "/dokumenta/crna-gora/zakoni" },
          {
            title: "Podzakonska akta",
            href: "/dokumenta/crna-gora/podzakonska-akta",
          },
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
          {
            title: "Podzakonska akta",
            href: "/dokumenta/bih/podzakonska-akta",
          },
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
  const pathname = usePathname();

  // CSS for hover effects that can't be done with inline styles
  const hoverStyles = `
    .menu-link:hover {
      background-size: 100% 100% !important;
    }
  `;

  // Close all submenus when on home page or pages without submenus
  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/registrovani-korisnici" ||
      pathname === "/blog" ||
      pathname === "/kontakt"
    ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setOpenSubmenu(null);
      setOpenNestedSubmenu(null);
    }
  }, [pathname]);

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
      <li key={subitem.title} className="relative">
        {subitem.submenu ? (
          <>
            <button
              onClick={() => toggleNestedSubmenu(subitem.title)}
              className="peer w-full flex items-center justify-between px-4 py-2 hover:bg-primary-400 transition-colors text-sm text-white font-light relative"
            >
              <span>{subitem.title}</span>
              {/* Bottom border for submenu button */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-primary-100 transition-all duration-1000 ${
                  openNestedSubmenu === subitem.title
                    ? "w-full"
                    : "w-0 peer-hover:w-full"
                }`}
              />
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
            className="block px-4 py-2 hover:bg-primary-400 transition-colors text-sm text-white font-light relative group"
            onClick={() => setIsOpen(false)}
          >
            {subitem.title}
            {/* Bottom border for submenu link */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-100 transition-all duration-1000 group-hover:w-full" />
          </Link>
        )}
      </li>
    ));
  };

  return (
    <>
      <style>{hoverStyles}</style>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary-500 text-white border-2 border-[#546e7a]"
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
        className={`fixed left-0 top-0 h-screen w-64 bg-primary-500 text-white  z-40 overflow-y-auto ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <h1 className="text-2xl font-heading font-bold">TSG Serbia</h1>
          </Link>

          <nav>
            <ul className="space-y-2 menu-hover-fill">
              {menuItems.map((item, index) => (
                <li
                  key={item.title}
                  className="relative"
                  style={
                    {
                      "--menu-link-active-color":
                        menuColors[index % menuColors.length],
                    } as React.CSSProperties
                  }
                >
                  <div>
                    {item.submenu ? (
                      <>
                        <div className="relative group">
                          <button
                            onClick={() => toggleSubmenu(item.title)}
                            className="menu-link w-full flex items-center justify-between px-4 py-2 hover:bg-primary-400 transition-colors relative overflow-hidden"
                            data-text={item.title}
                            style={{
                              backgroundImage: `linear-gradient(var(--menu-link-active-color) 0 100%)`,
                              backgroundPosition: "left center",
                              backgroundSize: "0px 100%",
                              backgroundRepeat: "no-repeat",
                              color: "transparent",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              transition: "background-size 0.45s 0.04s",
                            }}
                          >
                            <span className="uppercase font-light text-base relative">
                              <span className="absolute inset-0 text-white -z-10">
                                {item.title}
                              </span>
                              {item.title}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform text-white ${
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
                          {/* Bottom border indicator for submenu parent */}
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-[var(--menu-link-active-color)] transition-all duration-1000 ${
                              openSubmenu === item.title
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          />
                        </div>
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
                      <div className="relative group">
                        <Link
                          href={item.href}
                          className="menu-link block px-4 py-2 hover:bg-primary-400 transition-colors relative overflow-hidden"
                          onClick={() => setIsOpen(false)}
                          data-text={item.title}
                          style={
                            pathname === item.href
                              ? {
                                  backgroundImage: `linear-gradient(var(--menu-link-active-color) 0 100%)`,
                                  backgroundPosition: "left center",
                                  backgroundSize: "100% 100%",
                                  backgroundRepeat: "no-repeat",
                                  color: "transparent",
                                  backgroundClip: "text",
                                  WebkitBackgroundClip: "text",
                                  transition: "background-size 0.45s 0.04s",
                                }
                              : {
                                  backgroundImage: `linear-gradient(var(--menu-link-active-color) 0 100%)`,
                                  backgroundPosition: "left center",
                                  backgroundSize: "0px 100%",
                                  backgroundRepeat: "no-repeat",
                                  color: "transparent",
                                  backgroundClip: "text",
                                  WebkitBackgroundClip: "text",
                                  transition: "background-size 0.45s 0.04s",
                                }
                          }
                        >
                          <span className="uppercase font-light text-base relative">
                            <span className="absolute inset-0 text-white -z-10">
                              {item.title}
                            </span>
                            {item.title}
                          </span>
                        </Link>
                        {/* Bottom border indicator for regular links */}
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 bg-[var(--menu-link-active-color)] transition-all duration-1000 ${
                            pathname === item.href
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </div>
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
