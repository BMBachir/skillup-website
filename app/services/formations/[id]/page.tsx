"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  StarHalf,
  Clock,
  Calendar,
  Users,
  GraduationCap,
  Building,
  CheckCircle,
  MessageSquare,
  Share2,
  BookOpen,
  Award,
  FileText,
  ChevronRight,
  Phone,
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToastContainer, toast } from "react-toastify";
// Données simulées pour les formations
const formationsData = [
  {
    id: "1",
    title: "Développement Web Full Stack",
    school: "École Numérique Alger",
    schoolLogo: "/placeholder.svg?height=60&width=60&text=ENP",
    rating: 4.8,
    reviewCount: 124,
    duration: "6 mois",
    format: "Présentiel et distanciel",
    startDate: "15 juin 2025",
    category: "Développement",
    level: "Intermédiaire à avancé",
    price: "4 500€",
    priceDetails: "Financement CPF disponible",
    certifications: ["Certification RNCP niveau 6", "Certification JavaScript"],
    description:
      "Cette formation complète vous permettra de maîtriser l'ensemble des technologies nécessaires au développement web moderne. Du front-end au back-end, vous apprendrez à concevoir, développer et déployer des applications web professionnelles et performantes.",
    objectives: [
      "Maîtriser HTML, CSS et JavaScript",
      "Développer des applications avec React.js",
      "Créer des API RESTful avec Node.js",
      "Gérer des bases de données SQL et NoSQL",
      "Déployer des applications sur le cloud",
    ],
    prerequisites: [
      "Connaissances de base en programmation",
      "Familiarité avec l'environnement web",
      "Ordinateur personnel avec accès internet",
    ],
    targetAudience: [
      "Développeurs junior",
      "Reconversion professionnelle",
      "Designers web souhaitant élargir leurs compétences",
    ],
    image: "/images/formationImg01.png",
    curriculum: [
      {
        title: "Module 1: Fondamentaux du développement web",
        duration: "4 semaines",
        topics: [
          "HTML5 avancé",
          "CSS3 et Sass",
          "JavaScript ES6+",
          "Responsive design",
        ],
      },
      {
        title: "Module 2: Front-end avec React",
        duration: "6 semaines",
        topics: [
          "Fondamentaux de React",
          "État et props",
          "Hooks",
          "Redux",
          "Tests avec Jest",
        ],
      },
      {
        title: "Module 3: Back-end avec Node.js",
        duration: "6 semaines",
        topics: ["Express.js", "API RESTful", "Authentification", "Sécurité"],
      },
      {
        title: "Module 4: Bases de données",
        duration: "4 semaines",
        topics: [
          "SQL avec PostgreSQL",
          "NoSQL avec MongoDB",
          "ORM avec Sequelize",
          "Modélisation de données",
        ],
      },
      {
        title: "Module 5: Projet final",
        duration: "4 semaines",
        topics: [
          "Conception d'application",
          "Développement full stack",
          "Déploiement",
          "Présentation",
        ],
      },
    ],
    instructors: [
      {
        id: "1",
        name: "Sophie Martin",
        role: "Lead Developer & Formatrice",
        image: "/placeholder.svg?height=100&width=100&text=SM",
        experience: "8 ans",
      },
      {
        id: "2",
        name: "Thomas Dubois",
        role: "Expert React & Node.js",
        image: "/placeholder.svg?height=100&width=100&text=TD",
        experience: "10 ans",
      },
    ],
    reviews: [
      {
        id: "1",
        name: "Jean Dupont",
        rating: 5,
        date: "12/03/2025",
        comment:
          "Formation exceptionnelle ! Le contenu est à jour et les formateurs sont très compétents. J'ai trouvé un emploi comme développeur front-end un mois après la fin de la formation.",
        avatar: "/placeholder.svg?height=40&width=40&text=JD",
      },
      {
        id: "2",
        name: "Marie Leroy",
        rating: 4,
        date: "28/02/2025",
        comment:
          "Très bonne formation avec un contenu riche et bien structuré. Les projets pratiques sont particulièrement utiles. Seul bémol : le rythme est parfois un peu intense.",
        avatar: "/placeholder.svg?height=40&width=40&text=ML",
      },
      {
        id: "3",
        name: "Alexandre Petit",
        rating: 5,
        date: "15/02/2025",
        comment:
          "Je recommande vivement cette formation ! Les instructeurs sont disponibles et pédagogues. Le programme est complet et m'a permis d'acquérir toutes les compétences nécessaires pour mon nouveau poste.",
        avatar: "/placeholder.svg?height=40&width=40&text=AP",
      },
    ],
    relatedFormations: [
      {
        id: "2",
        title: "Data Science & Intelligence Artificielle",
        school: "DataTech Academy",
        image: "/placeholder.svg?height=150&width=300&text=Data",
        rating: 4.7,
      },
      {
        id: "3",
        title: "UX/UI Design",
        school: "Design School Alger",
        image: "/placeholder.svg?height=150&width=300&text=UX/UI",
        rating: 4.9,
      },
      {
        id: "4",
        title: "DevOps & Cloud Computing",
        school: "Cloud Institute",
        image: "/placeholder.svg?height=150&width=300&text=DevOps",
        rating: 4.6,
      },
    ],
  },
  {
    id: "2",
    title: "Data Science & Intelligence Artificielle",
    school: "DataTech Academy",
    schoolLogo: "/placeholder.svg?height=60&width=60&text=DTA",
    rating: 4.7,
    reviewCount: 98,
    duration: "8 mois",
    format: "Présentiel et distanciel",
    startDate: "10 septembre 2025",
    category: "Data",
    level: "Intermédiaire à avancé",
    price: "6 800€",
    priceDetails: "Financement CPF disponible",
    certifications: [
      "Certification RNCP niveau 7",
      "Certification Python Data Science",
    ],
    description:
      "Cette formation complète en Data Science et Intelligence Artificielle vous permettra d'acquérir les compétences nécessaires pour analyser des données complexes, construire des modèles prédictifs et développer des solutions d'IA innovantes pour répondre aux défis business actuels.",
    objectives: [
      "Maîtriser Python pour l'analyse de données",
      "Concevoir et implémenter des algorithmes de machine learning",
      "Développer des modèles de deep learning",
      "Traiter et analyser des big data",
      "Déployer des solutions d'IA en production",
    ],
    prerequisites: [
      "Connaissances de base en programmation",
      "Notions de mathématiques (algèbre linéaire, statistiques)",
      "Ordinateur personnel avec accès internet",
    ],
    targetAudience: [
      "Développeurs souhaitant se spécialiser en IA",
      "Analystes de données",
      "Professionnels en reconversion",
    ],
    image: "/images/formationImg02.png",
    curriculum: [
      {
        title: "Module 1: Fondamentaux de la Data Science",
        duration: "4 semaines",
        topics: [
          "Python pour la data science",
          "NumPy et Pandas",
          "Visualisation de données",
          "Statistiques appliquées",
        ],
      },
      {
        title: "Module 2: Machine Learning",
        duration: "8 semaines",
        topics: [
          "Apprentissage supervisé",
          "Apprentissage non supervisé",
          "Validation de modèles",
          "Scikit-learn",
        ],
      },
      {
        title: "Module 3: Deep Learning",
        duration: "6 semaines",
        topics: [
          "Réseaux de neurones",
          "TensorFlow et Keras",
          "CNN",
          "RNN et LSTM",
        ],
      },
      {
        title: "Module 4: Big Data",
        duration: "4 semaines",
        topics: [
          "Hadoop",
          "Spark",
          "Traitement distribué",
          "Cloud computing pour la data",
        ],
      },
      {
        title: "Module 5: Projet final",
        duration: "6 semaines",
        topics: [
          "Conception de solution IA",
          "Développement",
          "Déploiement",
          "Présentation",
        ],
      },
    ],
    instructors: [
      {
        id: "3",
        name: "Pierre Moreau",
        role: "Data Scientist & Formateur",
        image: "/placeholder.svg?height=100&width=100&text=PM",
        experience: "12 ans",
      },
      {
        id: "4",
        name: "Émilie Laurent",
        role: "Experte en Deep Learning",
        image: "/placeholder.svg?height=100&width=100&text=EL",
        experience: "7 ans",
      },
    ],
    reviews: [
      {
        id: "4",
        name: "Julien Bernard",
        rating: 5,
        date: "05/03/2025",
        comment:
          "Formation exceptionnelle avec un contenu très complet. Les projets pratiques sont particulièrement pertinents et les formateurs sont de vrais experts dans leur domaine.",
        avatar: "/placeholder.svg?height=40&width=40&text=JB",
      },
      {
        id: "5",
        name: "Sophie Dubois",
        rating: 4,
        date: "18/02/2025",
        comment:
          "Très bonne formation qui m'a permis de me reconvertir dans la data science. Le rythme est soutenu mais le support pédagogique est excellent.",
        avatar: "/placeholder.svg?height=40&width=40&text=SD",
      },
    ],
    relatedFormations: [
      {
        id: "1",
        title: "Développement Web Full Stack",
        school: "École Numérique Alger",
        image: "/placeholder.svg?height=150&width=300&text=Web",
        rating: 4.8,
      },
      {
        id: "5",
        title: "Big Data & Cloud Computing",
        school: "DataTech Academy",
        image: "/placeholder.svg?height=150&width=300&text=BigData",
        rating: 4.5,
      },
      {
        id: "6",
        title: "Business Intelligence",
        school: "Business School Alger",
        image: "/placeholder.svg?height=150&width=300&text=BI",
        rating: 4.6,
      },
    ],
  },
  {
    id: "3",
    title: "Marketing Digital",
    school: "Business School Alger",
    schoolLogo: "/placeholder.svg?height=60&width=60&text=BSL",
    rating: 4.6,
    reviewCount: 87,
    duration: "3 mois",
    format: "Présentiel et distanciel",
    startDate: "5 juillet 2025",
    category: "Marketing",
    level: "Débutant à intermédiaire",
    price: "2 900€",
    priceDetails: "Financement CPF disponible",
    certifications: [
      "Certification RNCP niveau 5",
      "Certification Google Digital Marketing",
    ],
    description:
      "Cette formation en Marketing Digital vous permettra d'acquérir les compétences nécessaires pour concevoir et mettre en œuvre des stratégies marketing efficaces dans l'environnement numérique. Vous maîtriserez les différents leviers du marketing digital et serez capable d'optimiser la présence en ligne d'une entreprise.",
    objectives: [
      "Élaborer une stratégie de marketing digital",
      "Maîtriser le SEO et le SEA",
      "Gérer des campagnes sur les réseaux sociaux",
      "Analyser les performances marketing",
      "Créer du contenu digital engageant",
    ],
    prerequisites: [
      "Aucun prérequis technique spécifique",
      "Intérêt pour le marketing et la communication",
      "Ordinateur personnel avec accès internet",
    ],
    targetAudience: [
      "Professionnels du marketing traditionnel",
      "Entrepreneurs et indépendants",
      "Débutants en reconversion professionnelle",
    ],
    image: "/images/formationImg03.png",
    curriculum: [
      {
        title: "Module 1: Fondamentaux du marketing digital",
        duration: "2 semaines",
        topics: [
          "Écosystème digital",
          "Comportement des consommateurs en ligne",
          "Stratégie de contenu",
          "Inbound marketing",
        ],
      },
      {
        title: "Module 2: SEO et SEA",
        duration: "3 semaines",
        topics: [
          "Référencement naturel",
          "Google Ads",
          "Optimisation on-page et off-page",
          "Analyse de mots-clés",
        ],
      },
      {
        title: "Module 3: Social Media Marketing",
        duration: "3 semaines",
        topics: [
          "Stratégie sur les réseaux sociaux",
          "Facebook & Instagram Ads",
          "LinkedIn Marketing",
          "Community management",
        ],
      },
      {
        title: "Module 4: Analytics et Data",
        duration: "2 semaines",
        topics: [
          "Google Analytics",
          "Tableaux de bord",
          "KPIs",
          "Optimisation des conversions",
        ],
      },
      {
        title: "Module 5: Projet final",
        duration: "2 semaines",
        topics: [
          "Élaboration d'une stratégie complète",
          "Mise en œuvre",
          "Analyse des résultats",
          "Présentation",
        ],
      },
    ],
    instructors: [
      {
        id: "5",
        name: "Camille Leroy",
        role: "Consultante en Marketing Digital",
        image: "/placeholder.svg?height=100&width=100&text=CL",
        experience: "9 ans",
      },
      {
        id: "6",
        name: "Antoine Mercier",
        role: "Expert SEO & Analytics",
        image: "/placeholder.svg?height=100&width=100&text=AM",
        experience: "6 ans",
      },
    ],
    reviews: [
      {
        id: "7",
        name: "Laura Martin",
        rating: 5,
        date: "22/02/2025",
        comment:
          "Formation très complète qui m'a permis de me mettre à niveau rapidement sur tous les aspects du marketing digital. Les cas pratiques sont très pertinents.",
        avatar: "/placeholder.svg?height=40&width=40&text=LM",
      },
      {
        id: "8",
        name: "Thomas Roux",
        rating: 4,
        date: "15/01/2025",
        comment:
          "Excellente formation avec des intervenants de qualité. J'ai particulièrement apprécié les modules sur le SEO et les réseaux sociaux qui sont très complets.",
        avatar: "/placeholder.svg?height=40&width=40&text=TR",
      },
    ],
    relatedFormations: [
      {
        id: "7",
        title: "Community Management",
        school: "Business School Alger",
        image: "/placeholder.svg?height=150&width=300&text=CM",
        rating: 4.7,
      },
      {
        id: "8",
        title: "E-commerce & Stratégie Digitale",
        school: "Digital Business School",
        image: "/placeholder.svg?height=150&width=300&text=Ecom",
        rating: 4.5,
      },
      {
        id: "9",
        title: "Content Marketing",
        school: "Content Academy",
        image: "/placeholder.svg?height=150&width=300&text=Content",
        rating: 4.8,
      },
    ],
  },
  {
    id: "4",
    title: "Cybersécurité",
    school: "Institut de Sécurité Informatique",
    schoolLogo: "/placeholder.svg?height=60&width=60&text=ISI",
    rating: 4.9,
    reviewCount: 76,
    duration: "5 mois",
    format: "Présentiel et distanciel",
    startDate: "20 août 2025",
    category: "Sécurité",
    level: "Intermédiaire à avancé",
    price: "5 200€",
    priceDetails: "Financement CPF disponible",
    certifications: [
      "Certification RNCP niveau 6",
      "Certification CEH",
      "Certification CompTIA Security+",
    ],
    description:
      "Cette formation intensive en cybersécurité vous permettra d'acquérir les compétences nécessaires pour protéger les systèmes d'information contre les menaces et les attaques. Vous apprendrez à identifier les vulnérabilités, à mettre en place des solutions de sécurité et à gérer les incidents.",
    objectives: [
      "Comprendre les principes fondamentaux de la cybersécurité",
      "Identifier et évaluer les vulnérabilités des systèmes",
      "Mettre en place des solutions de sécurité adaptées",
      "Gérer les incidents de sécurité",
      "Maîtriser les aspects légaux et réglementaires",
    ],
    prerequisites: [
      "Connaissances de base en réseaux et systèmes",
      "Notions de programmation",
      "Ordinateur personnel avec accès internet",
    ],
    targetAudience: [
      "Administrateurs systèmes et réseaux",
      "Développeurs souhaitant se spécialiser en sécurité",
      "Professionnels IT en reconversion",
    ],
    image: "/images/formationImg04.jpg",
    curriculum: [
      {
        title: "Module 1: Fondamentaux de la cybersécurité",
        duration: "3 semaines",
        topics: [
          "Principes de sécurité",
          "Cryptographie",
          "Gestion des identités",
          "Sécurité des réseaux",
        ],
      },
      {
        title: "Module 2: Sécurité offensive",
        duration: "4 semaines",
        topics: [
          "Ethical hacking",
          "Tests d'intrusion",
          "Analyse de vulnérabilités",
          "Social engineering",
        ],
      },
      {
        title: "Module 3: Sécurité défensive",
        duration: "4 semaines",
        topics: [
          "Firewalls et IDS/IPS",
          "SIEM",
          "Sécurité du cloud",
          "Sécurité des endpoints",
        ],
      },
      {
        title: "Module 4: Gestion des incidents",
        duration: "3 semaines",
        topics: [
          "Détection d'incidents",
          "Analyse forensique",
          "Réponse aux incidents",
          "Continuité d'activité",
        ],
      },
      {
        title: "Module 5: Projet final",
        duration: "4 semaines",
        topics: [
          "Audit de sécurité complet",
          "Mise en place de solutions",
          "Documentation",
          "Présentation",
        ],
      },
    ],
    instructors: [
      {
        id: "7",
        name: "Alexandre Petit",
        role: "Expert en Cybersécurité",
        image: "/placeholder.svg?height=100&width=100&text=AP",
        experience: "15 ans",
      },
      {
        id: "8",
        name: "Julie Renard",
        role: "Spécialiste en Sécurité Cloud",
        image: "/placeholder.svg?height=100&width=100&text=JR",
        experience: "8 ans",
      },
    ],
    reviews: [
      {
        id: "10",
        name: "Nicolas Blanc",
        rating: 5,
        date: "10/03/2025",
        comment:
          "Formation exceptionnelle avec un contenu très technique et à jour. Les labs pratiques sont particulièrement formateurs et les instructeurs sont de vrais experts.",
        avatar: "/placeholder.svg?height=40&width=40&text=NB",
      },
      {
        id: "11",
        name: "Aurélie Dumont",
        rating: 5,
        date: "28/02/2025",
        comment:
          "La meilleure formation en cybersécurité que j'ai suivie. Le programme est complet et couvre tous les aspects essentiels. J'ai pu trouver un poste de Security Engineer dès la fin de la formation.",
        avatar: "/placeholder.svg?height=40&width=40&text=AD",
      },
    ],
    relatedFormations: [
      {
        id: "10",
        title: "Administration Systèmes et Réseaux",
        school: "Institut de Sécurité Informatique",
        image: "/placeholder.svg?height=150&width=300&text=SysAdmin",
        rating: 4.7,
      },
      {
        id: "11",
        title: "Cloud Security",
        school: "Cloud Institute",
        image: "/placeholder.svg?height=150&width=300&text=CloudSec",
        rating: 4.8,
      },
      {
        id: "1",
        title: "Développement Web Full Stack",
        school: "École Numérique Alger",
        image: "/placeholder.svg?height=150&width=300&text=Web",
        rating: 4.8,
      },
    ],
  },
];

