import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingPage() {
  const packs = [
    {
      id: "basic",
      name: "Essentiel",
      description: "Pour les petites entreprises et les indépendants",
      price: "49",
      features: [
        "Accès à 10 formations complètes",
        "Consultation de 5 profils de formateurs",
        "1 demande de formation sur mesure",
        "Support par email",
      ],
      cta: "Choisir l'offre Essentiel",
      popular: false,
    },
    {
      id: "pro",
      name: "Professionnel",
      description: "Pour les entreprises en croissance",
      price: "99",
      features: [
        "Accès à 50 formations complètes",
        "Consultation de 20 profils de formateurs",
        "3 demandes de formation sur mesure",
        "Support prioritaire",
        "Tableau de bord analytique",
      ],
      cta: "Choisir l'offre Professionnel",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Entreprise",
      description: "Pour les grandes organisations",
      price: "249",
      features: [
        "Accès illimité aux formations",
        "Consultation illimitée des profils",
        "Demandes illimitées de formation sur mesure",
        "Support dédié 24/7",
        "Tableau de bord analytique avancé",
        "Intégration API personnalisée",
      ],
      cta: "Contacter les ventes",
      popular: false,
    },
  ];

  return (
    <div className="container py-10">
      <div className="space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold">Nos offres</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choisissez l'offre qui correspond le mieux à vos besoins et accédez à
          l'ensemble de nos services premium
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packs.map((pack) => (
          <Card
            key={pack.id}
            className={`flex flex-col ${
              pack.popular ? "border-blue-600 shadow-lg" : ""
            }`}
          >
            {pack.popular && (
              <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">
                Recommandé
              </div>
            )}
            <CardHeader>
              <CardTitle>{pack.name}</CardTitle>
              <CardDescription>{pack.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">{pack.price}€</span>
                <span className="text-gray-500 ml-1">/mois</span>
              </div>
              <ul className="space-y-3">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  pack.popular ? "bg-blue-600 hover:bg-blue-700" : ""
                }`}
                variant={pack.popular ? "default" : "outline"}
              >
                {pack.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Vous avez des besoins spécifiques ?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Nous proposons également des offres personnalisées pour les
          organisations avec des besoins particuliers. Contactez notre équipe
          commerciale pour discuter de vos exigences.
        </p>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Nous contacter
          </Button>
        </Link>
      </div>
    </div>
  );
}
