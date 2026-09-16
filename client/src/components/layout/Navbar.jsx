import {Link, NavLink} from "react-router-dom";
import {Menu, X, Wrench, UserCircle} from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";

function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    const navLinkStyles = ({isActive}) => `text-sm font-medium transition-colors ${isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`;

    return(
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* logo */}
                    <Link to="/" className="flex items-center gap-2" onClick={()=> setMobileMenuOpen(false)}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Wrench size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                    Home<span className="text-blue-600">Serve</span>
                    </span>
                    </Link>
                     {/* Desktop Navigation */}
                     <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>

            <NavLink to="/services" className={navLinkStyles}>
              Services
            </NavLink>

            <NavLink to="/providers" className={navLinkStyles}>
              Find Professionals
            </NavLink>
          </nav>
          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated ? (
            <>
            <span className="text-sm font-medium text-slate-600">
              Hi, {user.name}
            </span>

            <button
              onClick={logout}
              className="text-sm font-semibold text-slate-700 hover:text-red-600"
            >
              Logout
            </button>
          </>
          ) : (
          <>
            <Link
              to="/login"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Login
            </Link>

            <Button to="/register">
              Get Started
            </Button>
          </>
          )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={navLinkStyles}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={navLinkStyles}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </NavLink>

              <NavLink
                to="/providers"
                className={navLinkStyles}
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Professionals
              </NavLink>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold"
                >
                  Login
                </Link>

                <Button
                  to="/register"
                  className="flex-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Button>
              </div>
            </nav>
          </div>
        )}
            </Container>
        </header>
    );
}

export default Navbar;