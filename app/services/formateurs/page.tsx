import Link from "next/link";
import { Star, StarHalf, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FormateursPage() {
  // Exemple de données de formateurs
  const formateurs = [
    {
      id: 1,
      name: "Sophie Martin",
      title: "Experte en Développement Web",
      location: "Paris",
      experience: "8 ans",
      rating: 4.7,
      specialties: ["JavaScript", "React", "Node.js"],
      description:
        "Formatrice passionnée spécialisée dans les technologies web modernes avec une approche pédagogique axée sur la pratique.",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      title: "Consultant en Data Science",
      location: "Lyon",
      experience: "12 ans",
      rating: 4.9,
      specialties: ["Python", "Machine Learning", "Big Data"],
      description:
        "Expert en analyse de données et intelligence artificielle avec une expérience significative dans l'industrie et l'enseignement.",
    },
    {
      id: 3,
      name: "Camille Leroy",
      title: "Formatrice Marketing Digital",
      location: "Bordeaux",
      experience: "6 ans",
      rating: 4.5,
      specialties: ["SEO", "Réseaux sociaux", "Content Marketing"],
      description:
        "Spécialiste en stratégies marketing digitales innovantes avec un parcours dans des agences de renom.",
    },
    {
      id: 4,
      name: "Alexandre Petit",
      title: "Expert en Cybersécurité",
      location: "Lille",
      experience: "10 ans",
      rating: 4.8,
      specialties: ["Sécurité réseau", "Ethical Hacking", "RGPD"],
      description:
        "Consultant et formateur en sécurité informatique avec une expertise reconnue dans la protection des systèmes d'information.",
    },
  ];

  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Formateurs & Consultants</h1>
        <p className="text-gray-500">
          Découvrez nos experts qualifiés pour vos formations et missions de
          conseil
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formateurs.map((formateur) => (
          <Card key={formateur.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=64&width=64&text=${formateur.name.charAt(
                      0
                    )}`}
                    alt={formateur.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <CardTitle>{formateur.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {formateur.title}
                  </CardDescription>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="blur-sm hover:blur-none transition-all">
                      {formateur.location}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center mb-2">
                {Array(Math.floor(formateur.rating))
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                {formateur.rating % 1 !== 0 && (
                  <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
                <span className="ml-2 text-sm text-gray-500">
                  {formateur.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center mb-3 text-sm">
                <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-gray-500">
                  Expérience: {formateur.experience}
                </span>
              </div>
              <div className="mb-3 flex flex-wrap gap-1">
                {formateur.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <p className="text-sm blur-sm hover:blur-none transition-all">
                {formateur.description}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/services/formateurs/${formateur.id}`}
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Voir profil complet
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Vous souhaitez accéder à tous les profils sans restrictions ?
        </h2>
        <Link href="/pricing">
          <Button>Découvrir nos offres premium</Button>
        </Link>
      </div>
    </div>
  );
}
