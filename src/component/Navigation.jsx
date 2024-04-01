import { Link } from "react-router-dom";
import logoKecil from "../assets/logokecil.png";
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Example() {
  return (
    <header className="bg-abu sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <a href="#">
            <span className="sr-only">Reza</span>
            <div className="flex gap-4 items-center justify-center">
              <img className="h-10 w-auto" src={logoKecil} alt="" />
              <span className="text-hijau font-bold text-lg">Fachreza</span>
            </div>
          </a>
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link) => (
              <Link
                to={link.href}
                offset={-100}
                key={link.href}
                href={link.href}
                onClick={scrollToTop}
                className="text-lg font-bold text-hijau hover:text-orange"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-green-500 hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
