import React from 'react';
import { Link } from 'react-router-dom';

const MyFlows: React.FC = () => {
  return (
    <div class="bg-background-light dark:bg-background-dark font-display text-[#111118] dark:text-white flex h-screen overflow-hidden">
      {/* Side Navigation Bar - Unified with Dashboard */}
      <aside class="flex w-72 flex-col border-r border-[#f0f0f4] bg-white dark:bg-[#1a1a2e] dark:border-[#2f2f46] flex-shrink-0 h-full overflow-y-auto hidden md:flex sticky top-0 z-30">
        <div class="flex h-full flex-col justify-between p-6">
          <div class="flex flex-col gap-6">
            {/* Brand Area */}
            <Link to="/dashboard" class="flex items-center gap-3">
              <div class="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span class="material-symbols-outlined text-3xl">face</span>
              </div>
              <div class="flex flex-col">
                <h1 class="text-[#111118] dark:text-white text-base font-bold leading-normal">
                  FaceàFace
                </h1>
                <p class="text-[#616189] dark:text-[#a0a0b0] text-xs font-medium leading-normal">
                  Workspace
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav class="flex flex-col gap-2">
              <Link
                class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                to="/dashboard"
              >
                <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                  dashboard
                </span>
                <span class="text-sm font-medium leading-normal">
                  Tableau de bord
                </span>
              </Link>
              {/* Active Item */}
              <Link
                class="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary transition-colors"
                to="/dashboard/flows"
              >
                <span class="material-symbols-outlined filled">play_circle</span>
                <span class="text-sm font-bold leading-normal">Mes Flux</span>
              </Link>
              <a
                class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                href="#"
              >
                <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                  campaign
                </span>
                <span class="text-sm font-medium leading-normal">
                  Campagnes
                </span>
              </a>
              <a
                class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                href="#"
              >
                <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                  group
                </span>
                <span class="text-sm font-medium leading-normal">Leads</span>
              </a>
              <a
                class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                href="#"
              >
                <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                  settings
                </span>
                <span class="text-sm font-medium leading-normal">
                  Paramètres
                </span>
              </a>
            </nav>
          </div>

          {/* Bottom Action */}
          <div class="space-y-4">
            <Link
              to="/studio"
              class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              <span class="material-symbols-outlined mr-2 text-[20px]">
                add_circle
              </span>
              <span class="truncate">Créer un flux</span>
            </Link>
            <Link
              to="/"
              class="w-full flex items-center justify-center gap-2 rounded-xl py-2 px-4 text-[#616189] dark:text-[#a0a0b0] hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] transition-colors text-sm font-medium"
            >
              <span class="material-symbols-outlined text-sm">logout</span>
              Déconnexion
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main class="flex flex-1 flex-col h-full relative overflow-y-auto">
        {/* TopNavBar - Unified with Dashboard */}
        <header class="sticky top-0 z-20 flex items-center justify-between whitespace-nowrap border-b border-[#f0f0f4] dark:border-[#2f2f46] bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-sm px-6 py-4">
          <div class="flex items-center gap-4 lg:hidden">
            <div class="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span class="material-symbols-outlined text-xl">face</span>
            </div>
            <span class="font-bold text-lg text-[#111118] dark:text-white">
              FaceàFace
            </span>
          </div>

           <div class="hidden lg:flex flex-col gap-1">
             <h2 class="text-[#111118] dark:text-white text-xl font-bold leading-tight">
              Mes Flux
            </h2>
            <p class="text-[#616189] dark:text-[#a0a0b0] text-sm font-normal">
              Gérez vos agents conversationnels.
            </p>
          </div>

          <div class="flex flex-1 justify-end gap-4 items-center">
            <div class="flex gap-2">
              <button class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f0f0f4] dark:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[20px]">
                  notifications
                </span>
              </button>
              <button class="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f0f4] dark:bg-[#2f2f46] text-[#111118] dark:text-white text-sm font-bold leading-normal hover:bg-[#e0e0e6] dark:hover:bg-[#3f3f56] transition-colors">
                <span class="truncate">Aide</span>
              </button>
            </div>
            <div class="h-8 w-px bg-[#dbdbe6] dark:bg-[#2f2f46] mx-2 hidden sm:block"></div>
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#dbdbe6] dark:border-[#2f2f46]"
              style={{
                backgroundImage: "url('https://picsum.photos/id/64/100/100')",
              }}
            ></div>
          </div>
        </header>

        {/* Page Content */}
        <div class="flex flex-1 justify-center w-full">
          <div class="flex flex-col max-w-[1200px] w-full px-4 md:px-8 py-8 gap-6">
            {/* Page Heading (Mobile/Detailed) */}
             <div class="flex lg:hidden flex-col gap-2 mb-2">
                <h1 class="text-[#111118] dark:text-white text-3xl font-extrabold leading-tight tracking-[-0.033em]">
                  Mes Flux Vidéo
                </h1>
                <p class="text-[#616189] dark:text-[#a0a0b0] text-base font-normal leading-normal max-w-lg">
                  Gérez vos campagnes et optimisez vos interactions.
                </p>
              </div>

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              {/* Filters & Search Toolbar */}
              <div class="flex flex-col lg:flex-row gap-4 items-center flex-1 bg-white dark:bg-[#1a1a2e] p-2 rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46]">
                {/* Search Bar */}
                <div class="w-full lg:w-auto lg:flex-1">
                  <div class="flex w-full items-center rounded-xl bg-[#f0f0f4] dark:bg-[#2f2f46] px-3 h-11">
                    <span class="material-symbols-outlined text-[#616189] dark:text-[#a0a0b0]">
                      search
                    </span>
                    <input
                      class="flex-1 bg-transparent border-none focus:ring-0 text-[#111118] dark:text-white placeholder:text-[#616189] dark:placeholder:text-[#606070] text-sm px-2"
                      placeholder="Rechercher un flux..."
                    />
                  </div>
                </div>
                {/* Filter Chips */}
                <div class="flex w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar">
                  <button class="flex h-9 shrink-0 items-center justify-center px-4 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <span class="text-sm font-bold">Tous</span>
                  </button>
                  <button class="flex h-9 shrink-0 items-center justify-center px-4 rounded-lg bg-white dark:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:bg-[#f0f0f4] dark:hover:bg-[#3f3f56] border border-[#f0f0f4] dark:border-[#3f3f56] transition-colors">
                    <span class="text-sm font-medium">En ligne</span>
                  </button>
                  <button class="flex h-9 shrink-0 items-center justify-center px-4 rounded-lg bg-white dark:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:bg-[#f0f0f4] dark:hover:bg-[#3f3f56] border border-[#f0f0f4] dark:border-[#3f3f56] transition-colors">
                    <span class="text-sm font-medium">Brouillons</span>
                  </button>
                </div>
              </div>

              <Link
                to="/studio"
                class="flex items-center justify-center gap-2 rounded-xl h-11 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/25 shrink-0"
              >
                <span class="material-symbols-outlined text-[20px]">add</span>
                <span class="truncate">Créer un flux</span>
              </Link>
            </div>

            {/* Flow Cards Grid */}
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-10">
              {/* Card 1: Active */}
              <div class="group flex flex-col rounded-2xl bg-white dark:bg-[#1a1a2e] border border-[#f0f0f4] dark:border-[#2f2f46] overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
                <div
                  class="relative h-48 w-full bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/id/1/400/300')",
                  }}
                >
                  <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div class="absolute top-3 left-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-green-600 text-xs font-bold shadow-sm">
                      <span class="size-2 rounded-full bg-green-500 animate-pulse"></span>
                      En ligne
                    </span>
                  </div>
                  <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                <div class="flex flex-col p-5 gap-4">
                  <div class="flex justify-between items-start">
                    <div class="flex flex-col gap-1">
                      <h3 class="text-lg font-bold text-[#111118] dark:text-white group-hover:text-primary transition-colors">
                        Campagne Prospection Q3
                      </h3>
                      <p class="text-xs text-[#616189] dark:text-[#808090]">
                        Mis à jour il y a 2h
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#242438]">
                    <div class="flex-1 flex flex-col items-center border-r border-gray-200 dark:border-gray-700">
                      <span class="text-[11px] uppercase tracking-wider font-semibold text-[#616189] dark:text-[#a0a0b0]">
                        Conv.
                      </span>
                      <span class="text-lg font-bold text-primary">14.5%</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                      <span class="text-[11px] uppercase tracking-wider font-semibold text-[#616189] dark:text-[#a0a0b0]">
                        Leads
                      </span>
                      <span class="text-lg font-bold text-[#111118] dark:text-white">
                        32
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-2 mt-auto">
                    <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold text-[#111118] dark:text-white hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] transition-colors">
                      <span class="material-symbols-outlined text-[18px]">
                        edit
                      </span>
                      Éditer
                    </button>
                    <div class="flex gap-1">
                      <button class="p-2 text-[#616189] dark:text-[#a0a0b0] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <span class="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                      <button class="p-2 text-[#616189] dark:text-[#a0a0b0] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <span class="material-symbols-outlined text-[20px]">
                          more_horiz
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Draft */}
              <div class="group flex flex-col rounded-2xl bg-white dark:bg-[#1a1a2e] border border-[#f0f0f4] dark:border-[#2f2f46] overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
                <div
                  class="relative h-48 w-full bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/id/2/400/300')",
                  }}
                >
                  <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div class="absolute top-3 left-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-amber-600 text-xs font-bold shadow-sm">
                      <span class="size-2 rounded-full bg-amber-500"></span>
                      Brouillon
                    </span>
                  </div>
                </div>
                <div class="flex flex-col p-5 gap-4">
                  <div class="flex justify-between items-start">
                    <div class="flex flex-col gap-1">
                      <h3 class="text-lg font-bold text-[#111118] dark:text-white group-hover:text-primary transition-colors">
                        Onboarding Client V2
                      </h3>
                      <p class="text-xs text-[#616189] dark:text-[#808090]">
                        Créé hier
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#242438] opacity-60">
                    <div class="flex-1 flex flex-col items-center border-r border-gray-200 dark:border-gray-700">
                      <span class="text-[11px] uppercase tracking-wider font-semibold text-[#616189] dark:text-[#a0a0b0]">
                        Conv.
                      </span>
                      <span class="text-lg font-bold text-[#111118] dark:text-white">
                        -
                      </span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                      <span class="text-[11px] uppercase tracking-wider font-semibold text-[#616189] dark:text-[#a0a0b0]">
                        Leads
                      </span>
                      <span class="text-lg font-bold text-[#111118] dark:text-white">
                        -
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-2 mt-auto">
                    <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold text-[#111118] dark:text-white hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] transition-colors">
                      <span class="material-symbols-outlined text-[18px]">
                        play_arrow
                      </span>
                      Continuer
                    </button>
                    <div class="flex gap-1">
                      <button class="p-2 text-[#616189] dark:text-[#a0a0b0] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <span class="material-symbols-outlined text-[20px]">
                          more_horiz
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Active High Perf */}
              <div class="group flex flex-col rounded-2xl bg-white dark:bg-[#1a1a2e] border border-[#f0f0f4] dark:border-[#2f2f46] overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
                <div
                  class="relative h-48 w-full bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/id/3/400/300')",
                  }}
                >
                  <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div class="absolute top-3 left-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-green-600 text-xs font-bold shadow-sm">
                      <span class="size-2 rounded-full bg-green-500 animate-pulse"></span>
                      En ligne
                    </span>
                  </div>
                </div>
                <div class="flex flex-col p-5 gap-4">
                  <div class="flex justify-between items-start">
                    <div class="flex flex-col gap-1">
                      <h3 class="text-lg font-bold text-[#111118] dark:text-white group-hover:text-primary transition-colors">
                        Webinaire Recrutement
                      </h3>
                      <p class="text-xs text-[#616189] dark:text-[#808090]">
                        Mis à jour il y a 5j
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#242438]">
                    <div class="flex-1 flex flex-col items-center border-r border-gray-200 dark:border-gray-700">
                      <span class="text-[11px] uppercase tracking-wider font-semibold text-[#616189] dark:text-[#a0a0b0]">
                        Conv.
                      </span>
                      <span class="text-lg font-bold text-primary">22.8%</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                      <span class="text-[11px] uppercase tracking-wider font-semibold text-[#616189] dark:text-[#a0a0b0]">
                        Leads
                      </span>
                      <span class="text-lg font-bold text-[#111118] dark:text-white">
                        148
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-2 mt-auto">
                    <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold text-[#111118] dark:text-white hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] transition-colors">
                      <span class="material-symbols-outlined text-[18px]">
                        edit
                      </span>
                      Éditer
                    </button>
                    <div class="flex gap-1">
                      <button class="p-2 text-[#616189] dark:text-[#a0a0b0] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <span class="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                      <button class="p-2 text-[#616189] dark:text-[#a0a0b0] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <span class="material-symbols-outlined text-[20px]">
                          more_horiz
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyFlows;