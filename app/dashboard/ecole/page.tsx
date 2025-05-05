"use client";
import {
  BarChart3,
  BookOpen,
  Calendar,
  MessageSquare,
  Users,
  AlertCircle,
  PlusCircle,
  GraduationCap,
  Award,
  UserPlus,
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
import { useEffect, useState } from "react";
import Link from "next/link";

type RegisteredUser = {
  payment: string;
  userType?: string;
  name?: string;
  logged: boolean;
};

export default function SchoolDashboard() {
  const [storedUser, setStoredUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("registeredUser");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="">
      {storedUser?.logged ? (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          {" "}
          <Sidebar userType="school" />
          <div className="flex flex-col">
            <Header userType="school" userName="École Numérique Paris" />
            <main className="flex-1 overflow-y-auto bg-gray-50 ml-[50px] mt-[50px]">
              <div className="container py-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                      Tableau de bord
                    </h1>
                    <p className="text-gray-500">
                      Bienvenue sur votre espace école, gérez vos formations et
                      inscriptions.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Nouvelle formation
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <StatsCard
                    title="Formations publiées"
                    value="24"
                    icon={BookOpen}
                    trend={{ value: 15, isPositive: true }}
                  />
                  <StatsCard
                    title="Entreprises inscrits"
                    value="187"
                    icon={Users}
                    trend={{ value: 8, isPositive: true }}
                  />
                  <StatsCard
                    title="Formateurs"
                    value="12"
                    icon={GraduationCap}
                    trend={{ value: 5, isPositive: true }}
                  />
                  <StatsCard
                    title="Taux de satisfaction"
                    value="4.8/5"
                    icon={Award}
                    trend={{ value: 3, isPositive: true }}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-6 mb-6">
                  <Card className="md:col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Performance des formations</CardTitle>
                        <CardDescription>
                          Nombre d'inscriptions par formation
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Voir les statistiques
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Développement Web Full Stack",
                            inscriptions: 45,
                            capacity: 50,
                            rating: 4.9,
                          },
                          {
                            name: "Data Science & IA",
                            inscriptions: 32,
                            capacity: 40,
                            rating: 4.7,
                          },
                          {
                            name: "Marketing Digital",
                            inscriptions: 38,
                            capacity: 40,
                            rating: 4.8,
                          },
                          {
                            name: "Cybersécurité",
                            inscriptions: 28,
                            capacity: 35,
                            rating: 4.6,
                          },
                          {
                            name: "Management d'équipe",
                            inscriptions: 34,
                            capacity: 35,
                            rating: 4.5,
                          },
                        ].map((formation, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">
                                  {formation.name}
                                </span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-500">
                                    {formation.inscriptions}/
                                    {formation.capacity} inscrits
                                  </span>
                                  <div className="flex items-center">
                                    <span className="text-xs font-medium text-yellow-500 mr-1">
                                      {formation.rating}
                                    </span>
                                    <svg
                                      className="w-3 h-3 text-yellow-500 fill-current"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">
                                {Math.round(
                                  (formation.inscriptions /
                                    formation.capacity) *
                                    100
                                )}
                                %
                              </span>
                            </div>
                            <Progress
                              value={
                                (formation.inscriptions / formation.capacity) *
                                100
                              }
                              className="h-2"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Prochaines sessions</CardTitle>
                      <CardDescription>
                        Sessions de formation à venir
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          title: "Développement Web",
                          date: "12 mai 2025",
                          time: "09:00 - 17:00",
                          students: 18,
                        },
                        {
                          title: "Data Science",
                          date: "14 mai 2025",
                          time: "14:00 - 18:00",
                          students: 15,
                        },
                        {
                          title: "UX/UI Design",
                          date: "20 mai 2025",
                          time: "09:00 - 12:00",
                          students: 12,
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
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-gray-500">
                                {session.date}
                              </p>
                              <span className="text-gray-300">•</span>
                              <p className="text-xs text-gray-500">
                                {session.time}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Users className="h-3 w-3 text-gray-400" />
                              <p className="text-xs text-gray-500">
                                {session.students} étudiants
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
                      <CardTitle>Dernières inscriptions</CardTitle>
                      <CardDescription>
                        Nouveaux étudiants inscrits à vos formations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Martin Dubois",
                            company: "Tech Solutions",
                            formation: "Développement Web",
                            date: "Il y a 2h",
                            image:
                              "/placeholder.svg?height=40&width=40&text=MD",
                          },
                          {
                            name: "Julie Moreau",
                            company: "Marketing Agency",
                            formation: "Marketing Digital",
                            date: "Il y a 5h",
                            image:
                              "/placeholder.svg?height=40&width=40&text=JM",
                          },
                          {
                            name: "Thomas Leroy",
                            company: "Data Insights",
                            formation: "Data Science",
                            date: "Il y a 1j",
                            image:
                              "/placeholder.svg?height=40&width=40&text=TL",
                          },
                        ].map((student, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0"
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img
                                src={student.image || "/placeholder.svg"}
                                alt={student.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium">
                                  {student.name}
                                </h4>
                                <span className="text-xs text-gray-500">
                                  {student.date}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">
                                {student.company}
                              </p>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {student.formation}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Users className="mr-2 h-4 w-4" />
                        Voir tous les étudiants
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
                          icon={UserPlus}
                          title="Nouvelle inscription"
                          description="3 nouveaux étudiants se sont inscrits à 'Développement Web'"
                          time="Il y a 1h"
                          iconColor="bg-green-100 text-green-600"
                        />
                        <ActivityItem
                          icon={BookOpen}
                          title="Formation mise à jour"
                          description="Le programme 'Data Science' a été mis à jour"
                          time="Il y a 3h"
                        />
                        <ActivityItem
                          icon={MessageSquare}
                          title="Nouveau message"
                          description="Entreprise Tech a envoyé une demande de formation sur mesure"
                          time="Il y a 6h"
                        />
                        <ActivityItem
                          icon={AlertCircle}
                          title="Rappel"
                          description="La session 'Développement Web' commence demain à 9h"
                          time="Il y a 1j"
                          iconColor="bg-yellow-100 text-yellow-600"
                        />
                        <ActivityItem
                          icon={Award}
                          title="Nouvelle évaluation"
                          description="Votre formation 'Marketing Digital' a reçu une note de 5/5"
                          time="Il y a 2j"
                          iconColor="bg-green-100 text-green-600"
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
          </div>{" "}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Vous devez vous connecter pour accéder au dashboard
            </h1>
            <p className="text-gray-500 mb-6">
              Connectez-vous avec votre compte pour continuer.
            </p>
            <Link
              href="/auth/register"
              className="inline-block bg-[#001282] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#001282]/80 transition-all duration-300"
            >
              Se connecter
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
