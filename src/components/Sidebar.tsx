"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLocale } from "@/hooks/useLocale";
import {
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineUser,
  HiClipboardDocumentList,
} from "react-icons/hi2";

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
  icon?: React.ReactNode;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
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
      {
        title: "Edukacije",
        href: "/delatnosti/edukacije",
        submenu: [
          {
            title: "Obuka za bezbedno učestvovanje u saobraćaju",
            href: "/delatnosti/edukacije/obuka-za-bezbedno-ucestvovanje",
          },
          {
            title: "Obuka za upotrebu programa PC Crash",
            href: "/delatnosti/edukacije/obuka-pc-crash",
          },
        ],
      },
      { title: "Ekspertize", href: "/delatnosti/ekspertize" },
      { title: "Projekti", href: "/delatnosti/projekti" },
      { title: "Simpozijumi", href: "/delatnosti/simpozijumi" },
    ],
  },
  {
    title: "Dokumenta",
    href: "/dokumenta",
    submenu: [
      {
        title: "Srbija",
        href: "/dokumenta/srbija",
        icon: <HiClipboardDocumentList className="w-4 h-4" />,
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
        icon: <HiClipboardDocumentList className="w-4 h-4" />,
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
        icon: <HiClipboardDocumentList className="w-4 h-4" />,
        submenu: [
          { title: "Zakoni", href: "/dokumenta/bih/zakoni" },
          {
            title: "Podzakonska akta",
            href: "/dokumenta/bih/podzakonska-akta",
          },
        ],
      },
      {
        title: "Hrvatska",
        href: "/dokumenta/hrvatska",
        icon: <HiClipboardDocumentList className="w-4 h-4" />,
      },
      {
        title: "Makedonija",
        href: "/dokumenta/makedonija",
        icon: <HiClipboardDocumentList className="w-4 h-4" />,
      },
      {
        title: "Evropa i region",
        href: "/dokumenta/evropa",
        icon: <HiOutlineGlobeAlt className="w-4 h-4" />,
      },
      {
        title: "Simpozijumi",
        href: "/dokumenta/simpozijumi",
        icon: <HiOutlineBookOpen className="w-4 h-4" />,
      },
    ],
  },
  { title: "Saveti", href: "/saveti" },
  { title: "Korisni linkovi", href: "/korisni-linkovi" },
  { title: "Mediji", href: "/mediji" },
  { title: "Blog", href: "/blog" },
  { title: "Kontakt", href: "/kontakt" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(
    null,
  );
  const pathname = usePathname();
  const { locale, switchLocale } = useLocale();

  // Close all submenus when on home page or pages without submenus
  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/blog" ||
      pathname === "/saveti" ||
      pathname === "/korisni-linkovi" ||
      pathname === "/mediji" ||
      pathname === "/kontakt" ||
      pathname === "/login"
    ) {
      const timer = setTimeout(() => {
        setOpenSubmenu(null);
        setOpenNestedSubmenu(null);
      }, 0);
      return () => clearTimeout(timer);
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
              <span className="flex items-center gap-2">
                {subitem.icon && <span>{subitem.icon}</span>}
                {subitem.title}
              </span>
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
            <span className="flex items-center gap-2">
              {subitem.icon && <span>{subitem.icon}</span>}
              {subitem.title}
            </span>
            {/* Bottom border for submenu link */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-100 transition-all duration-1000 group-hover:w-full" />
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
        initial={{ x: -320 }}
        animate={{
          x:
            isOpen ||
            (typeof window !== "undefined" && window.innerWidth >= 768)
              ? 0
              : -320,
        }}
        className={`fixed left-0 top-0 h-screen w-80 bg-primary-500 text-white  z-40 overflow-y-auto ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <Image
              src="/logo/tria.svg"
              alt="TSG Logo"
              width={96}
              height={80}
              className="mx-auto"
            />
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

            {/* Language Switcher and Login at the bottom - Mobile only */}
            <div className="mt-8 pt-6 border-t border-primary-400 space-y-3 md:hidden">
              <button
                onClick={switchLocale}
                className="w-full px-4 py-2 text-white hover:bg-primary-400 transition-all duration-300 text-left font-light text-sm flex items-center gap-2"
              >
                <HiOutlineGlobeAlt className="w-4 h-4" />
                {locale === "sr" ? "EN" : "SR"}
              </button>

              <Link
                href="/login"
                className="w-full px-4 py-2 text-white hover:bg-primary-400 transition-all duration-300 text-left font-light text-sm flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <HiOutlineUser className="w-4 h-4" />
                Login
              </Link>
            </div>
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
