import Link from "next/link";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";

import MobileNavbar from "./MobileNavbar";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full border-b bg-background/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Socially App
            </Link>
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
