import "@/app/globals.css";

import { cn } from "@/lib/utils";
import { MainNav } from "./components/main-nav";
import ChatBot from "./components/ChatBot";

export const metadata = {
  title: "SkillUp - Plateforme de mise en relation",
  description:
    "Plateforme innovante de mise en relation entre entreprises, écoles de formation, formateurs et consultants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="container mx-auto ">
          <MainNav />
          <main>{children}</main>

          <ChatBot />
        </div>
      </body>
    </html>
  );
}
