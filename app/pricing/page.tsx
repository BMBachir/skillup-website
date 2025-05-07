"use client";
import Link from "next/link";
import { Check, Building, GraduationCap, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function PricingPage() {
  const router = useRouter();

  const entreprisePacks = [
    {
      id: "Freemium",
      name: "Freemium",
      description: "Pour les entreprises",
      price: "0",
      features: ["Accès complet à la plateforme ", "support par email"],
      cta: "Choisir l'offre Freemium",
      popular: false,
    },
    {
      id: "Premium",
      name: "Premium",
      description: "Pour les entreprises",
      price: "200000",
      features: [
        "Accès illimité aux formations disponibles",
        "Consultation de profils de formateurs / consultants",
        "Accès illimité aux formations sur mesure",
        "Tableau de bord analytique",
        "Mise en avant automatique dans les resultats de recherche",
      ],
      cta: "Choisir l'offre Premium",
      popular: true,
    },
  ];

  const ecolePacks = [
    {
      id: "Freemium",
      name: "Freemium",
      description: "Pour les ecoles de formation ",
      price: "0",
      features: ["Accès au site web complètes", "support par email"],
      cta: "Choisir l'offre Freemium",
      popular: false,
    },
    {
      id: "Premium",
      name: "Premium",
      description: "Pour les ecoles de formation ",
      price: "10000",
      features: [
        "Publication illimitée des formations.",
        "Consultation illimitée des profils de formations / consultants.",
        "Accès à la formation personnalisée.",
        "Mise en avant automatique dans les résultats de recherche.",
      ],

      cta: "Choisir l'offre Premium",
      popular: true,
    },
  ];

  const formateurPacks = [
    {
      id: "Freemium",
      name: "Freemium",
      description: "Pour les formateurs et colnsultants",
      price: "0",
      features: [
        "Création de profil formateur",
        "Accès aux offres de missions",
        "Support par email",
      ],
      cta: "Choisir l'offre Freemium",
      popular: false,
    },
    {
      id: "Premium",
      name: "Premium",
      description: "Pour les formateurs et colnsultants",
      price: "40000",
      features: [
        "Mise en avant sur la plateforme",
        "Accès prioritaire aux missions",
        "Support dédié",
      ],
      cta: "Choisir l'offre Premium",
      popular: true,
    },
  ];

  const handlePackSelection = (
    selectedPackId: string,
    selectedPackPrice: string
  ) => {
    const userData = localStorage.getItem("registeredUser");

    if (userData) {
      const parsedData = JSON.parse(userData);
      parsedData.payment = selectedPackId;
      localStorage.setItem("registeredUser", JSON.stringify(parsedData));

      if (selectedPackId.includes("Premium")) {
        router.push(`/pricing/e-payment?price=${selectedPackPrice}`);
      } else {
        router.push("/");
      }
    } else {
      toast.error("Inscrivez-vous pour choisir une offre");
    }
  };

  const renderPacks = (packs: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {packs.map((pack) => (
        <Card
          key={pack.id}
          className={`flex flex-col ${
            pack.popular ? "border-[#001282] shadow-lg" : ""
          }`}
        >
          {pack.popular && (
            <div className="bg-[#001282] text-white text-center py-1 text-sm font-medium">
              Recommandé
            </div>
          )}
          <CardHeader>
            <CardTitle>{pack.name}</CardTitle>
            <CardDescription>{pack.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-6">
              <span className="text-4xl font-bold">{pack.price} DZ</span>
              <span className="text-gray-500 ml-1">/Par an</span>
            </div>
            <ul className="space-y-3">
              {pack.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => handlePackSelection(pack.id, pack.price)}
              className={`w-full cursor-pointer transition-colors duration-500 ${
                pack.popular
                  ? "bg-[#001282] hover:bg-blue-900"
                  : "hover:bg-gray-300"
              }`}
              variant={pack.popular ? "default" : "outline"}
            >
              {pack.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container py-10 mt-[100px]">
      <ToastContainer position="bottom-right" draggable theme="colored" />
      <div className="space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold">Nos offres</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choisissez l'offre qui correspond le mieux à vos besoins et accédez à
          l'ensemble de nos services premium
        </p>
      </div>

      <Tabs defaultValue="entreprise" className="w-full max-w-[1200px] mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="entreprise" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Entreprises</span>
          </TabsTrigger>
          <TabsTrigger value="ecole" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Écoles</span>
          </TabsTrigger>
          <TabsTrigger value="formateur" className="flex items-center gap-2">
            <UserRound className="h-4 w-4" />
            <span>Formateurs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="entreprise">
          {renderPacks(entreprisePacks)}
        </TabsContent>
        <TabsContent value="ecole">{renderPacks(ecolePacks)}</TabsContent>
        <TabsContent value="formateur">
          {renderPacks(formateurPacks)}
        </TabsContent>
      </Tabs>

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
