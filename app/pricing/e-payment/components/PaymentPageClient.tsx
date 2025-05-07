"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  CreditCard,
  CheckCircle,
  Lock,
  ArrowLeft,
  Shield,
  AlertCircle,
  ChevronRight,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

// Plans disponibles
const plans = {
  basic: {
    id: "basic",
    name: "Premium",
    description: "Pour les petites entreprises et les indépendants",
    price: "4000",
    features: [
      "Accès à 10 formations complètes",
      "Consultation de 5 profils de formateurs",
      "1 demande de formation sur mesure",
      "Support par email",
    ],
    popular: false,
  },
  pro: {
    id: "pro",
    name: "Professionnel",
    description: "Pour les entreprises en croissance",
    price: "2999",
    features: [
      "Accès à 50 formations complètes",
      "Consultation de 20 profils de formateurs",
      "3 demandes de formation sur mesure",
      "Support prioritaire",
      "Tableau de bord analytique",
    ],
    popular: true,
  },
  enterprise: {
    id: "enterprise",
    name: "Entreprise",
    description: "Pour les grandes organisations",
    price: "4999",
    features: [
      "Accès illimité aux formations",
      "Consultation illimitée des profils",
      "Demandes illimitées de formation sur mesure",
      "Support dédié 24/7",
      "Tableau de bord analytique avancé",
      "Intégration API personnalisée",
    ],
    popular: false,
  },
};

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get("plan") || "basic";
  const userType = searchParams.get("userType") || "enterprise";

  const [selectedPlan, setSelectedPlan] = useState(
    plans[planId as keyof typeof plans]
  );
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const price = searchParams.get("price");
  const calculatePrice = () => {
    const basePrice = Number.parseInt(price || "0");

    const formattedPrice = (amount: number) => {
      return amount.toLocaleString("fr-FR");
    };

    if (billingCycle === "annual") {
      return formattedPrice(basePrice);
    } else {
      const monthlyPrice = Math.round(basePrice / 12);
      return formattedPrice(monthlyPrice);
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setIsError(true);
      setErrorMessage(
        "Veuillez accepter les conditions générales pour continuer."
      );
      return;
    }

    setIsProcessing(true);
    setIsError(false);

    setTimeout(() => {
      setIsProcessing(false);
      const success = Math.random() > 0.2;

      if (success) {
        setIsSuccess(true);

        setTimeout(() => {
          router.push(`/dashboard/${userType}?subscription=${planId}`);
        }, 2000);
      } else {
        setIsError(true);
        setErrorMessage(
          "Le paiement a été refusé. Veuillez vérifier vos informations et réessayer."
        );
      }
    }, 2000);
  };

  useEffect(() => {
    if (planId && plans[planId as keyof typeof plans]) {
      setSelectedPlan(plans[planId as keyof typeof plans]);
    }
  }, [planId]);

  if (isSuccess) {
    return (
      <div className="container py-10 max-w-4xl mx-auto mt-[100px]">
        <Card className="border-green-200 shadow-lg">
          <CardHeader className="text-center bg-green-50 border-b border-green-100">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-700">
              Paiement réussi !
            </CardTitle>
            <CardDescription>
              Votre abonnement {selectedPlan.name} a été activé avec succès.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <p className="mb-6">
              Vous allez être redirigé vers votre tableau de bord dans quelques
              instants...
            </p>
            <div className="flex justify-center">
              <Link href={`/dashboard/${userType}`}>
                <Button>
                  Accéder à mon tableau de bord
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/pricing"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux offres
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Formulaire de paiement */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Finaliser votre abonnement</CardTitle>
                <CardDescription>
                  Complétez vos informations de paiement pour activer votre
                  abonnement
                </CardDescription>
              </CardHeader>

              {isError && (
                <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">
                      Erreur de paiement
                    </p>
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handlePayment}>
                <CardContent className="space-y-6">
                  {/* Cycle de facturation */}
                  <div className="space-y-2">
                    <Label>Cycle de facturation</Label>
                    <RadioGroup
                      defaultValue="monthly"
                      className="grid grid-cols-2 gap-4"
                      value={billingCycle}
                      onValueChange={setBillingCycle}
                    >
                      <div>
                        <RadioGroupItem
                          value="monthly"
                          id="monthly"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="monthly"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="font-medium">Mensuel</span>
                          <span className="text-sm text-gray-500">
                            Facturation mensuelle
                          </span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="annual"
                          id="annual"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="annual"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Annuel</span>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                              -17%
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-500">
                            Facturation annuelle
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Méthode de paiement */}
                  <div className="space-y-2">
                    <Label>Méthode de paiement</Label>
                    <RadioGroup
                      defaultValue="card"
                      className="grid grid-cols-1 gap-4"
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                    >
                      <div>
                        <RadioGroupItem
                          value="card"
                          id="card"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="card"
                          className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <span className="font-medium">
                              Carte bancaire ou Edahabia
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Image
                              src="/images/edahabia.png"
                              alt="Edahabia"
                              height={32}
                              width={32}
                              className="h-6"
                            />
                            <Image
                              src="/images/cib.png"
                              alt="Edahabia"
                              height={32}
                              width={32}
                              className="h-6"
                            />
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Informations de carte */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 p-4 border rounded-md bg-gray-50">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="bg-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Date d'expiration</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/AA"
                            required
                            className="bg-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">Code de sécurité (CVV)</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            className="bg-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nom sur la carte</Label>
                        <Input
                          id="cardName"
                          placeholder="Jean Dupont"
                          required
                          className="bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* Informations de facturation */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">
                      Informations de facturation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise / Organisation</Label>
                      <Input id="company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Code postal</Label>
                        <Input id="postalCode" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ville</Label>
                        <Input id="city" required />
                      </div>
                    </div>
                  </div>

                  {/* Conditions générales */}
                  <div className="flex items-start space-x-2 mb-4">
                    <Checkbox
                      id="terms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) =>
                        setAgreeTerms(checked as boolean)
                      }
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        J'accepte les conditions générales
                      </label>
                      <p className="text-sm text-gray-500">
                        En cochant cette case, vous acceptez nos{" "}
                        <Link
                          href="#"
                          className="text-blue-600 hover:underline"
                        >
                          Conditions Générales d'Utilisation
                        </Link>{" "}
                        et notre{" "}
                        <Link
                          href="#"
                          className="text-blue-600 hover:underline"
                        >
                          Politique de Confidentialité
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Link href="/#formation" className="w-full">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Traitement en cours...
                        </>
                      ) : (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          Payer {calculatePrice()} dzd{" "}
                          {billingCycle === "annual" ? "par an" : "par mois"}
                        </>
                      )}
                    </Button>
                  </Link>

                  <div className="flex items-center justify-center text-xs text-gray-500 gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Paiement sécurisé - Vos données sont protégées</span>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </div>

          {/* Récapitulatif de commande */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
                <CardDescription>Détails de votre abonnement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{selectedPlan.name}</h3>
                    <p className="text-sm text-gray-500">
                      {billingCycle === "annual"
                        ? "Abonnement annuel"
                        : "Abonnement mensuel"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{calculatePrice()} dzd</p>
                    <p className="text-xs text-gray-500">
                      {billingCycle === "annual" ? "par an" : "par mois"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Ce qui est inclus :</h3>
                  <ul className="space-y-2">
                    {selectedPlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>
                    {calculatePrice()} dzd{" "}
                    {billingCycle === "annual" ? "par an" : "par mois"}
                  </span>
                </div>

                {billingCycle === "annual" && (
                  <div className="bg-green-50 p-3 rounded-md text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Vous économisez 17% avec l'abonnement annuel</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq">
                    <AccordionTrigger className="text-sm">
                      Questions fréquentes
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h4 className="font-medium">
                            Puis-je annuler à tout moment ?
                          </h4>
                          <p className="text-gray-500">
                            Oui, vous pouvez annuler votre abonnement à tout
                            moment depuis votre espace client.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Comment fonctionne la facturation ?
                          </h4>
                          <p className="text-gray-500">
                            Votre carte sera débitée aujourd'hui, puis à chaque
                            renouvellement de votre abonnement.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Puis-je changer d'offre ?
                          </h4>
                          <p className="text-gray-500">
                            Vous pouvez passer à une offre supérieure à tout
                            moment. Le changement sera effectif immédiatement.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="text-xs text-gray-500 text-center">
                  Besoin d'aide ?{" "}
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:underline"
                  >
                    Contactez-nous
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
