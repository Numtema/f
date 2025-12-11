import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111118] dark:text-white font-display overflow-hidden min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white dark:bg-[#1a1a2e] flex flex-col border-r border-[#dbdbe6] dark:border-[#2f2f46] h-full shrink-0 hidden lg:flex sticky top-0 z-30">
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-6">
            {/* Brand Area */}
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">face</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#111118] dark:text-white text-base font-bold leading-normal">
                  FaceàFace
                </h1>
                <p className="text-[#616189] dark:text-[#a0a0b0] text-xs font-medium leading-normal">
                  Workspace
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary transition-colors"
                to="/dashboard"
              >
                <span className="material-symbols-outlined filled">dashboard</span>
                <span className="text-sm font-bold leading-normal">
                  Tableau de bord
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                to="/dashboard/flows"
              >
                <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                  play_circle
                </span>
                <span className="text-sm font-medium leading-normal">Mes Flux</span>
              </Link>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                  campaign
                </span>
                <span className="text-sm font-medium leading-normal">
                  Campagnes
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                  group
                </span>
                <span className="text-sm font-medium leading-normal">Leads</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                  settings
                </span>
                <span className="text-sm font-medium leading-normal">
                  Paramètres
                </span>
              </a>
            </nav>
          </div>

          {/* Bottom Action */}
          <div className="space-y-4">
            <Link
              to="/studio"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              <span className="material-symbols-outlined mr-2 text-[20px]">
                add_circle
              </span>
              <span className="truncate">Créer un flux</span>
            </Link>
            <Link
              to="/"
              className="w-full flex items-center justify-center gap-2 rounded-xl py-2 px-4 text-[#616189] dark:text-[#a0a0b0] hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Déconnexion
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark">
        {/* Top Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between whitespace-nowrap border-b border-[#f0f0f4] dark:border-[#2f2f46] bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-sm px-6 py-4">
          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-xl">face</span>
            </div>
            <span className="font-bold text-lg text-[#111118] dark:text-white">
              FaceàFace
            </span>
          </div>

          <div className="hidden lg:flex flex-col gap-1">
            <h2 className="text-[#111118] dark:text-white text-xl font-bold leading-tight">
              Bonjour, Jean 👋
            </h2>
            <p className="text-[#616189] dark:text-[#a0a0b0] text-sm font-normal">
              Voici un aperçu de vos performances.
            </p>
          </div>

          <div className="flex flex-1 justify-end gap-4 items-center">
            <div className="flex gap-2">
              <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f0f0f4] dark:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
              </button>
              <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f0f4] dark:bg-[#2f2f46] text-[#111118] dark:text-white text-sm font-bold leading-normal hover:bg-[#e0e0e6] dark:hover:bg-[#3f3f56] transition-colors">
                <span className="truncate">Aide</span>
              </button>
            </div>
            <div className="h-8 w-px bg-[#dbdbe6] dark:bg-[#2f2f46] mx-2 hidden sm:block"></div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#dbdbe6] dark:border-[#2f2f46]"
              style={{
                backgroundImage: "url('https://picsum.photos/id/64/100/100')",
              }}
            ></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 px-4 sm:px-8 py-8 w-full max-w-[1600px] mx-auto flex flex-col gap-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] shadow-sm border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between">
                <p className="text-[#616189] dark:text-[#a0a0b0] text-sm font-semibold uppercase tracking-wider">
                  Vues Totales
                </p>
                <span className="material-symbols-outlined text-primary/80">
                  visibility
                </span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <p className="text-[#111118] dark:text-white tracking-tight text-3xl font-bold leading-none">
                  1,240
                </p>
                <span className="text-[#078841] bg-[#078841]/10 px-2 py-0.5 rounded text-xs font-bold mb-1">
                  +12%
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] shadow-sm border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between">
                <p className="text-[#616189] dark:text-[#a0a0b0] text-sm font-semibold uppercase tracking-wider">
                  Leads Actifs
                </p>
                <span className="material-symbols-outlined text-primary/80">
                  group_add
                </span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <p className="text-[#111118] dark:text-white tracking-tight text-3xl font-bold leading-none">
                  85
                </p>
                <span className="text-[#078841] bg-[#078841]/10 px-2 py-0.5 rounded text-xs font-bold mb-1">
                  +5%
                </span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] shadow-sm border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between">
                <p className="text-[#616189] dark:text-[#a0a0b0] text-sm font-semibold uppercase tracking-wider">
                  Conversion
                </p>
                <span className="material-symbols-outlined text-primary/80">
                  trending_up
                </span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <p className="text-[#111118] dark:text-white tracking-tight text-3xl font-bold leading-none">
                  4.5%
                </p>
                <span className="text-[#078841] bg-[#078841]/10 px-2 py-0.5 rounded text-xs font-bold mb-1">
                  +1.2%
                </span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] shadow-sm border border-transparent hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between">
                <p className="text-[#616189] dark:text-[#a0a0b0] text-sm font-semibold uppercase tracking-wider">
                  Temps Moyen
                </p>
                <span className="material-symbols-outlined text-primary/80">
                  timer
                </span>
              </div>
              <div className="flex items-end gap-2 mt-2">
                <p className="text-[#111118] dark:text-white tracking-tight text-3xl font-bold leading-none">
                  2m 30s
                </p>
                <span className="text-[#e74008] bg-[#e74008]/10 px-2 py-0.5 rounded text-xs font-bold mb-1">
                  -10s
                </span>
              </div>
            </div>
          </div>

          {/* Middle Section: Chart + AI Insight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section (Takes up 2 cols) */}
            <div className="lg:col-span-2 rounded-xl bg-white dark:bg-[#1a1a2e] p-6 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[#111118] dark:text-white text-lg font-bold leading-normal">
                    Génération de Leads
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#616189] dark:text-[#a0a0b0] text-sm">
                      Derniers 30 jours
                    </p>
                    <span className="h-1 w-1 rounded-full bg-[#dbdbe6] dark:bg-[#3f3f56]"></span>
                    <p className="text-[#078841] text-sm font-bold">+24 Leads</p>
                  </div>
                </div>
                <button className="text-[#616189] dark:text-[#a0a0b0] hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              {/* Chart SVG */}
              <div className="w-full aspect-[2/1] max-h-[250px] relative">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 150"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stop-color="#2b2bee"
                        stop-opacity="0.2"
                      ></stop>
                      <stop
                        offset="100%"
                        stop-color="#2b2bee"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line
                    stroke="#f0f0f4"
                    stroke-width="1"
                    x1="0"
                    x2="400"
                    y1="150"
                    y2="150"
                    className="dark:stroke-gray-800"
                  ></line>
                  <line
                    stroke="#f0f0f4"
                    stroke-dasharray="4"
                    stroke-width="1"
                    x1="0"
                    x2="400"
                    y1="100"
                    y2="100"
                    className="dark:stroke-gray-800"
                  ></line>
                  <line
                    stroke="#f0f0f4"
                    stroke-dasharray="4"
                    stroke-width="1"
                    x1="0"
                    x2="400"
                    y1="50"
                    y2="50"
                    className="dark:stroke-gray-800"
                  ></line>
                  <line
                    stroke="#f0f0f4"
                    stroke-dasharray="4"
                    stroke-width="1"
                    x1="0"
                    x2="400"
                    y1="0"
                    y2="0"
                    className="dark:stroke-gray-800"
                  ></line>
                  {/* The Line Path */}
                  <path
                    d="M0 120 C 40 120, 60 90, 100 80 C 140 70, 160 110, 200 90 C 240 70, 260 40, 300 50 C 340 60, 360 20, 400 30"
                    fill="none"
                    stroke="#2b2bee"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  ></path>
                  {/* Area under curve */}
                  <path
                    d="M0 120 C 40 120, 60 90, 100 80 C 140 70, 160 110, 200 90 C 240 70, 260 40, 300 50 C 340 60, 360 20, 400 30 V 150 H 0 Z"
                    fill="url(#chartGradient)"
                    stroke="none"
                  ></path>
                  {/* Active Point */}
                  <circle
                    cx="300"
                    cy="50"
                    fill="#fff"
                    r="5"
                    stroke="#2b2bee"
                    stroke-width="3"
                  ></circle>
                  {/* Tooltip simulation */}
                  <rect
                    fill="#111118"
                    height="26"
                    rx="6"
                    width="60"
                    x="270"
                    y="10"
                  ></rect>
                  <text
                    fill="white"
                    font-family="Manrope"
                    font-size="12"
                    font-weight="bold"
                    text-anchor="middle"
                    x="300"
                    y="28"
                  >
                    12 Leads
                  </text>
                </svg>
              </div>
              {/* X Axis Labels */}
              <div className="flex justify-between mt-4 px-2 text-xs font-semibold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wide">
                <span>01 Mar</span>
                <span>05 Mar</span>
                <span>10 Mar</span>
                <span>15 Mar</span>
                <span>20 Mar</span>
                <span>25 Mar</span>
                <span>30 Mar</span>
              </div>
            </div>

            {/* AI Insight Card (Takes up 1 col) */}
            <div className="lg:col-span-1 flex flex-col h-full rounded-xl bg-gradient-to-br from-white to-[#f0f0f4] dark:from-[#1a1a2e] dark:to-[#242438] p-0 shadow-sm overflow-hidden border border-white dark:border-[#2f2f46]">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-100 text-yellow-700 p-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">
                      lightbulb
                    </span>
                  </span>
                  <p className="text-[#111118] dark:text-white text-base font-bold leading-tight">
                    Conseil IA
                  </p>
                </div>
                <p className="text-[#616189] dark:text-[#a0a0b0] text-sm font-normal leading-relaxed">
                  Votre vidéo{' '}
                  <strong className="text-[#111118] dark:text-white font-medium">
                    'Tarifs 2024'
                  </strong>{' '}
                  a un taux d'abandon élevé après 45s.
                </p>
                <div className="mt-3 p-3 bg-white dark:bg-[#111118] rounded-lg border border-[#dbdbe6]/60 dark:border-[#2f2f46] shadow-sm">
                  <p className="text-xs text-[#616189] dark:text-[#a0a0b0] font-medium uppercase mb-1">
                    Impact estimé
                  </p>
                  <div className="flex items-center gap-2 text-[#078841] font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_upward
                    </span>
                    <span>+5% Conversion</span>
                  </div>
                </div>
              </div>
              {/* Image Area */}
              <div
                className="flex-1 relative bg-gray-100 min-h-[140px]"
                style={{
                  backgroundImage:
                    "url('https://picsum.photos/400/300')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <button className="w-full py-2.5 rounded-xl bg-white text-[#111118] text-sm font-bold shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <span>Optimiser la vidéo</span>
                    <span className="material-symbols-outlined text-[16px]">
                      auto_fix_high
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Leads Table */}
          <div className="rounded-xl bg-white dark:bg-[#1a1a2e] shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-[#f0f0f4] dark:border-[#2f2f46] flex justify-between items-center">
              <h3 className="text-[#111118] dark:text-white text-lg font-bold">
                Leads Récents
              </h3>
              <a className="text-primary text-sm font-bold hover:underline" href="#">
                Voir tout
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fcfcfd] dark:bg-[#242438]">
                    <th className="p-4 pl-6 text-xs font-semibold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider">
                      Prospect
                    </th>
                    <th className="p-4 text-xs font-semibold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider">
                      Flux Source
                    </th>
                    <th className="p-4 text-xs font-semibold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider">
                      Date
                    </th>
                    <th className="p-4 text-xs font-semibold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="p-4 pr-6 text-xs font-semibold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    {
                      initials: 'SM',
                      name: 'Sophie Martin',
                      email: 'sophie.m@example.com',
                      color: 'bg-blue-100 text-primary',
                      source: 'Démo Produit v2',
                      date: "Aujourd'hui, 10:30",
                      status: 'Nouveau',
                      statusColor:
                        'bg-green-100 text-green-700 border-green-200',
                      icon: 'mail',
                    },
                    {
                      initials: 'JD',
                      name: 'Jean Dupont',
                      email: 'jean.d@example.com',
                      color: 'bg-purple-100 text-purple-700',
                      source: 'Webinar Replay',
                      date: 'Hier, 15:45',
                      status: 'Contacté',
                      statusColor: 'bg-blue-100 text-blue-700 border-blue-200',
                      icon: 'chat',
                    },
                    {
                      initials: 'EL',
                      name: 'Emma Leroy',
                      email: 'emma.leroy@tech.co',
                      color: 'bg-orange-100 text-orange-700',
                      source: 'Pricing Page',
                      date: '12 Mar, 09:15',
                      status: 'En attente',
                      statusColor: 'bg-gray-100 text-gray-600 border-gray-200',
                      icon: 'mail',
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#f0f0f4] dark:border-[#2f2f46] hover:bg-[#fafafa] dark:hover:bg-[#242438] transition-colors group"
                    >
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-9 rounded-full flex items-center justify-center font-bold text-xs ${row.color}`}
                          >
                            {row.initials}
                          </div>
                          <div>
                            <p className="font-bold text-[#111118] dark:text-white">
                              {row.name}
                            </p>
                            <p className="text-xs text-[#616189] dark:text-[#a0a0b0]">
                              {row.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#111118] dark:text-white font-medium">
                        {row.source}
                      </td>
                      <td className="p-4 text-[#616189] dark:text-[#a0a0b0]">
                        {row.date}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-bold border ${row.statusColor}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <button className="text-[#616189] dark:text-[#a0a0b0] hover:text-primary transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30">
                          <span className="material-symbols-outlined text-[20px]">
                            {row.icon}
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
