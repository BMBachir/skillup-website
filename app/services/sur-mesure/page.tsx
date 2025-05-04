"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
type RegisteredUser = {
  payment: string;
  userType?: string;
  name?: string;
};

export default function SurMesurePage() {
  const [storedUser, setStoredUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("registeredUser");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!storedUser || storedUser.payment !== "Premium") {
      toast.error(
        "Veuillez souscrire à l'offre premium pour envoyer une demande."
      );
      return;
    }

    // ✅ Proceed with submission
    toast.success("Votre demande a été envoyée avec succès. ✅");
  };

  return (
    <div className="container py-10 mt-[4rem] ">
      <ToastContainer position="bottom-right" />
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Formations sur mesure & Projets</h1>
        <p className="text-gray-500">
          Créez des programmes de formation adaptés à vos besoins spécifiques ou
          confiez-nous vos projets
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Pourquoi choisir une formation sur mesure ?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Contenu personnalisé</h3>
                <p className="text-gray-500">
                  Des programmes adaptés aux besoins spécifiques de votre
                  entreprise et de vos collaborateurs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Flexibilité</h3>
                <p className="text-gray-500">
                  Des horaires et formats adaptés à vos contraintes
                  organisationnelles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Expertise ciblée</h3>
                <p className="text-gray-500">
                  Des formateurs spécialisés dans votre secteur d'activité et
                  vos problématiques.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Suivi personnalisé</h3>
                <p className="text-gray-500">
                  Un accompagnement sur mesure pour garantir l'atteinte de vos
                  objectifs.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Notre processus</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium">Analyse de vos besoins</h3>
                <p className="text-gray-500">
                  Nous étudions vos objectifs et contraintes spécifiques.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium">Conception du programme</h3>
                <p className="text-gray-500">
                  Nous élaborons un contenu pédagogique adapté.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium">Sélection des formateurs</h3>
                <p className="text-gray-500">
                  Nous choisissons les experts les plus qualifiés.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-medium">Mise en œuvre et suivi</h3>
                <p className="text-gray-500">
                  Nous assurons la réalisation et l'évaluation de la formation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Demande de formation sur mesure</CardTitle>
              <CardDescription>
                Décrivez vos besoins et nous vous contacterons rapidement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Nom de l'entreprise</Label>
                  <Input id="company" placeholder="Votre entreprise" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nom et prénom</Label>
                  <Input id="name" placeholder="Votre nom" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="Votre numéro de téléphone" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type de demande</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Sélectionnez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formation">
                        Formation sur mesure
                      </SelectItem>
                      <SelectItem value="projet">Projet à réaliser</SelectItem>
                      <SelectItem value="conseil">
                        Mission de conseil
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description de votre besoin
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre projet ou vos besoins en formation..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  onClick={(e) => handleSubmit(e)}
                >
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
