import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    navigate('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased font-sans">
      <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Form */}
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 h-full relative z-10 overflow-y-auto">
          {/* Header / Logo (Mobile/Desktop) */}
          <header className="flex items-center justify-between px-6 py-6 lg:px-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  video_chat
                </span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
                FaceàFace
              </h2>
            </Link>
            <button className="hidden sm:flex items-center justify-center rounded-xl h-10 px-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold transition-colors">
              <span className="truncate">Aide</span>
            </button>
          </header>

          {/* Main Content Container */}
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 xl:px-32 pb-10">
            <div className="w-full max-w-md mx-auto space-y-8">
              {/* Headline */}
              <div className="text-center lg:text-left space-y-2">
                <h1 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Bon retour <br className="hidden lg:block" />
                  parmi nous !
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">
                  Connectez-vous pour gérer vos leads vidéo.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <div className="flex-1 py-2.5 text-sm font-bold rounded-lg shadow-sm bg-white dark:bg-slate-700 text-primary dark:text-white transition-all text-center cursor-default">
                  Connexion
                </div>
                <Link
                  to="/signup"
                  className="flex-1 py-2.5 text-sm font-bold rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all text-center"
                >
                  Inscription
                </Link>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 h-14 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-transparent text-slate-900 dark:text-white font-semibold">
                  <img
                    alt="Google Logo"
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                  />
                  Continuer avec Google
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">
                  Ou avec email
                </span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              </div>

              {/* Form Fields */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="block text-slate-900 dark:text-white text-sm font-bold ml-1">
                    Adresse email
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      mail
                    </span>
                    <input
                      className="w-full pl-12 pr-4 h-14 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary transition-all font-medium"
                      placeholder="exemple@entreprise.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label className="block text-slate-900 dark:text-white text-sm font-bold">
                      Mot de passe
                    </label>
                    <a
                      className="text-primary hover:text-primary-dark text-sm font-semibold transition-colors"
                      href="#"
                    >
                      Oublié ?
                    </a>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-primary transition-colors">
                      lock
                    </span>
                    <input
                      className="w-full pl-12 pr-12 h-14 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary transition-all font-medium"
                      placeholder="••••••••"
                      type="password"
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>
                {/* Action Button */}
                <button
                  className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold text-base rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Se connecter</span>
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>
              </form>

              {/* Footer Links */}
              <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
                Vous n'avez pas de compte ?{' '}
                <Link
                  className="text-primary hover:text-primary-dark font-bold transition-colors"
                  to="/signup"
                >
                  Commencer l'essai gratuit
                </Link>
              </p>
            </div>
          </div>
          <div className="p-6 text-center lg:hidden">
            <p className="text-xs text-slate-400">
              © 2024 FaceàFace. Tous droits réservés.
            </p>
          </div>
        </div>

        {/* Right Section: Visual / Value Prop */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-50 dark:bg-slate-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Team discussing analytics"
              className="w-full h-full object-cover opacity-90 dark:opacity-40"
              src="https://picsum.photos/id/48/1000/1200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
          </div>
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-end p-16 w-full max-w-2xl mx-auto pb-24">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl space-y-6 transform transition-transform hover:-translate-y-1 duration-500">
              <div className="size-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg mb-2">
                <span className="material-symbols-outlined text-3xl">
                  smart_toy
                </span>
              </div>
              <h3 className="text-white text-3xl font-bold leading-tight">
                "FaceàFace a transformé notre génération de leads. L'IA vidéo
                est tout simplement bluffante."
              </h3>
              <div className="flex items-center gap-4 pt-2">
                <img
                  alt="Portrait"
                  className="size-12 rounded-full object-cover border-2 border-white/50"
                  src="https://picsum.photos/id/64/100/100"
                />
                <div>
                  <p className="text-white font-bold">Marc Dubois</p>
                  <p className="text-white/80 text-sm">CEO, TechStart Lyon</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-8 justify-center">
              <div className="h-1.5 w-8 bg-white rounded-full"></div>
              <div className="h-1.5 w-2 bg-white/40 rounded-full"></div>
              <div className="h-1.5 w-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
