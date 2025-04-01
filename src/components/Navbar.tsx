
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Reviews", path: "/reviews" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/aeedb6ef-0421-4a9b-a1c5-4c10e0e3b97d.png" 
              alt="Relish Physiotherapy Logo" 
              className="h-12 mr-2" 
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-base font-medium transition-colors hover:text-relish-600",
                  isActive ? "text-relish-600" : "text-muted-foreground"
                )
              }
            >
              {link.title}
            </NavLink>
          ))}
          <a href="https://wa.me/7601026596">
            <Button className="bg-relish-600 hover:bg-relish-700">Book Appointment</Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium py-2 transition-colors hover:text-relish-600",
                    isActive ? "text-relish-600" : "text-muted-foreground"
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
            <a href="https://wa.me/7601026596" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-relish-600 hover:bg-relish-700 w-full">Book Appointment</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
