"use client";
import {
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle,
  PlusCircle,
  Briefcase,
  Award,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ActivityItem } from "@/app/components/dashboard/activity-item";
import { StatsCard } from "@/app/components/dashboard/stats-card";
import { Sidebar } from "@/app/components/dashboard/sidebar";
import { Header } from "@/app/components/dashboard/header";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";

type RegisteredUser = {
  payment: string;
  userType?: string;
  name?: string;
  logged: boolean;
};
export default function TrainerDashboard() {
  const [storedUser, setStoredUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("registeredUser");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="">
      {storedUser?.logged && storedUser.payment === "Premium" ? (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <Sidebar userType="trainer" />
          <div className="flex flex-col">
            <Header userType="trainer" userName="Sophie Martin" />
            <main className="flex-1 overflow-y-auto bg-gray-50 ml-[50px] mt-[50px]">
              <div className="container py-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                      Tableau de bord
                    </h1>
                    <p className="text-gray-500">
                      Bienvenue sur votre espace formateur, gérez vos missions
                      et disponibilités.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Ajouter disponibilité
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <StatsCard
                    title="Missions en cours"
                    value="4"
                    icon={Briefcase}
                    trend={{ value: 2, isPositive: true }}
                  />
                  <StatsCard
                    title="Heures ce mois"
                    value="48"
                    icon={Clock}
                    trend={{ value: 15, isPositive: true }}
                  />
                  <StatsCard
                    title="Évaluation moyenne"
                    value="4.9/5"
                    icon={Award}
                    trend={{ value: 3, isPositive: true }}
                  />
                  <StatsCard
                    title="Revenus du mois"
                    value="3 600 dzd"
                    icon={CreditCard}
                    trend={{ value: 12, isPositive: true }}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-6 mb-6">
                  <Card className="md:col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Missions en cours</CardTitle>
                        <CardDescription>
                          Suivi de vos missions actuelles
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Voir toutes les missions
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Formation Développement Web",
                            client: "École Numérique Alger",
                            progress: 75,
                            hours: "24/32",
                            endDate: "15 mai 2025",
                          },
                          {
                            name: "Workshop React Avancé",
                            client: "Entreprise Tech",
                            progress: 50,
                            hours: "8/16",
                            endDate: "20 mai 2025",
                          },
                          {
                            name: "Mentorat JavaScript",
                            client: "Startup Innovate",
                            progress: 30,
                            hours: "6/20",
                            endDate: "30 juin 2025",
                          },
                          {
                            name: "Formation Node.js",
                            client: "DataTech Academy",
                            progress: 10,
                            hours: "4/40",
                            endDate: "15 juillet 2025",
                          },
                        ].map((mission, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">
                                  {mission.name}
                                </span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-500">
                                    Client: {mission.client}
                                  </span>
                                  <span className="text-gray-300">•</span>
                                  <span className="text-xs text-gray-500">
                                    Fin: {mission.endDate}
                                  </span>
                                </div>
                              </div>
                              <span className="text-sm font-medium">
                                {mission.hours} heures
                              </span>
                            </div>
                            <Progress
                              value={mission.progress}
                              className="h-2"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Planning de la semaine</CardTitle>
                      <CardDescription>Vos prochaines sessions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          title: "Développement Web",
                          client: "École Numérique Alger",
                          date: "Aujourd'hui",
                          time: "14:00 - 18:00",
                        },
                        {
                          title: "React Avancé",
                          client: "Entreprise Tech",
                          date: "Demain",
                          time: "09:00 - 13:00",
                        },
                        {
                          title: "Mentorat JavaScript",
                          client: "Startup Innovate",
                          date: "Jeudi",
                          time: "15:00 - 17:00",
                        },
                      ].map((session, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
                        >
                          <div className="rounded-md bg-blue-100 p-2 text-blue-600">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">
                              {session.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {session.client}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs font-medium text-blue-600">
                                {session.date}
                              </p>
                              <span className="text-gray-300">•</span>
                              <p className="text-xs text-gray-500">
                                {session.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Voir le calendrier
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-6">
                  <Card className="md:col-span-3">
                    <CardHeader>
                      <CardTitle>Opportunités</CardTitle>
                      <CardDescription>
                        Nouvelles demandes de formation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Formation React Native",
                            company: "Mobile App Studio",
                            duration: "40 heures",
                            date: "Juin - Juillet 2025",
                            budget: "4 000 dzd",
                          },
                          {
                            title: "Workshop GraphQL",
                            company: "Tech Innovate",
                            duration: "16 heures",
                            date: "Mai 2025",
                            budget: "1 600 dzd",
                          },
                          {
                            title: "Formation TypeScript",
                            company: "École Numérique Alger",
                            duration: "24 heures",
                            date: "Septembre 2025",
                            budget: "2 400 dzd",
                          },
                        ].map((opportunity, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-2 pb-4 border-b last:border-0 last:pb-0"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium">
                                {opportunity.title}
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                {opportunity.budget}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-500">
                              {opportunity.company}
                            </p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-gray-400" />
                                <p className="text-xs text-gray-500">
                                  {opportunity.duration}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 text-gray-400" />
                                <p className="text-xs text-gray-500">
                                  {opportunity.date}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs"
                              >
                                Voir détails
                              </Button>
                              <Button size="sm" className="h-7 text-xs">
                                Postuler
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Voir toutes les opportunités
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="md:col-span-3">
                    <CardHeader>
                      <CardTitle>Activité récente</CardTitle>
                      <CardDescription>
                        Dernières actions sur votre compte
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-0">
                        <ActivityItem
                          icon={CheckCircle}
                          title="Mission terminée"
                          description="Vous avez terminé la formation 'JavaScript Avancé'"
                          time="Il y a 2j"
                          iconColor="bg-green-100 text-green-600"
                        />
                        <ActivityItem
                          icon={Award}
                          title="Nouvelle évaluation"
                          description="Vous avez reçu une note de 5/5 pour 'React Avancé'"
                          time="Il y a 3j"
                          iconColor="bg-green-100 text-green-600"
                        />
                        <ActivityItem
                          icon={MessageSquare}
                          title="Nouveau message"
                          description="École Numérique Alger vous a envoyé un message"
                          time="Il y a 4j"
                        />
                        <ActivityItem
                          icon={CreditCard}
                          title="Paiement reçu"
                          description="Vous avez reçu un paiement de 2 400 dzd de Tech Solutions"
                          time="Il y a 5j"
                          iconColor="bg-green-100 text-green-600"
                        />
                        <ActivityItem
                          icon={Briefcase}
                          title="Nouvelle mission"
                          description="Vous avez été sélectionné pour la mission 'Node.js'"
                          time="Il y a 1sem"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Voir toutes les activités
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {storedUser?.payment === "Freemium"
                ? "Accès Premium Requis"
                : "Connexion Requise"}
            </h1>

            <p className="text-gray-500 mb-6">
              {storedUser?.payment === "Freemium"
                ? "Vous devez vous inscrire à l'offre Premium pour accéder au dashboard."
                : "Connectez-vous avec votre compte pour continuer."}
            </p>

            {storedUser?.payment === "Freemium" ? (
              <Link
                href="/pricing"
                className="inline-block bg-[#001282] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#001282]/80 transition-all duration-300"
              >
                Passer Premium
              </Link>
            ) : (
              <Link
                href="/auth/register"
                className="inline-block bg-[#001282] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#001282]/80 transition-all duration-300"
              >
                Se connecter
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
