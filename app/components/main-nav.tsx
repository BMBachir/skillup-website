"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LayoutDashboard, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("/");
  const [userExists, setUserExists] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("registeredUser");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserExists(true);

      switch (parsedUser.userType) {
        case "entreprise":
          setRouterPath("/dashboard/enterprise");
          break;
        case "ecole":
          setRouterPath("/dashboard/ecole");
          break;
        case "formateur":
          setRouterPath("/dashboard/formateur");
          break;
        default:
          setRouterPath("/");
      }
    }
  }, [userExists]);
  const handleLogout = () => {
    localStorage.removeItem("registeredUser");
    setUserExists(false);
    window.location.reload();
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={120}
            height={120}
            priority
            quality={100}
          />
        </Link>

        {/* Desktop Nav */}

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Nos Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#001282] to-blue-800 p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Nos Services
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Découvrez notre écosystème complet pour tous les
                          acteurs de la formation professionnelle
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/services/formations">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Formations
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/formateurs">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Formateurs / Consultants
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/sur-mesure">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Projet a réaliser / Formations sur mesure
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">À propos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {userExists ? (
          <div className="hidden md:flex items-center gap-4">
            <Link href={routerPath}>
              <Button className="bg-[#001282] transition ease-in-out delay-150 hover:-translate-y-1 duration-500 cursor-pointer">
                Dashboard
                <LayoutDashboard size={20} className="ml-2" />
              </Button>
            </Link>

            <Button
              className="hidden md:flex bg-[#840103]  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-500"
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
            <Avatar className="cursor-pointer h-10 w-10 ml-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="hidden md:flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-500"
              >
                Connexion
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="hidden md:flex bg-[#840103] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-500">
                Inscription
              </Button>
            </Link>
          </div>
        )}
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4 flex flex-col">
          <Link
            href="/services"
            className="rounded-xl hover:bg-amber-100 p-4 text-base font-medium text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nos Services
          </Link>
          <Link
            className="rounded-xl hover:bg-amber-100 p-4 text-base font-medium text-gray-900"
            href="/services/formations"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Formations
          </Link>
          <Link
            className="rounded-xl hover:bg-amber-100 p-4 text-base font-medium text-gray-900 "
            href="/services/formateurs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Formateurs / Consultants
          </Link>
          <Link
            className="rounded-xl hover:bg-amber-100 p-4 text-base font-medium text-gray-900 "
            href="/services/sur-mesure"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Formations sur mesure
          </Link>
          <Link
            className="rounded-xl hover:bg-amber-100 p-4 text-base font-medium text-gray-900 "
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            className="rounded-xl hover:bg-amber-100 p-4 text-base font-medium text-gray-900 "
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="outline" className="w-full p-4">
              Connexion
            </Button>
          </Link>
          <Link
            href="/auth/register"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button className="bg-[#840103] w-full p-4">Inscription</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
