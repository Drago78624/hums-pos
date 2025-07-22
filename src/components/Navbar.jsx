import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo/Title */}
        <div className="font-bold text-lg">MyApp</div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/signin" className="hover:underline">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="hover:underline">
            Sign Up
          </NavLink>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col gap-4 pt-8">
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
              <NavLink to="/signin" className="hover:underline">
                Sign In
              </NavLink>
              <NavLink to="/signup" className="hover:underline">
                Sign Up
              </NavLink>
              <Button variant="outline">Sign Up</Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
