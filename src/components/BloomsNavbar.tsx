import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { name: "About US", href: "/about" },
  { name: "Shorts", href: "/shorts" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" }, // Added Contact link
];

export default function BloomsNavbar() {
  return (
    <nav className="w-full bg-transparent px-6 py-4 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            //src="/blooms-academy/c0a6eb07-68aa-43c7-b9a4-54bbe1316a6f.png"
            src="/blooms-academy/c0a6eb07-68aa-4126-9e23-bf0340530e47.png"
            alt="Tuluk and Blooms Academy Logo"
            className="h-11 w-auto object-contain bg-white rounded shadow-md max-w-[165px] px-2 py-1"
          />
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        {/* Render About US first */}
        <Link key={menuItems[0].name} to={menuItems[0].href} className="text-base font-medium hover:text-primary transition">
          {menuItems[0].name}
        </Link>

        {/* Programmes Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="text-base font-medium hover:text-primary transition flex items-center cursor-pointer">
              Programmes
              <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 6"><path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-[100]">
            <DropdownMenuItem asChild>
              <Link to="/programmes/training">Training Programmes</Link>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Skill Development Programmes</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white z-[101]">
                  <DropdownMenuItem asChild>
                    <Link to="/programmes/skill/hair-dressing-women">Hair Dressing and Beautician (Women)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/programmes/skill/hair-dressing-men">Hair Dressing and Beautician (Men)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/programmes/skill/bakery-cake-making">Bakery and Cake Making</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/programmes/skill/photoshop-coroldraw">Photoshop and CorolDRAW Training</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Our Products Link (replaces dropdown) */}
        <Link to="/products" className="text-base font-medium hover:text-primary transition">
          Our Products
        </Link>

        {/* Render the rest of the menu items */}
        {/* Updated slice to include the new Contact link */}
        {menuItems.slice(1).map((item) => (
          <Link key={item.name} to={item.href} className="text-base font-medium hover:text-primary transition">
            {item.name}
          </Link>
        ))}

        {/* CPAQ Test Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-accent/50 text-primary px-4 py-2 rounded-lg border font-medium shadow hover:bg-primary/10 transition flex items-center">
              CPAQ Test
              <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 10 6"><path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-[100]">
            <DropdownMenuItem asChild>
              <Link to="/exam-updates">Exam Updates</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/mock-test">Mock Test</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/college-info">College Info</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/downloads">Downloads</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/cpaq-instructions">CPAQ Test</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Mobile Hamburger */}
      <div className="flex lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-primary focus:outline-none"><Menu className="w-6 h-6" /></button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-[100] min-w-[200px] mr-4 mt-2 p-0">
            {/* Render About US first in mobile */}
            <DropdownMenuItem asChild key={menuItems[0].name}>
              <Link to={menuItems[0].href} className="block w-full px-4 py-2 text-base hover:bg-primary/10">
                {menuItems[0].name}
              </Link>
            </DropdownMenuItem>

            {/* Programmes Mobile Dropdown */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="block w-full px-4 py-2 text-base hover:bg-primary/10">
                <span>Programmes</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white z-[101]">
                  <DropdownMenuItem asChild>
                    <Link to="/programmes/training">Training Programmes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="block w-full px-4 py-2 text-base hover:bg-primary/10">
                      <span>Skill Development Programmes</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-white z-[102]">
                        <DropdownMenuItem asChild>
                          <Link to="/programmes/skill/hair-dressing-women">Hair Dressing and Beautician (Women)</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/programmes/skill/hair-dressing-men">Hair Dressing and Beautician (Men)</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/programmes/skill/bakery-cake-making">Bakery and Cake Making</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/programmes/skill/photoshop-coroldraw">Photoshop and CorolDRAW Training</Link>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            {/* Our Products Mobile Link (replaces dropdown) */}
            <DropdownMenuItem asChild>
              <Link to="/products" className="block w-full px-4 py-2 text-base hover:bg-primary/10">
                Our Products
              </Link>
            </DropdownMenuItem>

            {/* Render the rest of the menu items in mobile */}
            {/* Updated slice to include the new Contact link */}
            {menuItems.slice(1).map((item) => (
              <DropdownMenuItem asChild key={item.name}>
                <Link to={item.href} className="block w-full px-4 py-2 text-base hover:bg-primary/10">
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuItem asChild>
              <div className="border-t my-1" />
            </DropdownMenuItem>
            {["Exam Updates", "Mock Test", "College Info", "Downloads", "CPAQ Test"].map((name) => (
              <DropdownMenuItem asChild key={name}>
                <Link
                  to={"/" + name.toLowerCase().replace(/ +/g, "-")}
                  className="block w-full px-4 py-2 text-base hover:bg-secondary/10"
                >
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}