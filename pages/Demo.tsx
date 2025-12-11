import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Demo: React.FC = () => {
  return (
    <div class="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-[#111118] dark:text-white overflow-x-hidden">
      <Navbar />
      {/* Main Content */}
      <main class="flex-grow">
        <div class="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Hero Section Text */}
          <div class="text-center mb-10 max-w-3xl mx-auto">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
              <span class="material-symbols-outlined text-[16px]">science</span>
              DÉMO LIVE
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111118] dark:text-white mb-4">
              Découvrez la Puissance de <span class="text-primary">l'IA Vidéo</span>
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Interagissez avec notre assistant virtuel ci-dessous pour voir
              comment FaceàFace qualifie vos leads automatiquement et augmente
              vos conversions.
            </p>
          </div>

          {/* Interactive Demo Container */}
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Video Player */}
            <div class="lg:col-span-8 relative group">
              {/* Phone Frame / Video Container */}
              <div class="relative w-full aspect-[9/16] sm:aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
                {/* Video Background */}
                <div
                  class="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/800/600')",
                  }}
                ></div>
                {/* Gradient Overlay for Readability */}
                <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
                {/* Video Controls Top Right */}
                <div class="absolute top-4 right-4 flex gap-2">
                  <button class="bg-black/30 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/50 transition-colors">
                    <span class="material-symbols-outlined">volume_up</span>
                  </button>
                  <button class="bg-black/30 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/50 transition-colors">
                    <span class="material-symbols-outlined">fullscreen</span>
                  </button>
                </div>
                {/* Live Badge */}
                <div class="absolute top-4 left-4">
                  <div class="flex items-center gap-2 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    <span class="block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    EN DIRECT
                  </div>
                </div>
                {/* Center Play Button */}
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div class="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-xl">
                    <span class="material-symbols-outlined text-white text-4xl">
                      play_arrow
                    </span>
                  </div>
                </div>
                {/* Bottom Interaction Area */}
                <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  {/* AI Captions/Prompt */}
                  <div class="mb-6 flex justify-center">
                    <div class="bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-xl text-center shadow-lg border border-white/10 max-w-lg">
                      <p class="font-medium text-lg">
                        "Bonjour ! Je suis l'assistant FaceàFace. Souhaitez-vous
                        voir une démo personnalisée ou simplement explorer ?"
                      </p>
                    </div>
                  </div>
                  {/* Interactive Buttons */}
                  <div class="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-2xl mx-auto">
                    <button class="w-full sm:w-auto flex-1 bg-primary hover:bg-primary/90 text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group/btn">
                      <span class="material-symbols-outlined">
                        calendar_month
                      </span>
                      Je veux une démo
                      <span class="material-symbols-outlined opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all">
                        arrow_forward
                      </span>
                    </button>
                    <button class="w-full sm:w-auto flex-1 bg-white/90 hover:bg-white text-[#111118] py-3.5 px-6 rounded-xl font-bold text-base shadow-lg backdrop-blur-sm transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                      <span class="material-symbols-outlined text-gray-500">
                        explore
                      </span>
                      Juste curieux
                    </button>
                  </div>
                  {/* Powered By */}
                  <div class="mt-4 text-center">
                    <p class="text-white/60 text-xs font-medium flex items-center justify-center gap-1">
                      Propulsé par{' '}
                      <span class="font-bold text-white">FaceàFace AI</span>
                      <span class="material-symbols-outlined text-[14px]">
                        bolt
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Explanation Tooltip (Floating) */}
              <div class="hidden lg:flex absolute -right-6 top-1/4 translate-x-full items-center gap-3 w-64">
                <div class="w-12 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
                <div class="bg-white dark:bg-[#1e1e2d] p-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300">
                  <span class="font-bold text-primary block mb-1">
                    Qualité HD & Chargement Rapide
                  </span>
                  Le lecteur vidéo est optimisé pour ne pas ralentir votre site
                  web.
                </div>
              </div>
            </div>

            {/* Right Column: Backend Logic Visualization */}
            <div class="lg:col-span-4 space-y-6">
              {/* Status Card */}
              <div class="bg-white dark:bg-[#1e1e2d] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10">
                  <span class="material-symbols-outlined text-6xl">
                    psychology
                  </span>
                </div>
                <h3 class="text-lg font-bold text-[#111118] dark:text-white mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">
                    analytics
                  </span>
                  Analyse en Temps Réel
                </h3>
                <div class="space-y-4">
                  {/* Step 1: Active */}
                  <div class="flex gap-3">
                    <div class="flex flex-col items-center">
                      <div class="size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center border-2 border-green-200">
                        <span class="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <div class="w-0.5 h-full bg-green-200 my-1"></div>
                    </div>
                    <div class="pb-4">
                      <p class="text-sm font-bold text-[#111118] dark:text-white">
                        Visiteur Détecté
                      </p>
                      <p class="text-xs text-gray-500">
                        Source: Direct Traffic • Paris, FR
                      </p>
                    </div>
                  </div>
                  {/* Step 2: Active */}
                  <div class="flex gap-3">
                    <div class="flex flex-col items-center">
                      <div class="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-pulse border-2 border-primary/20">
                        <div class="size-2 bg-primary rounded-full"></div>
                      </div>
                      <div class="w-0.5 h-full bg-gray-100 dark:bg-gray-800 my-1"></div>
                    </div>
                    <div class="pb-4">
                      <p class="text-sm font-bold text-[#111118] dark:text-white text-primary">
                        Interaction en cours
                      </p>
                      <p class="text-xs text-gray-500">
                        L'IA attend la réponse de l'utilisateur...
                      </p>
                    </div>
                  </div>
                  {/* Step 3: Pending */}
                  <div class="flex gap-3 opacity-50">
                    <div class="flex flex-col items-center">
                      <div class="size-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700">
                        <span class="text-[10px] font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-[#111118] dark:text-white">
                        Qualification du Lead
                      </p>
                      <p class="text-xs text-gray-500">
                        Mise à jour CRM automatique
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div class="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div
                  class="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>
                <h3 class="text-xl font-bold mb-2 relative z-10">
                  Convaincu ?
                </h3>
                <p class="text-blue-100 text-sm mb-6 relative z-10">
                  Installez ce widget sur votre site en moins de 2 minutes. Aucun
                  code requis.
                </p>
                <Link
                  to="/signup"
                  class="w-full bg-white text-primary font-bold py-3 px-4 rounded-xl text-sm hover:bg-gray-50 transition-colors shadow-md relative z-10 flex items-center justify-center gap-2"
                >
                  Créer mon Widget
                  <span class="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Tech Specs (Small) */}
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white dark:bg-[#1e1e2d] p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center">
                  <span class="material-symbols-outlined text-primary mb-1">
                    speed
                  </span>
                  <p class="text-2xl font-bold text-[#111118] dark:text-white">
                    0.2s
                  </p>
                  <p class="text-xs text-gray-500">Latence</p>
                </div>
                <div class="bg-white dark:bg-[#1e1e2d] p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center">
                  <span class="material-symbols-outlined text-green-500 mb-1">
                    lock
                  </span>
                  <p class="text-2xl font-bold text-[#111118] dark:text-white">
                    RGPD
                  </p>
                  <p class="text-xs text-gray-500">Conforme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;