import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
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

export default function FormationsPage() {
  // Exemple de données de formations
  const formations = [
    {
      id: 1,
      title: "Développement Web Full Stack",
      school: "École Numérique Paris",
      rating: 4.5,
      duration: "6 mois",
      category: "Développement",
      description:
        "Formation complète aux technologies web modernes: HTML, CSS, JavaScript, React, Node.js et bases de données.",
    },
    {
      id: 2,
      title: "Data Science & Intelligence Artificielle",
      school: "DataTech Academy",
      rating: 4.8,
      duration: "8 mois",
      category: "Data",
      description:
        "Maîtrisez l'analyse de données, le machine learning et les techniques d'IA avancées pour devenir Data Scientist.",
    },
    {
      id: 3,
      title: "Marketing Digital",
      school: "Business School Lyon",
      rating: 4.2,
      duration: "3 mois",
      category: "Marketing",
      description:
        "Apprenez les stratégies de marketing digital, SEO, réseaux sociaux et publicité en ligne.",
    },
    {
      id: 4,
      title: "Cybersécurité",
      school: "Institut de Sécurité Informatique",
      rating: 4.7,
      duration: "5 mois",
      category: "Sécurité",
      description:
        "Formation aux techniques de protection des systèmes d'information et gestion des risques informatiques.",
    },
  ];

  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Catalogue de Formations</h1>
        <p className="text-gray-500">
          Découvrez notre sélection de formations professionnelles de qualité
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formations.map((formation) => (
          <Card key={formation.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{formation.title}</CardTitle>
                  <CardDescription className="mt-1 blur-sm hover:blur-none transition-all">
                    {formation.school}
                  </CardDescription>
                </div>
                <Badge>{formation.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center mb-2">
                {Array(Math.floor(formation.rating))
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                {formation.rating % 1 !== 0 && (
                  <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
                <span className="ml-2 text-sm text-gray-500">
                  {formation.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Durée: {formation.duration}
              </p>
              <p className="text-sm">{formation.description}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/services/formations/${formation.id}`}
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Voir plus
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Formations sur mesure</h2>
        <p className="mb-6">
          Vous ne trouvez pas la formation qui correspond exactement à vos
          besoins ? Décrivez votre projet et nous vous proposerons une solution
          adaptée.
        </p>
        <div className="space-y-4">
          <textarea
            className="w-full p-3 border rounded-md min-h-[150px]"
            placeholder="Décrivez vos besoins spécifiques en formation..."
          />
          <Button className="w-full md:w-auto">Envoyer ma demande</Button>
        </div>
      </div>
    </div>
  );
}
