import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-white dark:bg-background-dark pt-16 pb-24 lg:pt-28 lg:pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 dark:bg-primary/10 blur-[120px]"></div>
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 dark:bg-purple-900/10 blur-[100px]"></div>
          </div>
          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center gap-2 rounded-full border border-blue-100 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800/50 px-4 py-1.5 backdrop-blur-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold text-primary dark:text-blue-300 tracking-wide uppercase">
                  New AI Video Engine v2.0
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#111118] dark:text-white font-display">
                Revolutionize Lead Gen with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  AI-Powered
                </span>{' '}
                Face-to-Face Video.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                FaceàFace helps entrepreneurs and SMEs scale personal connections
                instantly. Turn cold leads into warm conversations with
                hyper-personalized video outreach that feels human.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <Link
                  to="/signup"
                  className="flex items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="group flex items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 text-[#111118] dark:text-white text-base font-semibold transition-all shadow-sm hover:shadow-md"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-primary mr-3 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">
                      play_arrow
                    </span>
                  </span>
                  Watch Demo
                </Link>
              </div>
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-green-500">
                    check_circle
                  </span>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-green-500">
                    check_circle
                  </span>
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-green-500">
                    check_circle
                  </span>
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.1/1] rounded-3xl p-3 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-2xl shadow-blue-900/10">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 group">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/800/800')",
                  }}
                ></div>
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce-slow">
                  <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-lg">
                      trending_up
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Response Rate
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      +145%
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl w-full flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer">
                    <div
                      className="size-14 rounded-full bg-cover bg-center border-2 border-white shadow-md"
                      style={{
                        backgroundImage:
                          "url('https://picsum.photos/100/100')",
                      }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-2.5 w-24 bg-white/90 rounded-full"></div>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-green-500/80 text-white font-bold uppercase tracking-wider">
                          Sent
                        </span>
                      </div>
                      <div className="h-2 w-3/4 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="size-12 rounded-xl bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg transition-colors">
                      <span className="material-symbols-outlined">send</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-background-soft dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl flex justify-center px-4">
            <div className="w-full text-center">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-10 uppercase tracking-widest">
                Trusted by 500+ innovative teams scaling their outreach
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                <span className="text-2xl font-black text-gray-600 dark:text-gray-400 font-sans tracking-tighter">
                  AcmeCorp
                </span>
                <span className="text-2xl font-black text-gray-600 dark:text-gray-400 font-serif italic">
                  GlobalBank
                </span>
                <span className="text-2xl font-black text-gray-600 dark:text-gray-400 font-mono">
                  SaaSify
                </span>
                <span className="text-2xl font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                  NextGen
                </span>
                <span className="text-2xl font-black text-gray-600 dark:text-gray-400 font-sans">
                  VentureAI
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-background-dark px-4" id="features">
          <div className="mx-auto max-w-7xl flex justify-center">
            <div className="w-full flex flex-col gap-16">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  Key Benefits
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111118] dark:text-white mb-6 leading-tight font-display">
                  Why Choose FaceàFace?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                  Scale your personality without scaling your hours. Our AI handles
                  the heavy lifting of initial contact so you can focus on closing
                  deals.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-6 p-8 rounded-3xl bg-background-soft dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="size-16 rounded-2xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      smart_toy
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111118] dark:text-white mb-3 font-display">
                      Automated Outreach
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      Setup campaigns that run on autopilot. Let AI initiate
                      thousands of personal conversations while you sleep, ensuring
                      no lead is left behind.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-8 rounded-3xl bg-background-soft dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 dark:bg-primary/10 rounded-full blur-3xl group-hover:bg-blue-200 transition-colors"></div>
                  <div className="size-16 rounded-2xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                    <span className="material-symbols-outlined text-3xl">
                      video_camera_front
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#111118] dark:text-white mb-3 font-display">
                      AI Video Synthesis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      Generate realistic video responses instantly tailored to the
                      specific lead's profile. Your digital twin speaks perfectly,
                      every time.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-8 rounded-3xl bg-background-soft dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="size-16 rounded-2xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      trending_up
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111118] dark:text-white mb-3 font-display">
                      Lead Scoring
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      Identify the warmest leads instantly based on interaction
                      data and sentiment analysis. Prioritize who to call first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background-soft to-white dark:from-gray-900/50 dark:to-background-dark px-4" id="demo">
          <div className="mx-auto max-w-7xl flex justify-center">
            <div className="w-full max-w-[1100px] flex flex-col gap-12">
              <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#111118] dark:text-white mb-4 font-display">
                    See it in action
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Watch how easy it is to create a personalized campaign in under
                    2 minutes. No technical skills required.
                  </p>
                </div>
                <Link
                  to="/demo"
                  className="shrink-0 text-primary font-bold hover:text-primary-dark hover:underline flex items-center gap-2 transition-colors text-lg"
                >
                  View full tutorial{' '}
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="rounded-3xl p-2 bg-white dark:bg-gray-800 shadow-2xl shadow-blue-900/10 border border-gray-100 dark:border-gray-700">
                <div className="rounded-2xl overflow-hidden bg-[#111118] relative aspect-video group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity group-hover:opacity-75"
                    style={{
                      backgroundImage:
                        "url('https://picsum.photos/1200/800')",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary transition-all duration-300 border border-white/50 shadow-2xl">
                      <span className="material-symbols-outlined text-6xl fill-current ml-2">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent flex items-center px-6">
                    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
          <div className="mx-auto max-w-7xl flex justify-center relative z-10">
            <div className="w-full max-w-[900px] text-center flex flex-col gap-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-display">
                Ready to scale your personal connection?
              </h2>
              <p className="text-blue-100 text-xl md:text-2xl max-w-2xl mx-auto font-light">
                Join thousands of modern entrepreneurs using FaceàFace to turn
                strangers into customers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-4">
                <Link
                  to="/signup"
                  className="bg-white text-primary hover:bg-blue-50 rounded-2xl px-10 py-5 font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Get Started for Free
                </Link>
                <Link
                  to="/demo"
                  className="bg-blue-600/50 backdrop-blur-sm text-white hover:bg-blue-600 border border-blue-400 rounded-2xl px-10 py-5 font-bold text-lg transition-all hover:-translate-y-1"
                >
                  Schedule a Demo
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-4 opacity-80">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
