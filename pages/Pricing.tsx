import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div class="flex min-h-screen flex-col bg-background-light text-text-main font-body">
      <Navbar />
      <main class="relative flex flex-col items-center">
        {/* Hero Section */}
        <section class="w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl space-y-6">
            <h1 class="font-display text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl lg:text-6xl">
              Investissez dans votre <span class="text-primary">croissance</span>
            </h1>
            <p class="mx-auto max-w-2xl text-lg text-text-secondary">
              Choisissez le plan adapté à vos besoins. Changez ou annulez à tout
              moment. Commencez gratuitement, sans carte bancaire.
            </p>
            {/* Toggle Switch */}
            <div class="mt-10 flex items-center justify-center gap-4">
              <span class="text-sm font-medium text-text-secondary">
                Mensuel
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                class="relative h-8 w-14 rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span
                  class={`absolute top-1 size-6 rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-7' : 'translate-x-1'
                  }`}
                ></span>
              </button>
              <span class="text-sm font-bold text-text-main flex items-center gap-2">
                Annuel
                <span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                  -20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section class="w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Équipe */}
            <div class="relative flex flex-col rounded-2xl border border-neutral-border bg-white p-8 shadow-soft hover:shadow-lg transition-all duration-300">
              <div class="mb-6">
                <h3 class="font-display text-xl font-bold text-text-main">
                  Équipe
                </h3>
                <p class="mt-2 text-sm text-text-secondary">
                  Idéal pour les startups et les petites équipes qui débutent avec
                  l'IA.
                </p>
              </div>
              <div class="mb-6 flex items-baseline gap-1">
                <span class="font-display text-4xl font-black text-text-main">
                  {isAnnual ? '39€' : '49€'}
                </span>
                <span class="text-base font-medium text-text-secondary">
                  /mois
                </span>
              </div>
              <button class="mb-8 w-full rounded-xl bg-neutral-surface py-3 text-sm font-bold text-text-main hover:bg-neutral-border transition-colors">
                Commencer l'essai gratuit
              </button>
              <div class="flex-1 space-y-4">
                {[
                  '50 leads qualifiés/mois',
                  '5 agents IA vidéo',
                  'Support email standard',
                  'Analytiques de base',
                ].map((feature, idx) => (
                  <div key={idx} class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-green-500 text-[20px]">
                      check_circle
                    </span>
                    <span class="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Pro (Highlighted) */}
            <div class="relative flex flex-col rounded-2xl border-2 border-primary bg-white p-8 shadow-glow transform md:-translate-y-4">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                Populaire
              </div>
              <div class="mb-6">
                <h3 class="font-display text-xl font-bold text-text-main">
                  Pro
                </h3>
                <p class="mt-2 text-sm text-text-secondary">
                  Pour les entreprises en croissance cherchant à scaler leur
                  acquisition.
                </p>
              </div>
              <div class="mb-6 flex items-baseline gap-1">
                <span class="font-display text-4xl font-black text-text-main">
                   {isAnnual ? '79€' : '99€'}
                </span>
                <span class="text-base font-medium text-text-secondary">
                  /mois
                </span>
              </div>
              <button class="mb-8 w-full rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Choisir le plan Pro
              </button>
              <div class="flex-1 space-y-4">
                {[
                  'Leads illimités',
                  '20 agents IA vidéo',
                  'Intégrations CRM (HubSpot, etc.)',
                  'Support prioritaire',
                  'Personnalisation avancée',
                ].map((feature, idx) => (
                  <div key={idx} class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    <span class="text-sm font-medium text-text-main">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Entreprise */}
            <div class="relative flex flex-col rounded-2xl border border-neutral-border bg-white p-8 shadow-soft hover:shadow-lg transition-all duration-300">
              <div class="mb-6">
                <h3 class="font-display text-xl font-bold text-text-main">
                  Entreprise
                </h3>
                <p class="mt-2 text-sm text-text-secondary">
                  Solutions sur mesure pour les grandes organisations.
                </p>
              </div>
              <div class="mb-6 flex items-baseline gap-1">
                <span class="font-display text-3xl font-black text-text-main">
                  Sur devis
                </span>
              </div>
              <button class="mb-8 w-full rounded-xl bg-white border-2 border-neutral-border py-3 text-sm font-bold text-text-main hover:border-primary hover:text-primary transition-colors">
                Contacter les ventes
              </button>
              <div class="flex-1 space-y-4">
                {[
                  'API dédiée & Webhooks',
                  'IA personnalisée (Fine-tuning)',
                  'SLA garanti 99.9%',
                  'Account manager dédié',
                  'SSO & Sécurité avancée',
                ].map((feature, idx) => (
                  <div key={idx} class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-text-main text-[20px]">
                      check_circle
                    </span>
                    <span class="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section class="w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div class="mb-10">
            <h2 class="font-display text-2xl font-bold text-text-main">
              Extensions & Add-ons
            </h2>
            <p class="text-text-secondary mt-2">
              Boostez votre abonnement avec des fonctionnalités supplémentaires.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AddOnCard
              icon="videocam"
              title="Minutes Vidéo +"
              desc="Ajoutez 500 minutes de génération vidéo supplémentaires."
              price="29€/mois"
              color="text-primary"
              bgColor="bg-blue-50"
            />
            <AddOnCard
              icon="smart_toy"
              title="IA Premium"
              desc="Accès aux modèles de langage GPT-4 Turbo pour vos agents."
              price="19€/mois"
              color="text-purple-600"
              bgColor="bg-purple-50"
            />
            <AddOnCard
              icon="translate"
              title="Pack Langues"
              desc="Support de +30 langues avec synchronisation labiale."
              price="15€/mois"
              color="text-orange-600"
              bgColor="bg-orange-50"
            />
            <AddOnCard
              icon="analytics"
              title="Analytiques +"
              desc="Rapports détaillés d'engagement et export CSV."
              price="9€/mois"
              color="text-green-600"
              bgColor="bg-green-50"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section class="w-full max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <div class="rounded-2xl bg-neutral-surface p-8 sm:p-12">
            <h2 class="mb-8 text-center font-display text-2xl font-bold text-text-main">
              Questions Fréquentes
            </h2>
            <div class="space-y-4">
              <FaqItem
                question="Puis-je changer de plan à tout moment ?"
                answer="Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre tableau de bord. Les changements de facturation seront appliqués au prorata."
              />
              <FaqItem
                question="Comment fonctionnent les crédits vidéo ?"
                answer="Chaque génération de vidéo par un agent IA consomme des crédits. Une minute de vidéo générée équivaut à 1 crédit. Les crédits non utilisés ne sont pas reportés au mois suivant."
              />
              <FaqItem
                question="Y a-t-il une période d'engagement ?"
                answer="Non, nos offres mensuelles sont sans engagement. Vous pouvez annuler quand vous le souhaitez. Les offres annuelles vous engagent sur 12 mois en échange d'une réduction de 20%."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const AddOnCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  price: string;
  color: string;
  bgColor: string;
}> = ({ icon, title, desc, price, color, bgColor }) => (
  <div class="group flex flex-col justify-between rounded-xl border border-neutral-border bg-white p-5 hover:border-primary/50 transition-colors cursor-pointer">
    <div>
      <div
        class={`mb-3 flex size-10 items-center justify-center rounded-lg ${bgColor} ${color}`}
      >
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <h4 class="font-display font-bold text-text-main">{title}</h4>
      <p class="mt-1 text-xs text-text-secondary">{desc}</p>
    </div>
    <div class="mt-4 flex items-center justify-between">
      <span class="text-sm font-bold text-text-main">{price}</span>
      <span class="material-symbols-outlined text-neutral-300 group-hover:text-primary transition-colors">
        add_circle
      </span>
    </div>
  </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => (
  <div class="rounded-xl bg-white p-4 shadow-sm">
    <details class="group">
      <summary class="flex cursor-pointer items-center justify-between font-medium text-text-main">
        <span>{question}</span>
        <span class="material-symbols-outlined text-text-secondary transition group-open:rotate-180">
          expand_more
        </span>
      </summary>
      <div class="mt-3 text-sm text-text-secondary">{answer}</div>
    </details>
  </div>
);

export default Pricing;