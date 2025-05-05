"use client";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

const formateurs = [
  {
    id: 1,
    name: "Sophie Martin",
    title: "Experte en Développement Web",
    location: "Paris",
    experience: "8 ans",
    rating: 4.7,
    specialties: ["JavaScript", "React", "Node.js"],
    description:
      "Formatrice passionnée spécialisée dans les technologies web modernes avec une approche pédagogique axée sur la pratique.",
    reviews: [
      {
        name: "Jean Dupont",
        rating: 5,
        comment: "Excellente formatrice, très claire et précise.",
        date: "2024-12-01",
        avatar: "/avatars/jean.jpg",
      },
      {
        name: "Marie Curie",
        rating: 4,
        comment: "Très bon contenu, quelques points à améliorer.",
        date: "2024-11-15",
        avatar: "/avatars/marie.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Thomas Dubois",
    title: "Consultant en Data Science",
    location: "Lyon",
    experience: "12 ans",
    rating: 4.9,
    specialties: ["Python", "Machine Learning", "Big Data"],
    description:
      "Expert en analyse de données et intelligence artificielle avec une expérience significative dans l'industrie et l'enseignement.",
    reviews: [
      {
        name: "Jean Dupont",
        rating: 5,
        comment: "Excellente formatrice, très claire et précise.",
        date: "2024-12-01",
        avatar: "/avatars/jean.jpg",
      },
      {
        name: "Marie Curie",
        rating: 4,
        comment: "Très bon contenu, quelques points à améliorer.",
        date: "2024-11-15",
        avatar: "/avatars/marie.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Camille Leroy",
    title: "Formatrice Marketing Digital",
    location: "Bordeaux",
    experience: "6 ans",
    rating: 4.5,
    specialties: ["SEO", "Réseaux sociaux", "Content Marketing"],
    description:
      "Spécialiste en stratégies marketing digitales innovantes avec un parcours dans des agences de renom.",
    reviews: [
      {
        name: "Jean Dupont",
        rating: 5,
        comment: "Excellente formatrice, très claire et précise.",
        date: "2024-12-01",
        avatar: "/avatars/jean.jpg",
      },
      {
        name: "Marie Curie",
        rating: 4,
        comment: "Très bon contenu, quelques points à améliorer.",
        date: "2024-11-15",
        avatar: "/avatars/marie.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Alexandre Petit",
    title: "Expert en Cybersécurité",
    location: "Lille",
    experience: "10 ans",
    rating: 4.8,
    specialties: ["Sécurité réseau", "Ethical Hacking", "RGPD"],
    description:
      "Consultant et formateur en sécurité informatique avec une expertise reconnue dans la protection des systèmes d'information.",
    reviews: [
      {
        name: "Jean Dupont",
        rating: 5,
        comment: "Excellente formatrice, très claire et précise.",
        date: "2024-12-01",
        avatar: "/avatars/jean.jpg",
      },
      {
        name: "Marie Curie",
        rating: 4,
        comment: "Très bon contenu, quelques points à améliorer.",
        date: "2024-11-15",
        avatar: "/avatars/marie.jpg",
      },
    ],
  },
];

export const dynamic = "force-dynamic";
type RegisteredUser = {
  payment: string;
  userType?: string;
  name?: string;
};
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const productId = parseInt(id);
  const formateur = formateurs.find((f) => f.id === productId);

  if (!formateur) {
    notFound();
  }

  function renderStars(rating: number) {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    return <span>{stars.join("")}</span>;
  }
  const [storedUser, setStoredUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("registeredUser");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);
  return (
    <div className="max-w-2xl mx-auto space-y-6 mt-[150px]">
      {/* Formateur Profile */}
      <div className="border rounded-lg p-6 shadow">
        <h2
          className={`text-gray-900 mb-2 text-2xl ${
            !storedUser || storedUser?.payment?.toLowerCase() === "freemium"
              ? "blur-sm"
              : ""
          } transition-all cursor-pointer`}
        >
          {formateur.name}
        </h2>
        <p className="text-gray-600">{formateur.title}</p>
        <div
          className={`text-gray-900 mb-2 ${
            !storedUser || storedUser?.payment?.toLowerCase() === "freemium"
              ? "blur-sm"
              : ""
          } transition-all cursor-pointer`}
        >
          📍 {formateur.location} &middot; {formateur.experience} d'expérience
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          {renderStars(formateur.rating)}
          <span className="ml-2">{formateur.rating.toFixed(1)}</span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Spécialités :</h3>
          <ul className="list-disc list-inside text-gray-700">
            {formateur.specialties.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>
        <p
          className={`text-gray-900 mb-2 ${
            !storedUser || storedUser?.payment?.toLowerCase() === "freemium"
              ? "blur-sm"
              : ""
          } transition-all cursor-pointer`}
        >
          {formateur.description}
        </p>
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Avis :</h3>
        {formateur.reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    {renderStars(review.rating)}
                    <span className="ml-2">{review.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-400">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
