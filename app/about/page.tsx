import Link from "next/link";
import {
  CheckCircle,
  Users,
  Building,
  GraduationCap,
  BookOpen,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Marie Laurent",
      role: "Fondatrice & CEO",
      bio: "Ancienne DRH avec 15 ans d'expérience dans la formation professionnelle, Marie a fondé Skillup Link pour révolutionner l'accès à la formation.",
      image: "/images/profile.webp",
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Technique",
      bio: "Expert en technologies éducatives, Thomas supervise le développement de notre plateforme pour offrir une expérience utilisateur optimale.",
      image: "/images/profile.webp",
    },
    {
      name: "Sophie Moreau",
      role: "Directrice Pédagogique",
      bio: "Avec un doctorat en sciences de l'éducation, Sophie veille à la qualité et à la pertinence des formations proposées sur notre plateforme.",
      image: "/images/profile.webp",
    },
    {
      name: "Alexandre Martin",
      role: "Responsable Relations Entreprises",
      bio: "Fort de son expérience dans le conseil en formation, Alexandre développe nos partenariats avec les entreprises et écoles de formation.",
      image: "/images/profile.webp",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Création de Skillup Link",
      description: "Lancement de l'idée et constitution de l'équipe fondatrice",
    },
    {
      year: "2025",
      title: "Première version de la plateforme",
      description:
        "Lancement de la version bêta avec 50 formations et 20 formateurs",
    },
    {
      year: "2025",
      title: "Levée de fonds",
      description: "2 millions d'euros levés pour accélérer le développement",
    },
    {
      year: "2025",
      title: "Expansion nationale",
      description:
        "Couverture complète du territoire français avec plus de 500 formations",
    },
    {
      year: "2025",
      title: "Internationalisation",
      description: "Ouverture aux marchés belge, suisse et canadien",
    },
    {
      year: "2025",
      title: "Intelligence artificielle",
      description:
        "Intégration de l'IA pour personnaliser les parcours de formation",
    },
  ];

  const partners = [
    {
      name: "TechCorp",
      logo: "/placeholder.svg?height=80&width=160&text=TechCorp",
    },
    {
      name: "EduGroup",
      logo: "/placeholder.svg?height=80&width=160&text=EduGroup",
    },
    {
      name: "FormationPro",
      logo: "/placeholder.svg?height=80&width=160&text=FormationPro",
    },
    {
      name: "DigitalSkills",
      logo: "/placeholder.svg?height=80&width=160&text=DigitalSkills",
    },
    {
      name: "LearnFast",
      logo: "/placeholder.svg?height=80&width=160&text=LearnFast",
    },
    {
      name: "ExpertConsult",
      logo: "/placeholder.svg?height=80&width=160&text=ExpertConsult",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto mt-[100px]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">Notre Histoire</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  À propos de Skillup Link
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez notre mission, nos valeurs et l'équipe qui fait de
                  Skillup Link la plateforme de référence pour la formation
                  professionnelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge>Notre Mission</Badge>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Révolutionner la formation professionnelle
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Chez Skillup Link, nous croyons que la formation
                  professionnelle devrait être accessible, transparente et
                  efficace pour tous. Notre mission est de créer un écosystème
                  où entreprises, écoles de formation, formateurs et apprenants
                  peuvent se connecter et collaborer sans friction.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p>
                      <span className="font-bold">Accessibilité</span> : Rendre
                      la formation professionnelle accessible à tous, quelle que
                      soit la taille de l'entreprise ou la localisation.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p>
                      <span className="font-bold">Qualité</span> : Garantir des
                      formations de haute qualité grâce à un système
                      d'évaluation transparent et rigoureux.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p>
                      <span className="font-bold">Innovation</span> : Utiliser
                      la technologie pour améliorer continuellement l'expérience
                      d'apprentissage et de formation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                  <Image
                    src="/images/mission.jpg"
                    alt="Notre mission"
                    width={300}
                    height={150}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Nos Valeurs</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ce qui nous guide au quotidien
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos valeurs fondamentales définissent notre culture
                  d'entreprise et guident chacune de nos décisions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-100 p-4 mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-500">
                    Nous visons l'excellence dans tout ce que nous faisons, de
                    la sélection des formations à l'expérience utilisateur sur
                    notre plateforme.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-100 p-4 mb-4">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-gray-500">
                    Nous croyons en la puissance de la collaboration entre tous
                    les acteurs de la formation professionnelle pour créer un
                    écosystème vertueux.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-blue-100 p-4 mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-500">
                    Nous innovons constamment pour améliorer notre plateforme et
                    offrir des solutions toujours plus adaptées aux besoins de
                    nos utilisateurs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section 
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Notre Équipe</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Les visages derrière Skillup Link
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Une équipe passionnée et expérimentée dédiée à transformer le
                  monde de la formation professionnelle.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden h-[100px] w-[100px] mx-auto ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover rounded-full w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Stats Section 
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <Badge className="mb-2">En Chiffres</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Skillup Link aujourd'hui
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    5000+
                  </h3>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Entreprises utilisatrices
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    200+
                  </h3>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Écoles partenaires
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Building className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    1000+
                  </h3>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Formateurs experts
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    500+
                  </h3>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Formations disponibles
                </p>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Timeline Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Notre Parcours</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  L'histoire de Skillup Link
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De l'idée initiale à aujourd'hui, découvrez les étapes clés de
                  notre développement.
                </p>
              </div>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10"></div>

                    {/* Content */}
                    <div className="ml-12 md:ml-0 md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                      <div className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-white bg-blue-600 rounded-full">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section 
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Nos Partenaires</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ils nous font confiance
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Skillup Link collabore avec des entreprises et organisations
                  de premier plan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Rejoignez l'aventure Skillup Link
            </h2>
            <p className="max-w-[700px] mx-auto text-xl/relaxed text-blue-100 mb-6">
              Que vous soyez une entreprise, une école de formation ou un
              formateur, rejoignez notre communauté et participez à la
              révolution de la formation professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  S'inscrire gratuitement
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-blue-800 hover:bg-blue-700 hover:text-white "
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">FAQ</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Questions fréquentes
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tout ce que vous devez savoir sur Skillup Link
                </p>
              </div>
            </div>

            <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="platform">Plateforme</TabsTrigger>
                <TabsTrigger value="business">Entreprises</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-6 space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Qu'est-ce que Skillup Link ?
                    </h3>
                    <p className="text-gray-600">
                      Skillup Link est une plateforme qui met en relation les
                      entreprises, les écoles de formation, les formateurs et
                      les consultants pour faciliter l'accès à la formation
                      professionnelle de qualité.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Comment fonctionne l'inscription sur la plateforme ?
                    </h3>
                    <p className="text-gray-600">
                      L'inscription est simple et gratuite. Vous choisissez
                      votre profil (entreprise, école ou formateur), remplissez
                      le formulaire avec vos informations et vous pouvez
                      commencer à utiliser la plateforme. Des options premium
                      sont disponibles pour accéder à toutes les
                      fonctionnalités.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Skillup Link est-il disponible à l'international ?
                    </h3>
                    <p className="text-gray-600">
                      Oui, Skillup Link est disponible en France, Belgique,
                      Suisse et Canada. Nous prévoyons d'étendre notre présence
                      à d'autres pays européens dans les prochaines années.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="platform" className="mt-6 space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Comment sont sélectionnées les formations ?
                    </h3>
                    <p className="text-gray-600">
                      Toutes les formations sont proposées par des écoles et
                      organismes vérifiés. Nous vérifions les agréments et
                      certifications. Les formations sont ensuite évaluées par
                      les utilisateurs pour garantir leur qualité.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Comment devenir formateur sur la plateforme ?
                    </h3>
                    <p className="text-gray-600">
                      Pour devenir formateur, inscrivez-vous avec le profil
                      'Formateur/Consultant', complétez votre profil avec vos
                      compétences et expériences, téléchargez votre CV et
                      choisissez votre abonnement. Votre profil sera ensuite
                      visible par les entreprises et écoles de formation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      La plateforme est-elle sécurisée ?
                    </h3>
                    <p className="text-gray-600">
                      Oui, la sécurité est notre priorité. Toutes les données
                      sont cryptées et nous respectons strictement le RGPD. Nous
                      n'utilisons vos données que pour améliorer votre
                      expérience sur la plateforme.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="business" className="mt-6 space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Quels sont les avantages pour les entreprises ?
                    </h3>
                    <p className="text-gray-600">
                      Les entreprises peuvent accéder à un large catalogue de
                      formations de qualité, trouver des formateurs experts,
                      demander des formations sur mesure et suivre les progrès
                      de leurs employés via un tableau de bord analytique.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Comment demander une formation sur mesure ?
                    </h3>
                    <p className="text-gray-600">
                      Vous pouvez soumettre une demande de formation sur mesure
                      via notre formulaire dédié. Décrivez vos besoins
                      spécifiques et nous vous mettrons en relation avec les
                      écoles et formateurs les plus adaptés à votre demande.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      Proposez-vous des tarifs pour les grandes entreprises ?
                    </h3>
                    <p className="text-gray-600">
                      Oui, nous proposons des offres personnalisées pour les
                      grandes entreprises avec des besoins spécifiques.
                      Contactez notre équipe commerciale pour discuter de vos
                      exigences et obtenir un devis sur mesure.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
