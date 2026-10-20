import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaFacebook as Facebook,
} from "react-icons/fa";
import logoImg from "../assets/logo.png";

const footerSections = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Electronics", href: "/categories/electronics" },
      { label: "Fashion", href: "/categories/fashion" },
      { label: "Home & Living", href: "/categories/home-living" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    Icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    Icon: Youtube,
  },
];

function FooterSection({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 md:border-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-slate-900 md:cursor-default md:py-0"
      >
        {title}

        <ChevronDown
          size={16}
          className={`transition-transform md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        className={`space-y-2 pb-3 text-sm md:mt-4 md:block md:space-y-3 md:pb-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              to={href}
              className="text-slate-500 transition-colors hover:text-emerald-700"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        {/* Main footer grid */}
        <div className="grid gap-8 md:grid-cols-5 md:gap-10">
          {/* Brand section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logoImg}
                alt="UpForSell"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Better products. Brighter days.
            </p>

            {/* Social links */}
            <div className="mt-5">
              <p className="mb-3 text-sm font-semibold text-slate-800">
                Follow Us
              </p>

              <div className="flex items-center gap-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-700 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* All three sections belong inside the grid */}
          {footerSections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Copyright and legal links */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} UpForSell. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="transition-colors hover:text-emerald-700"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-emerald-700"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
