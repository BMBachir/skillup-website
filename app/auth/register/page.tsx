"use client";

import { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [userType, setUserType] = useState("entreprise");
  const router = useRouter();
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    password: "",
    address: "",
    specialties: "",
    license: "",
    cv: "",
    payment: "freemium",
    logged: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedUser = { ...formData };

    localStorage.setItem("registeredUser", JSON.stringify(savedUser));
    router.push("/pricing");
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      userType: userType,
    }));
  }, [userType]);

  return (
    <div className="container py-10 mt-[100px]">
      <div className="max-w-md lg:max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Créer un compte</h1>
          <p className="text-gray-500">
            Rejoignez notre plateforme de formation
          </p>
        </div>

        <Card className="w-3xl ">
          <CardHeader>
            <CardTitle>Je suis...</CardTitle>
            <CardDescription>
              Sélectionnez votre profil pour vous inscrire
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              defaultValue="entreprise"
              className="grid grid-cols-1 lg:grid-cols-3 gap-4"
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nom de l'entreprise</Label>
                  <Input
                    name="name"
                    placeholder="Votre entreprise"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email professionnel</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@entreprise.com"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-password">Mot de passe</Label>
                  <Input
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Adresse</Label>
                  <Input
                    name="address"
                    placeholder="Adresse de l'entreprise"
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  S'inscrire en tant qu'entreprise
                </Button>
              </form>
            )}

            {userType === "ecole" && (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="school-name">Nom de l'établissement</Label>
                  <Input
                    name="name"
                    placeholder="Nom de votre école"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-email">Email professionnel</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@ecole.com"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-password">Mot de passe</Label>
                  <Input
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-specialties">Spécialités</Label>
                  <Input
                    name="specialties"
                    placeholder="Ex: Informatique, Marketing, etc."
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-license">Numéro d'agrément</Label>
                  <Input
                    name="license"
                    placeholder="Numéro d'agrément officiel"
                    required
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  S'inscrire en tant qu'école
                </Button>
              </form>
            )}

            {userType === "formateur" && (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="trainer-name">Nom et prénom</Label>
                  <Input
                    name="name"
                    placeholder="Votre nom complet"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-password">Mot de passe</Label>
                  <Input
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-specialties">Spécialités</Label>
                  <Input
                    name="specialties"
                    placeholder="Ex: Développement web, Marketing, etc."
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trainer-cv">CV (lien ou fichier)</Label>
                  <Input
                    name="cv"
                    placeholder="Lien vers votre CV"
                    onChange={handleChange}
                  />
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
