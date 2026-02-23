import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import logoImg from "/CZ_NEW-Transparent.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and ensure menu fills screen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      // Reset expanded menu when closing
      setExpandedMenu(null);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  const isHome = location === "/";
  const navBackground = isHome
    ? scrolled
      ? "bg-black/95 backdrop-blur-md"
      : "bg-transparent"
    : "bg-black";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[50] transition-all duration-300 pointer-events-auto",
        navBackground
      )}
    >
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-primary" />

      <div className="container mx-auto px-4 h-20 flex items-center relative">
        {/* Left Navigation - Desktop */}
        <div className="hidden lg:flex items-center flex-1 relative z-[51]">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Events Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/events" title="Upcoming Events">
                      Next: CZ 92 at SNHU Arena
                    </ListItem>
                    <ListItem href="/fight-card" title="Fight Card">
                      View the full lineup
                    </ListItem>
                    <ListItem href="/vip" title="VIP Experience">
                      Exclusive access & premium seating
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Media Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  Media
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/media" title="Media Hub">
                      Featured Videos & Photos
                    </ListItem>
                    <ListItem href="/social" title="Social Hub">
                      Connect with us
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Store Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  Store
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/shop" title="All Products">
                      Shop Official Gear
                    </ListItem>
                    <ListItem href="/shop/kattarmania" title="Kattarmania">
                      Exclusive Collection
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Fighters Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  Fighters
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/champions" title="Latest Champions">
                      Results from CZ 90
                    </ListItem>
                    <ListItem href="/fighters/forms" title="Fighter Forms">
                      Fighter Documentation
                    </ListItem>
                    <ListItem href="/apply" title="Onboarding">
                      Fighter Application
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo - Desktop */}
        <Link
          href="/"
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[52] hover:scale-105 transition-transform"
        >
          <img
            src={logoImg}
            alt="Combat Zone"
            style={{ height: "56px", width: "90px", objectFit: "contain" }}
          />
        </Link>

        {/* Mobile Logo - Left aligned */}
        <Link href="/" className="lg:hidden flex items-center gap-2 text-white relative z-[51]">
          <img src={logoImg} alt="Combat Zone" className="h-10 w-10" />
          <span className="text-xl font-bold italic tracking-tighter font-[Chakra_Petch]">
            <span className="text-primary">COMBAT</span>ZONE
          </span>
        </Link>

        {/* Right Navigation - Desktop */}
        <div className="hidden lg:flex items-center justify-end flex-1 relative z-[51]">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Sponsors Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  Sponsors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/sponsors" title="Why Sponsor">
                      Brand identity & Audience
                    </ListItem>
                    <ListItem href="/contact" title="Contact Partnerships">
                      Partner with Combat Zone
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/about" title="About Combat Zone">
                      Mission Statement & Story
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[350px] bg-black border border-white/10">
                    <ListItem href="/contact" title="Contact Us">
                      Get in touch with our team
                    </ListItem>
                    <ListItem href="/newsletter" title="Email List">
                      Subscribe for updates & announcements
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Tickets Button */}
          <a
            href={TICKETMASTER_EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <Button className="bg-primary hover:bg-white hover:text-primary text-white font-bold uppercase tracking-wider px-6 rounded-none transition-all">
              Tickets
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden ml-auto relative z-[60]">
          <button
            className="text-white p-2 -mr-2 touch-manipulation pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed bg-black z-[55] overflow-y-auto"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            position: "fixed",
          }}
        >
          {/* Logo in the top bar area */}
          <div className="h-20 flex items-center justify-center border-b border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src={logoImg}
                alt="Combat Zone"
                style={{ height: "48px", width: "76px", objectFit: "contain" }}
              />
            </Link>
          </div>

          <div className="flex flex-col px-6 pt-6 pb-6">
            <div className="flex flex-col gap-2">
              {/* Events Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "events" ? null : "events")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Events
                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      expandedMenu === "events" && "rotate-180"
                    )}
                    size={20}
                  />
                </button>
                {expandedMenu === "events" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/events" onClick={() => setIsOpen(false)} isSubItem>
                      Upcoming Events
                    </MobileLink>
                    <MobileLink href="/fight-card" onClick={() => setIsOpen(false)} isSubItem>
                      Fight Card
                    </MobileLink>
                    <MobileLink href="/vip" onClick={() => setIsOpen(false)} isSubItem>
                      VIP Experience
                    </MobileLink>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "about" ? null : "about")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  About
                  <ChevronDown
                    className={cn("transition-transform", expandedMenu === "about" && "rotate-180")}
                    size={20}
                  />
                </button>
                {expandedMenu === "about" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/about" onClick={() => setIsOpen(false)} isSubItem>
                      About Combat Zone
                    </MobileLink>
                  </div>
                )}
              </div>

              {/* Sponsors Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "sponsors" ? null : "sponsors")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Sponsors
                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      expandedMenu === "sponsors" && "rotate-180"
                    )}
                    size={20}
                  />
                </button>
                {expandedMenu === "sponsors" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/sponsors" onClick={() => setIsOpen(false)} isSubItem>
                      Why Sponsor
                    </MobileLink>
                    <MobileLink href="/contact" onClick={() => setIsOpen(false)} isSubItem>
                      Contact Partnerships
                    </MobileLink>
                  </div>
                )}
              </div>

              {/* Media Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "media" ? null : "media")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Media
                  <ChevronDown
                    className={cn("transition-transform", expandedMenu === "media" && "rotate-180")}
                    size={20}
                  />
                </button>
                {expandedMenu === "media" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/media" onClick={() => setIsOpen(false)} isSubItem>
                      Media Hub
                    </MobileLink>
                    <MobileLink href="/social" onClick={() => setIsOpen(false)} isSubItem>
                      Social Hub
                    </MobileLink>
                  </div>
                )}
              </div>

              {/* Fighters Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "fighters" ? null : "fighters")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Fighters
                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      expandedMenu === "fighters" && "rotate-180"
                    )}
                    size={20}
                  />
                </button>
                {expandedMenu === "fighters" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/champions" onClick={() => setIsOpen(false)} isSubItem>
                      Latest Champions
                    </MobileLink>
                    <MobileLink href="/fighters/forms" onClick={() => setIsOpen(false)} isSubItem>
                      Fighter Forms
                    </MobileLink>
                    <MobileLink href="/apply" onClick={() => setIsOpen(false)} isSubItem>
                      Onboarding
                    </MobileLink>
                  </div>
                )}
              </div>

              {/* Store Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "store" ? null : "store")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Store
                  <ChevronDown
                    className={cn("transition-transform", expandedMenu === "store" && "rotate-180")}
                    size={20}
                  />
                </button>
                {expandedMenu === "store" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/shop" onClick={() => setIsOpen(false)} isSubItem>
                      All Products
                    </MobileLink>
                    <MobileLink href="/shop/kattarmania" onClick={() => setIsOpen(false)} isSubItem>
                      Kattarmania
                    </MobileLink>
                  </div>
                )}
              </div>

              {/* Contact Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "contact" ? null : "contact")}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Contact
                  <ChevronDown
                    className={cn(
                      "transition-transform",
                      expandedMenu === "contact" && "rotate-180"
                    )}
                    size={20}
                  />
                </button>
                {expandedMenu === "contact" && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/contact" onClick={() => setIsOpen(false)} isSubItem>
                      Contact Us
                    </MobileLink>
                    <MobileLink href="/newsletter" onClick={() => setIsOpen(false)} isSubItem>
                      Email List
                    </MobileLink>
                  </div>
                )}
              </div>
              <a
                href={TICKETMASTER_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-primary font-bold text-white uppercase mt-2 py-6 text-base touch-manipulation">
                  GET TICKETS
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

interface ListItemProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
}

const ListItem = ({ className, title, children, href }: ListItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-primary focus:bg-white/5 focus:text-primary",
          className
        )}
      >
        <div className="text-sm font-bold leading-none text-white font-[Chakra_Petch] uppercase">
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-neutral-400">{children}</p>
      </Link>
    </li>
  );
};

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isSubItem?: boolean;
}

const MobileLink = ({ href, children, onClick, isSubItem = false }: MobileLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase touch-manipulation block",
      isSubItem
        ? "text-base sm:text-lg border-b border-white/5 pb-2 pt-1"
        : "text-xl sm:text-2xl border-b border-white/10 pb-3 pt-1"
    )}
  >
    {children}
  </Link>
);
