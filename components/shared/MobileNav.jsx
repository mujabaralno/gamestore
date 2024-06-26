"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/ogame.png"
          alt="logo"
          width={150}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/svg/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image 
                  src="/ogame.png"
                  alt="logo"
                  width={150}
                  height={23}
                />

              <ul className="header-nav_elements">
              {navLinks.map((link, i) => {
                const isActive = link.route === pathname

                return (
                  <li 
                  className={`sidebar-nav_element group ${
                    isActive
                      ? "gradient-black text-[#f5f5f5] shadow-[#121212]/30 shadow-lg"
                      : "text-[#f5f5f5]"
                  }`}
                    key={i}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.href}>
                      <Image 
                        src={link.imgurl}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
            <Button asChild className="button gradient-black bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav