"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/ogame.png" alt="GameStore" width={150} height={100} />
        </Link>

        <nav className="sidebar-nav">
          
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 5).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "gradient-black text-[#f5f5f5] shadow-[#121212]/30 shadow-lg"
                        : "text-[#f5f5f5]"
                    }`}
                  >
                    <Link href={link.href} className="sidebar-link">
                      <Image
                        src={link.imgurl}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(5).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "gradient-black text-[#f5f5f5] shadow-[#121212]/30 shadow-lg"
                        : "text-[#f5f5f5]"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.href}>
                      <Image
                        src={link.imgurl}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
        </nav>
        <SignedOut>
          <Button
            asChild
            className="button transition-all hover:bg-[#000000]/10 hover:shadow-inner gradient-black"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </aside>
  );
};

export default Sidebar;
