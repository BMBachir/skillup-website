"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simuler un délai de traitement
    setTimeout(() => {
      // Simuler un succès (dans un vrai cas, cela dépendrait de la réponse de l'API)
      const success = Math.random() > 0.2; // 80% de chance de succès pour la démo

      if (success) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
        setErrorMessage(
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
        );
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormStatus("idle");
    setErrorMessage("");
  };

  const offices = [
    {
      city: "Alger",
      address: "123 Avenue de la Formation, 75008 Alger",
      phone: "+33 1 23 45 67 89",
      email: "alger@formation-connect.fr",
      hours: "Lun-Ven: 9h-18h",
    },
    {
      city: "Alger",
      address: "45 Rue de l'Apprentissage, 69002 Alger",
      phone: "+33 4 56 78 90 12",
      email: "alger@formation-connect.fr",
      hours: "Lun-Ven: 9h-18h",
    },
    {
      city: "Bordeaux",
      address: "78 Cours du Médoc, 33000 Bordeaux",
      phone: "+33 5 67 89 01 23",
      email: "bordeaux@formation-connect.fr",
      hours: "Lun-Ven: 9h-18h",
    },
  ];

  const faqs = [
    {
      question: "Comment puis-je contacter le support client ?",
      answer:
        "Vous pouvez contacter notre support client par téléphone au +33 1 23 45 67 89, par email à support@formation-connect.fr ou via le formulaire de contact sur cette page.",
    },
    {
      question: "Quel est le délai de réponse à une demande ?",
      answer:
        "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrées. Pour les demandes urgentes, nous vous recommandons de nous contacter par téléphone.",
    },
    {
      question: "Puis-je prendre rendez-vous pour une démonstration ?",
      answer:
        "Oui, vous pouvez demander une démonstration personnalisée de notre plateforme. Utilisez le formulaire de contact en sélectionnant 'Demande de démonstration' comme sujet.",
    },
    {
      question: "Avez-vous un programme de partenariat ?",
      answer:
        "Oui, nous proposons un programme de partenariat pour les entreprises et organisations qui souhaitent collaborer avec Skillup Link. Contactez-nous pour plus d'informations.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen mt-[100px]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Contact</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Contactez-nous
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre équipe est à votre disposition pour répondre à toutes
                  vos questions et vous accompagner dans vos projets de
                  formation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle>Envoyez-nous un message</CardTitle>
                    <CardDescription>
                      Remplissez le formulaire ci-dessous et nous vous
                      répondrons dans les plus brefs délais.
                    </CardDescription>
                  </CardHeader>

                  {formStatus === "success" ? (
                    <CardContent className="pt-6">
                      <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-green-800 mb-2">
                          Message envoyé avec succès !
                        </h3>
                        <p className="text-green-700 mb-4">
                          Merci de nous avoir contactés. Notre équipe vous
                          répondra dans les plus brefs délais.
                        </p>
                        <Button onClick={resetForm} variant="outline">
                          Envoyer un autre message
                        </Button>
                      </div>
                    </CardContent>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <CardContent className="space-y-4">
                        {formStatus === "error" && (
                          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-red-800 font-medium">Erreur</p>
                              <p className="text-red-600 text-sm">
                                {errorMessage}
                              </p>
                            </div>
                          </div>
                        )}

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
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input id="phone" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">
                            Entreprise / Organisation
                          </Label>
                          <Input id="company" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Sujet</Label>
                          <Select>
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Sélectionnez un sujet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="information">
                                Demande d'information
                              </SelectItem>
                              <SelectItem value="demo">
                                Demande de démonstration
                              </SelectItem>
                              <SelectItem value="partnership">
                                Partenariat
                              </SelectItem>
                              <SelectItem value="support">
                                Support technique
                              </SelectItem>
                              <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Comment pouvons-nous vous aider ?"
                            className="min-h-[150px]"
                            required
                          />
                        </div>
                      </CardContent>

                      <CardFooter className="flex flex-col space-y-4">
                        <Button
                          type="submit"
                          className="w-full"
                          disabled={formStatus === "submitting"}
                        >
                          {formStatus === "submitting" ? (
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
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Envoyer le message
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-gray-500 text-center">
                          En soumettant ce formulaire, vous acceptez notre{" "}
                          <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            politique de confidentialité
                          </Link>
                          .
                        </p>
                      </CardFooter>
                    </form>
                  )}
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>
                  <p className="text-gray-500 mb-6">
                    N'hésitez pas à nous contacter par téléphone, email ou en
                    visitant l'un de nos bureaux.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Téléphone</h3>
                            <p className="text-gray-500">+213 666 43 65 60</p>
                            <p className="text-sm text-gray-500">
                              Du samedi au jeudi, 8:30h-17h
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-gray-500">
                              Skilluplink213@gmail.com
                            </p>
                            <p className="text-sm text-gray-500">
                              Réponse sous 24h ouvrées
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {/*
                <div>
                  <h2 className="text-2xl font-bold mb-4">Nos bureaux</h2>
                  <Tabs
                    defaultValue={offices[0].city.toLowerCase()}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      {offices.map((office) => (
                        <TabsTrigger
                          key={office.city}
                          value={office.city.toLowerCase()}
                        >
                          {office.city}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {offices.map((office) => (
                      <TabsContent
                        key={office.city}
                        value={office.city.toLowerCase()}
                        className="mt-6"
                      >
                        <Card>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="aspect-video overflow-hidden rounded-md bg-gray-100">
                                <img
                                  src={`/placeholder.svg?height=300&width=600&text=Bureau+${office.city}`}
                                  alt={`Bureau de ${office.city}`}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h3 className="font-medium">Adresse</h3>
                                    <p className="text-gray-500">
                                      {office.address}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h3 className="font-medium">Horaires</h3>
                                    <p className="text-gray-500">
                                      {office.hours}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h3 className="font-medium">Téléphone</h3>
                                    <p className="text-gray-500">
                                      {office.phone}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-gray-500">
                                      {office.email}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-2">
                                <Button variant="outline" className="w-full">
                                  Voir sur la carte
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
                 */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">FAQ</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Questions fréquentes
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Retrouvez les réponses aux questions les plus fréquemment
                  posées
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <Button>Contactez-nous directement</Button>
            </div>
          </div>
        </section>

        {/* Map Section 
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Nous trouver
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Visitez notre siège social à Alger
                </p>
              </div>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=1200&text=Carte"
                alt="Carte du siège social"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>*/}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Prêt à transformer votre approche de la formation ?
            </h2>
            <p className="max-w-[700px] mx-auto text-xl/relaxed text-blue-100 mb-6">
              Rejoignez Skillup Link dès aujourd'hui et découvrez comment notre
              plateforme peut répondre à vos besoins en formation
              professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  S'inscrire gratuitement
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  className="border-white text-blue-800 hover:text-white hover:bg-blue-700"
                >
                  Découvrir nos offres
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