export default function FormationDetailPage() {
  const { id } = useParams();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Trouver la formation correspondante à l'ID
  const formation =
    formationsData.find((f) => f.id === id) || formationsData[0];

  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  type RegisteredUser = {
    payment: string;
    userType?: string;
    name?: string;
  };

  const [storedUser, setStoredUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("registeredUser");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);

  const handleSubmit = () => {
    if (!storedUser || storedUser.payment !== "Premium") {
      toast.error(
        "Veuillez souscrire à l'offre premium pour S'inscrire à cette formation."
      );
      return;
    }

    toast.success("Votre inscription a été envoyée avec succès. ✅");
  };
  return (
    <div className="container py-10">
      <ToastContainer position="bottom-right" />
      <div className="mb-6">
        <Link
          href="/services/formations"
          className="text-blue-600 hover:underline flex items-center"
        >
          <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
          Retour aux formations
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-8">
          {/* En-tête de la formation */}
          <div>
            <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 mb-6">
              <img
                src={formation.image || "/placeholder.svg"}
                alt={formation.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <Badge className="mb-2">{formation.category}</Badge>
                <h1 className="text-3xl font-bold mb-2">{formation.title}</h1>
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    {renderStars(formation.rating)}
                    <span className="ml-2 text-sm font-medium">
                      {formation.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({formation.reviewCount} avis)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{formation.school}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{formation.duration}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Niveau {formation.level}</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex">
                <Button variant="outline" size="icon" className="mr-2">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Onglets d'information */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="programme">Programme</TabsTrigger>
              <TabsTrigger value="formateurs">Formateurs</TabsTrigger>
              <TabsTrigger value="avis">Avis</TabsTrigger>
            </TabsList>

            {/* Onglet Description */}
            <TabsContent value="description" className="space-y-6 pt-4">
              <div>
                <h2 className="text-xl font-bold mb-3">
                  À propos de cette formation
                </h2>
                <p className="text-gray-700">{formation.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">
                  Objectifs de la formation
                </h3>
                <ul className="space-y-2">
                  {formation.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Prérequis</h3>
                  <ul className="space-y-2">
                    {formation.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">Public cible</h3>
                  <ul className="space-y-2">
                    {formation.targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {formation.certifications.map((certification, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Award className="h-3 w-3" />
                      {certification}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Onglet Programme */}
            <TabsContent value="programme" className="space-y-6 pt-4">
              <div>
                <h2 className="text-xl font-bold mb-3">
                  Programme de la formation
                </h2>
                <p className="text-gray-700 mb-6">
                  Ce programme est conçu pour vous permettre d'acquérir
                  progressivement toutes les compétences nécessaires, avec une
                  approche équilibrée entre théorie et pratique.
                </p>

                <div className="space-y-6">
                  {formation.curriculum.map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold">{module.title}</h3>
                        <Badge variant="outline">{module.duration}</Badge>
                      </div>
                      <ul className="space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">
                  Méthodes pédagogiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                      <h4 className="font-medium">Cours théoriques</h4>
                      <p className="text-sm text-gray-500">
                        Enseignement des concepts fondamentaux
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FileText className="h-8 w-8 text-blue-600 mb-2" />
                      <h4 className="font-medium">Travaux pratiques</h4>
                      <p className="text-sm text-gray-500">
                        Mise en application des connaissances
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-blue-600 mb-2" />
                      <h4 className="font-medium">Projets en groupe</h4>
                      <p className="text-sm text-gray-500">
                        Collaboration et mise en situation réelle
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Onglet Formateurs */}
            <TabsContent value="formateurs" className="space-y-6 pt-4">
              <div>
                <h2 className="text-xl font-bold mb-3">Équipe pédagogique</h2>
                <p className="text-gray-700 mb-6">
                  Nos formateurs sont des professionnels expérimentés,
                  passionnés par la transmission de leur savoir et leur
                  expertise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formation.instructors.map((instructor) => (
                    <Card key={instructor.id}>
                      <CardContent
                        className={`text-gray-500 p-6 ${
                          !storedUser ||
                          storedUser?.payment?.toLowerCase() === "freemium"
                            ? "blur-sm"
                            : ""
                        } transition-all cursor-pointer`}
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={instructor.image || "/placeholder.svg"}
                            alt={instructor.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-bold text-lg">
                              {instructor.name}
                            </h3>
                            <p className="text-blue-600">{instructor.role}</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <GraduationCap className="h-4 w-4 mr-1" />
                              <span>{instructor.experience} d'expérience</span>
                            </div>
                            <Button
                              variant="link"
                              className="p-0 h-auto mt-2 text-blue-600"
                            >
                              Voir le profil complet
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Onglet Avis */}
            <TabsContent value="avis" className="space-y-6 pt-4">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Avis des participants</h2>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(formation.rating)}
                    </div>
                    <span className="font-bold">
                      {formation.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({formation.reviewCount} avis)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {formation.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                            />
                            <AvatarFallback>
                              {review.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{review.name}</h3>
                              <span className="text-sm text-gray-500">
                                {review.date}
                              </span>
                            </div>
                            <div className="flex my-1">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-gray-700 text-sm">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">Voir tous les avis</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Formations similaires */}
          <div>
            <h2 className="text-xl font-bold mb-4">Formations similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {formation.relatedFormations.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/formations/${related.id}`}
                >
                  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {related.school}
                      </p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm ml-1">
                          {related.rating.toFixed(1)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne latérale */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            {/* Carte d'inscription */}
            <Card className="border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">{formation.level}</CardTitle>
                <CardDescription>{formation.priceDetails}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3 space-y-4">
                <div
                  className={` space-y-2 ${
                    !storedUser ||
                    storedUser?.payment?.toLowerCase() === "freemium"
                      ? "blur-sm"
                      : ""
                  } transition-all cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Date de début</p>
                      <p className="text-sm text-gray-500">
                        {formation.startDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-sm text-gray-500">
                        {formation.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Format</p>
                      <p className="text-sm text-gray-500">
                        {formation.format}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div
                  className={` flex items-center gap-3 text-gray-500 mb-2 ${
                    !storedUser ||
                    storedUser?.payment?.toLowerCase() === "freemium"
                      ? "blur-sm"
                      : ""
                  } transition-all cursor-pointer`}
                >
                  <img
                    src={formation.schoolLogo || "/placeholder.svg"}
                    alt={formation.school}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Dispensé par</p>
                    <p className="text-sm">{formation.school}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button onClick={handleSubmit} className="w-full">
                  S'inscrire à cette formation
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contacter l'organisme
                </Button>
              </CardFooter>
            </Card>

            {/* Carte de partage (mobile) */}
            <Card className="md:hidden">
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <Button variant="outline" className="flex-1 mr-2">
                    <Share2 className="mr-2 h-4 w-4" />
                    Partager
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Sauvegarder
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Statistiques de la formation */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Taux de satisfaction</span>
                      <span className="text-sm font-medium">96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">
                        Taux d'insertion professionnelle
                      </span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Taux de complétion</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Besoin d'aide */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm text-gray-500 mb-4">
                  Vous avez des questions sur cette formation ? Notre équipe est
                  là pour vous aider.
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Nous appeler
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
