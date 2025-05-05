"use client";
import {
  BarChart3,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  Users,
  CheckCircle,
  AlertCircle,
  PlusCircle,
  Briefcase,
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

import { Badge } from "@/components/ui/badge";
import { ActivityItem } from "@/app/components/dashboard/activity-item";
import { StatsCard } from "@/app/components/dashboard/stats-card";
import { Sidebar } from "@/app/components/dashboard/sidebar";
import { Header } from "@/app/components/dashboard/header";
import { useEffect, useState } from "react";
import Link from "next/link";
type RegisteredUser = {
  payment: string;
  userType?: string;
  name?: string;
  logged: boolean;
};
export default function EnterpriseDashboard() {
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
          <Sidebar userType="enterprise" />
          <div className="flex flex-col">
            <Header userType="enterprise" userName="Entreprise Tech" />
            <main className="flex-1 overflow-y-auto bg-gray-50 ml-[50px] mt-[50px]">
              <div className="container py-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                      Tableau de bord
                    </h1>
                    <p className="text-gray-500">
                      Bienvenue sur votre espace entreprise, gérez vos
                      formations et formateurs.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Nouvelle demande
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <StatsCard
                    title="Formations actives"
                    value="12"
                    icon={BookOpen}
                    trend={{ value: 8, isPositive: true }}
                  />
                  <StatsCard
                    title="Employés en formation"
                    value="48"
                    icon={Users}
                    trend={{ value: 12, isPositive: true }}
                  />
                  <StatsCard
                    title="Formateurs engagés"
                    value="7"
                    icon={Briefcase}
                    trend={{ value: 5, isPositive: true }}
                  />
                  <StatsCard
                    title="Demandes en cours"
                    value="3"
                    icon={FileText}
                    trend={{ value: 0, isPositive: true }}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-6 mb-6">
                  <Card className="md:col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Progression des formations</CardTitle>
                        <CardDescription>
                          Suivi des formations en cours pour vos employés
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Voir les détails
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Développement Web Full Stack",
                            progress: 75,
                            employees: 12,
                          },
                          {
                            name: "Data Science & IA",
                            progress: 45,
                            employees: 8,
                          },
                          {
                            name: "Marketing Digital",
                            progress: 90,
                            employees: 15,
                          },
                          { name: "Cybersécurité", progress: 30, employees: 6 },
                          {
                            name: "Management d'équipe",
                            progress: 60,
                            employees: 7,
                          },
                        ].map((formation, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">
                                  {formation.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {formation.employees} employés inscrits
                                </span>
                              </div>
                              <span className="text-sm font-medium">
                                {formation.progress}%
                              </span>
                            </div>
                            <Progress
                              value={formation.progress}
                              className="h-2"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Sessions à venir</CardTitle>
                      <CardDescription>
                        Prochaines formations planifiées
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          title: "Marketing Digital",
                          date: "15 mai 2025",
                          time: "09:00 - 17:00",
                          participants: 8,
                        },
                        {
                          title: "Leadership & Management",
                          date: "18 mai 2025",
                          time: "14:00 - 18:00",
                          participants: 5,
                        },
                        {
                          title: "Excel Avancé",
                          date: "22 mai 2025",
                          time: "09:00 - 12:00",
                          participants: 12,
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
                                {session.participants} participants
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
                      <CardTitle>Formateurs recommandés</CardTitle>
                      <CardDescription>
                        Basé sur vos besoins et historique
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Sophie Martin",
                            specialty: "Développement Web",
                            rating: 4.8,
                            availability: "Disponible",
                            image:
                              "/placeholder.svg?height=40&width=40&text=SM",
                          },
                          {
                            name: "Thomas Dubois",
                            specialty: "Data Science",
                            rating: 4.9,
                            availability: "Disponible dans 2 semaines",
                            image:
                              "/placeholder.svg?height=40&width=40&text=TD",
                          },
                          {
                            name: "Camille Leroy",
                            specialty: "Marketing Digital",
                            rating: 4.7,
                            availability: "Disponible",
                            image:
                              "/placeholder.svg?height=40&width=40&text=CL",
                          },
                        ].map((trainer, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0"
                          >
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img
                                src={trainer.image || "/placeholder.svg"}
                                alt={trainer.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium">
                                  {trainer.name}
                                </h4>
                                <div className="flex items-center">
                                  <span className="text-xs font-medium text-yellow-500 mr-1">
                                    {trainer.rating}
                                  </span>
                                  <svg
                                    className="w-3 h-3 text-yellow-500 fill-current"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-xs text-gray-500">
                                {trainer.specialty}
                              </p>
                              <div className="flex items-center mt-1">
                                <Badge
                                  variant="outline"
                                  className="text-xs px-1 py-0 h-5"
                                >
                                  <Clock className="h-3 w-3 mr-1" />
                                  {trainer.availability}
                                </Badge>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              Contacter
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        <Users className="mr-2 h-4 w-4" />
                        Voir tous les formateurs
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
                          title="Formation complétée"
                          description="L'équipe marketing a terminé la formation 'SEO Avancé'"
                          time="Il y a 2h"
                          iconColor="bg-green-100 text-green-600"
                        />
                        <ActivityItem
                          icon={Users}
                          title="Nouveaux inscrits"
                          description="5 employés ont été inscrits à la formation 'Excel Avancé'"
                          time="Il y a 5h"
                        />
                        <ActivityItem
                          icon={MessageSquare}
                          title="Nouveau message"
                          description="Thomas Dubois a répondu à votre demande de formation"
                          time="Il y a 1j"
                        />
                        <ActivityItem
                          icon={AlertCircle}
                          title="Rappel"
                          description="La formation 'Leadership' commence demain à 9h"
                          time="Il y a 1j"
                          iconColor="bg-yellow-100 text-yellow-600"
                        />
                        <ActivityItem
                          icon={FileText}
                          title="Demande approuvée"
                          description="Votre demande de formation sur mesure a été approuvée"
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
          </div>
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
