import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin ScrollTrigger pour pouvoir l'utiliser
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Références pour cibler les éléments à animer
  const heroRef = useRef(null);       // le bloc principal (haut de page)
  const itemsRef = useRef([]);        // chaque carte de jus
  const containerRef = useRef(null);  // le conteneur global des cartes

  useEffect(() => {

    // 🎬 1. Animation GSAP pour le Hero (haut de page)
    // → Joue automatiquement au chargement, sans scroll
    const heroTl = gsap.timeline();

    heroTl.fromTo(
      heroRef.current,          // Élément ciblé : la section "hero"
      {
        // État de départ avant animation :
        opacity: 0,             // invisible
        y: -80,                 // décalé vers le haut
        scale: 0.85,            // légèrement plus petit
        rotationX: 10           // incliné en 3D
      },
      {
        // État final après animation :
        opacity: 1,             // devient visible
        y: 0,                   // revient à sa position normale
        scale: 1,               // taille normale
        rotationX: 0,           // plus d'inclinaison
        duration: 1.5,          // durée totale = 1,5s
        ease: "power3.out",     // effet d’accélération fluide
        delay: 0.5              // démarre après 0,5s
      }
    );
    // 👉 Résultat : le hero apparaît doucement dès le chargement de la page


    // 🍊 2. Animation GSAP pour chaque carte (item)
    // → S'active uniquement au moment du scroll
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(
          item,  // Élément ciblé : chaque carte
          {
            // État de départ
            opacity: 0,         // invisible
            y: 100,             // descendue vers le bas
            scale: 0.7,         // plus petite
            rotationY: 15       // légèrement tournée sur l’axe Y (effet 3D)
          },
          {
            // État final
            opacity: 1,         // visible
            y: 0,               // revient à sa position
            scale: 1,           // taille normale
            rotationY: 0,       // se redresse
            duration: 1,        // dure 1 seconde
            ease: "back.out(1.4)", // effet rebond naturel à la fin

            // Activation au scroll (ScrollTrigger)
            scrollTrigger: {
              trigger: item,                // déclencheur = cette carte
              start: "top 85%",             // commence quand le haut atteint 85% du viewport
              end: "bottom 20%",            // finit quand le bas atteint 20%
              toggleActions: "play reverse play reverse"
              // play → quand on descend
              // reverse → quand on remonte
              // cela rend l'effet fluide dans les deux sens
              // markers: true, // active des repères visuels (utile pour tester)
            }
          }
        );
      }
    });
    // 👉 Résultat : chaque carte apparaît et disparaît en douceur au scroll


    // 🍃 3. Animation du conteneur global (toute la grille)
    // → Donne un effet général avant les cartes individuelles
    const containerTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // déclencheur = le conteneur global
        start: "top 70%",              // commence quand le haut entre à 70% du viewport
        end: "bottom 30%",             // se termine quand le bas atteint 30%
        toggleActions: "play reverse play reverse", // même logique : effet à la montée et descente
        // markers: true, // pour tester visuellement les déclenchements
      }
    });

    containerTl.fromTo(
      containerRef.current,
      {
        // État de départ
        opacity: 0.8,   // un peu transparent
        scale: 0.95     // légèrement réduit
      },
      {
        // État final
        opacity: 1,     // plus net
        scale: 1,       // taille normale
        duration: 0.8,  // animation courte
        ease: "power2.inOut" // effet fluide et naturel
      }
    );
    // 👉 Résultat : le conteneur entier se "réveille" doucement avant les cartes


    // 🧹 4. Nettoyage à la fin
    // Supprime tous les ScrollTriggers quand le composant est démonté
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    // 👉 Évite les fuites de mémoire et les bugs si on change de page
  }, []); // fin du useEffect


  // Liste des jus à afficher
  const juices = [
    { name: "Jus Orange", emoji: "🍊", color: "from-orange-200 to-orange-300" },
    { name: "Jus Citron", emoji: "🍋", color: "from-yellow-200 to-yellow-300" },
    { name: "Jus Fraise", emoji: "🍓", color: "from-pink-200 to-pink-300" },
    { name: "Jus Myrtille", emoji: "🫐", color: "from-purple-200 to-purple-300" },
    { name: "Jus Pomme", emoji: "🍎", color: "from-red-200 to-red-300" },
    { name: "Jus Kiwi", emoji: "🥝", color: "from-teal-200 to-teal-300" },
    { name: "Jus Carotte", emoji: "🥕", color: "from-orange-300 to-orange-400" },
    { name: "Jus Melon", emoji: "🍈", color: "from-lime-200 to-lime-300" },
  ];


  // ===============================
  // 💻 Partie visuelle (rendu React)
  // ===============================
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-50 p-8">

      {/* Section Hero avec animation */}
      <div
        ref={heroRef}
        className="max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-lg mb-8 transform-gpu"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nature's Best Juices</h1>
        <p className="text-lg text-gray-700 mb-2">Made with fresh, organic ingredients to fuel your body.</p>
        <p className="text-gray-600">Scroll down to discover our selection</p>
      </div>

      {/* Grille des cartes avec animation au scroll */}
      <div ref={containerRef} className="max-w-4xl mx-auto transform-gpu">
        <div className="grid grid-cols-2 gap-6">
          {juices.map((juice, index) => (
            <div
              key={index}
              ref={el => {
                if (el && !itemsRef.current.includes(el)) {
                  itemsRef.current[index] = el;
                }
              }}
              className={`h-32 bg-gradient-to-br ${juice.color} rounded-lg flex items-center justify-center font-semibold text-gray-800 shadow-md transform-gpu transition-colors duration-300 cursor-pointer hover:shadow-xl`}
            >
              <span className="text-xl transform-gpu">{juice.emoji} {juice.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Espace pour tester le scroll */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Espace pour tester le scroll</p>
      </div>

      {/* Section supplémentaire pour tester le retour du scroll */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100">
        <p className="text-gray-500 text-lg">Section supplémentaire</p>
      </div>
    </div>
  );
}

export default App;
