"use client";

import { useState } from "react";
import Link from "next/link";
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
import { Building2, GraduationCap, UserRound } from "lucide-react";

export default function RegisterPage() {
  const [userType, setUserType] = useState("entreprise");

  return (
    <div className="container py-10">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Créer un compte</h1>
          <p className="text-gray-500">
            Rejoignez notre plateforme de formation
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Je suis...</CardTitle>
            <CardDescription>
              Sélectionnez votre profil pour vous inscrire
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              defaultValue="entreprise"
              className="grid grid-cols-1 gap-4"
              onValueChange={setUserType}
              value={userType}
            >
              <div>
                <RadioGroupItem
                  value="entreprise"
                  id="entreprise"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="entreprise"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Building2 className="mb-3 h-6 w-6" />
                  <span className="font-medium">Une entreprise</span>
                </Label>
              </div>

              <div>
                <RadioGroupItem
                  value="ecole"
                  id="ecole"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="ecole"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <GraduationCap className="mb-3 h-6 w-6" />
                  <span className="font-medium">Une école de formation</span>
                </Label>
              </div>

              <div>
                <RadioGroupItem
                  value="formateur"
                  id="formateur"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="formateur"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <UserRound className="mb-3 h-6 w-6" />
                  <span className="font-medium">Un formateur / consultant</span>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>

          <CardContent className="pt-6">
            {userType === "entreprise" && (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nom de l'entreprise</Label>
                  <Input
                    id="company-name"
                    placeholder="Votre entreprise"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email professionnel</Label>
                  <Input
                    id="company-email"
                    type="email"
                    placeholder="email@entreprise.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-password">Mot de passe</Label>
                  <Input id="company-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Adresse</Label>
                  <Input
                    id="company-address"
                    placeholder="Adresse de l'entreprise"
                  />
                </div>
                <Button type="submit" className="w-full">
                  S'inscrire en tant qu'entreprise
                </Button>
              </form>
            )}

            {userType === "ecole" && (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="school-name">Nom de l'établissement</Label>
                  <Input
                    id="school-name"
                    placeholder="Nom de votre école"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-email">Email professionnel</Label>
                  <Input
                    id="school-email"
                    type="email"
                    placeholder="email@ecole.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-password">Mot de passe</Label>
                  <Input id="school-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-specialties">Spécialités</Label>
                  <Input
                    id="school-specialties"
                    placeholder="Ex: Informatique, Marketing, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-license">Numéro d'agrément</Label>
                  <Input
                    id="school-license"
                    placeholder="Numéro d'agrément officiel"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  S'inscrire en tant qu'école
                </Button>
              </form>
            )}

            {userType === "formateur" && (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trainer-name">Nom et prénom</Label>
                  <Input
                    id="trainer-name"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-email">Email</Label>
                  <Input
                    id="trainer-email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-password">Mot de passe</Label>
                  <Input id="trainer-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-specialties">Spécialités</Label>
                  <Input
                    id="trainer-specialties"
                    placeholder="Ex: Développement web, Marketing, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-cv">CV (lien ou fichier)</Label>
                  <Input id="trainer-cv" placeholder="Lien vers votre CV" />
                </div>
                <Button type="submit" className="w-full">
                  S'inscrire en tant que formateur
                </Button>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col items-center gap-4">
            <div className="text-sm text-gray-500">
              Vous avez déjà un compte ?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 hover:underline"
              >
                Connexion
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
