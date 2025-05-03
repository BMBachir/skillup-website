"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  BookOpen,
  Building,
  Calendar,
  GraduationCap,
  Home,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  FileText,
  Bell,
  Clock,
  CreditCard,
} from "lucide-react";

interface SidebarProps {
  userType: "enterprise" | "school" | "trainer";
}

export function Sidebar({ userType }: SidebarProps) {
  const pathname = usePathname();

  const enterpriseLinks = [
    {
      name: "Tableau de bord",
      href: "/dashboard/enterprise",
      icon: LayoutDashboard,
    },
    {
      name: "Formations",
      href: "/dashboard/enterprise/formations",
      icon: BookOpen,
    },
    {
      name: "Formateurs",
      href: "/dashboard/enterprise/formateurs",
      icon: Users,
    },
    {
      name: "Demandes sur mesure",
      href: "/dashboard/enterprise/demandes",
      icon: FileText,
    },
    {
      name: "Calendrier",
      href: "/dashboard/enterprise/calendrier",
      icon: Calendar,
    },
    {
      name: "Employés",
      href: "/dashboard/enterprise/employes",
      icon: Users,
    },
    {
      name: "Statistiques",
      href: "/dashboard/enterprise/statistiques",
      icon: BarChart3,
    },
    {
      name: "Messages",
      href: "/dashboard/enterprise/messages",
      icon: MessageSquare,
    },
    {
      name: "Facturation",
      href: "/dashboard/enterprise/facturation",
      icon: CreditCard,
    },
    {
      name: "Paramètres",
      href: "/dashboard/enterprise/parametres",
      icon: Settings,
    },
  ];

  const schoolLinks = [
    {
      name: "Tableau de bord",
      href: "/dashboard/school",
      icon: LayoutDashboard,
    },
    {
      name: "Mes formations",
      href: "/dashboard/school/formations",
      icon: BookOpen,
    },
    {
      name: "Formateurs",
      href: "/dashboard/school/formateurs",
      icon: Users,
    },
    {
      name: "Inscriptions",
      href: "/dashboard/school/inscriptions",
      icon: FileText,
    },
    {
      name: "Calendrier",
      href: "/dashboard/school/calendrier",
      icon: Calendar,
    },
    {
      name: "Statistiques",
      href: "/dashboard/school/statistiques",
      icon: BarChart3,
    },
    {
      name: "Messages",
      href: "/dashboard/school/messages",
      icon: MessageSquare,
    },
    {
      name: "Facturation",
      href: "/dashboard/school/facturation",
      icon: CreditCard,
    },
    {
      name: "Paramètres",
      href: "/dashboard/school/parametres",
      icon: Settings,
    },
  ];

  const trainerLinks = [
    {
      name: "Tableau de bord",
      href: "/dashboard/trainer",
      icon: LayoutDashboard,
    },
    {
      name: "Mon profil",
      href: "/dashboard/trainer/profil",
      icon: Users,
    },
    {
      name: "Missions",
      href: "/dashboard/trainer/missions",
      icon: FileText,
    },
    {
      name: "Disponibilités",
      href: "/dashboard/trainer/disponibilites",
      icon: Clock,
    },
    {
      name: "Calendrier",
      href: "/dashboard/trainer/calendrier",
      icon: Calendar,
    },
    {
      name: "Statistiques",
      href: "/dashboard/trainer/statistiques",
      icon: BarChart3,
    },
    {
      name: "Messages",
      href: "/dashboard/trainer/messages",
      icon: MessageSquare,
    },
    {
      name: "Facturation",
      href: "/dashboard/trainer/facturation",
      icon: CreditCard,
    },
    {
      name: "Paramètres",
      href: "/dashboard/trainer/parametres",
      icon: Settings,
    },
  ];

  const links =
    userType === "enterprise"
      ? enterpriseLinks
      : userType === "school"
      ? schoolLinks
      : trainerLinks;

  const userTypeIcon =
    userType === "enterprise"
      ? Building
      : userType === "school"
      ? GraduationCap
      : Users;

  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Home className="h-6 w-6" />
          <span>SkillUp</span>
        </Link>
      </div>
      <div className="flex items-center gap-2 px-6 py-3 border-y mt-[25px] mb-[10px] ">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100"></div>
        <div>
          <p className="text-sm font-medium ">
            {userType === "enterprise"
              ? "Espace Entreprise"
              : userType === "school"
              ? "Espace École"
              : "Espace Formateur"}
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 gap-1">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100",
                pathname === link.href
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : ""
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          <Bell className="h-4 w-4" />
          Notifications
        </div>
      </div>
    </div>
  );
}
