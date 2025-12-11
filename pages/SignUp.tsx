import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup logic
    navigate('/dashboard');
  };

  return (
    <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased font-sans">
      <div class="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Form */}
        <div class="flex-1 flex flex-col bg-white dark:bg-gray-900 h-full relative z-10 overflow-y-auto">
          {/* Header / Logo (Mobile/Desktop) */}
          <header class="flex items-center justify-between px-6 py-6 lg:px-12">
            <Link to="/" class="flex items-center gap-3">
              <div class="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[28px]">
                  video_chat
                </span>
              </div>
              <h2 class="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
                FaceàFace
              </h2>
            </Link>
            <button class="hidden sm:flex items-center justify-center rounded-xl h-10 px-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold transition-colors">
              <span class="truncate">Aide</span>
            </button>
          </header>

          {/* Main Content Container */}
          <div class="flex-1 flex flex-col justify-center px-6 lg:px-20 xl:px-32 pb-10">
            <div class="w-full max-w-md mx-auto space-y-8">
              {/* Headline */}
              <div class="text-center lg:text-left space-y-2">
                <h1 class="text-slate-900 dark:text-white text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Créez votre <br class="hidden lg:block" />
                  compte gratuit
                </h1>
                <p class="text-slate-500 dark:text-slate-400 text-base">
                  Commencez votre essai de 14 jours. Aucune carte requise.
                </p>
              </div>

              {/* Tabs */}
              <div class="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <Link
                  to="/login"
                  class="flex-1 py-2.5 text-sm font-bold rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all text-center"
                >
                  Connexion
                </Link>
                <div class="flex-1 py-2.5 text-sm font-bold rounded-lg shadow-sm bg-white dark:bg-slate-700 text-primary dark:text-white transition-all text-center cursor-default">
                  Inscription
                </div>
              </div>

              {/* Social Login */}
              <div class="space-y-3">
                <button class="w-full flex items-center justify-center gap-3 h-14 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-transparent text-slate-900 dark:text-white font-semibold">
                  <img
                    alt="Google Logo"
                    class="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                  />
                  S'inscrire avec Google
                </button>
              </div>

              {/* Divider */}
              <div class="relative flex py-2 items-center">
                <div class="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span class="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">
                  Ou avec email
                </span>
                <div class="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              </div>

              {/* Form Fields */}
              <form class="space-y-5" onSubmit={handleSubmit}>
                <div class="space-y-1.5">
                  <label class="block text-slate-900 dark:text-white text-sm font-bold ml-1">
                    Nom complet
                  </label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      person
                    </span>
                    <input
                      class="w-full pl-12 pr-4 h-14 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary transition-all font-medium"
                      placeholder="Jean Dupont"
                      type="text"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-slate-900 dark:text-white text-sm font-bold ml-1">
                    Adresse email
                  </label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      mail
                    </span>
                    <input
                      class="w-full pl-12 pr-4 h-14 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary transition-all font-medium"
                      placeholder="exemple@entreprise.com"
                      type="email"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-slate-900 dark:text-white text-sm font-bold ml-1">
                    Mot de passe
                  </label>
                  <div class="relative group">
                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-primary transition-colors">
                      lock
                    </span>
                    <input
                      class="w-full pl-12 pr-12 h-14 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary transition-all font-medium"
                      placeholder="••••••••"
                      type="password"
                    />
                    <button
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      type="button"
                    >
                      <span class="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  class="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold text-base rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Commencer l'essai gratuit</span>
                  <span class="material-symbols-outlined text-[20px]">
                    rocket_launch
                  </span>
                </button>
              </form>

              {/* Footer Links */}
              <p class="text-center text-slate-500 dark:text-slate-400 text-sm">
                Déjà un compte ?{' '}
                <Link
                  class="text-primary hover:text-primary-dark font-bold transition-colors"
                  to="/login"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
          <div class="p-6 text-center lg:hidden">
            <p class="text-xs text-slate-400">
              © 2024 FaceàFace. Tous droits réservés.
            </p>
          </div>
        </div>

        {/* Right Section: Visual / Value Prop */}
        <div class="hidden lg:flex lg:w-1/2 relative bg-slate-50 dark:bg-slate-900">
          {/* Background Image */}
          <div class="absolute inset-0 z-0">
            <img
              alt="Creative workspace"
              class="w-full h-full object-cover opacity-90 dark:opacity-40"
              src="https://picsum.photos/id/60/1000/1200"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent mix-blend-multiply"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
          </div>
          {/* Content Overlay */}
          <div class="relative z-10 flex flex-col justify-end p-16 w-full max-w-2xl mx-auto pb-24">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl space-y-6 transform transition-transform hover:-translate-y-1 duration-500">
              <div class="size-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg mb-2">
                <span class="material-symbols-outlined text-3xl">
                  rocket
                </span>
              </div>
              <h3 class="text-white text-3xl font-bold leading-tight">
                "Nos taux de conversion ont doublé en seulement 3 semaines grâce à l'automatisation vidéo."
              </h3>
              <div class="flex items-center gap-4 pt-2">
                <img
                  alt="Portrait"
                  class="size-12 rounded-full object-cover border-2 border-white/50"
                  src="https://picsum.photos/id/65/100/100"
                />
                <div>
                  <p class="text-white font-bold">Sarah Connor</p>
                  <p class="text-white/80 text-sm">CMO, Cyberdyne Systems</p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 mt-8 justify-center">
              <div class="h-1.5 w-2 bg-white/40 rounded-full"></div>
              <div class="h-1.5 w-8 bg-white rounded-full"></div>
              <div class="h-1.5 w-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;