import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';

const Studio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'questions' | 'theme' | 'settings' | 'publish'>('questions');
  const [isAiThinking, setIsAiThinking] = useState(false);
  
  // State for Theme Customization
  const [buttonShape, setButtonShape] = useState<'square' | 'rounded' | 'pill'>('rounded');
  const [primaryColor, setPrimaryColor] = useState('#2b2bee');
  const [hasShadow, setHasShadow] = useState(true);

  // State for Settings
  const [flowName, setFlowName] = useState('Flux de Bienvenue');
  const [flowDescription, setFlowDescription] = useState('');

  // State for Publish
  const [platform, setPlatform] = useState<'html' | 'react' | 'wordpress'>('html');

  // State for Q&A Editor
  const [activeQuestionId, setActiveQuestionId] = useState(1);
  const [script, setScript] = useState("Bienvenue ! Je suis ravie de vous voir ici. Pour commencer, pourriez-vous me dire quel est votre principal défi actuel dans votre entreprise ?");

  // Gemini Integration for Design suggestions
  const handleAiDesignSuggestion = async () => {
    if (!process.env.API_KEY) {
      alert("API Key missing");
      return;
    }
    
    setIsAiThinking(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: "Analyze a corporate logo with blue and purple gradients. Suggest a 'Trustworthy' color palette (primary hex, background hex) and a button shape that maximizes engagement. Return strictly JSON with keys: primaryColor, backgroundColor, buttonShape.",
        config: { responseMimeType: "application/json" }
      });
      
      console.log("AI Suggestion:", response.text);
      
      setTimeout(() => {
        setPrimaryColor('#4F46E5'); 
        setButtonShape('pill');
        alert("Thème 'Confiance' appliqué avec succès !");
      }, 1000);

    } catch (error) {
      console.error("AI Error", error);
    } finally {
      setIsAiThinking(false);
    }
  };

  // Gemini Integration for Description Auto-generation
  const handleAiDescription = async () => {
    if (!process.env.API_KEY) return;
    setIsAiThinking(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a short, professional internal description (in French) for a marketing video flow named "${flowName}". It should explain the goal of the flow for the marketing team.`,
      });
      if (response.text) {
        setFlowDescription(response.text);
      }
    } catch (error) {
      console.error("AI Error", error);
    } finally {
      setIsAiThinking(false);
    }
  }

  // Gemini Integration for Social Share Text
  const handleSocialShare = async (network: string) => {
    if (!process.env.API_KEY) {
      alert(`Partage sur ${network} (Configurez l'API Key pour générer le texte)`);
      return;
    }
    setIsAiThinking(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Write a short, engaging ${network} post (in French) to promote a new interactive video flow named "${flowName}". Include a placeholder for the link.`,
      });
      alert(`Message généré pour ${network} :\n\n${response.text}`);
    } catch (error) {
      console.error("AI Error", error);
    } finally {
      setIsAiThinking(false);
    }
  };

  // Gemini Integration for Script Improvement
  const handleAiScriptImprovement = async () => {
    if (!process.env.API_KEY) {
        alert("API Key missing");
        return;
    }
    setIsAiThinking(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Improve the following video script to be more engaging, warm, and professional for a B2B context (in French): "${script}"`,
      });
      if (response.text) {
        setScript(response.text);
      }
    } catch (error) {
      console.error("AI Error", error);
    } finally {
      setIsAiThinking(false);
    }
  };

  const getCodeSnippet = () => {
    switch (platform) {
      case 'react':
        return `<FaceAFaceWidget \n  id="flux_wb_892301" \n  position="bottom-right" \n  primaryColor="${primaryColor}" \n/>`;
      case 'wordpress':
        return `[faceaface id="flux_wb_892301"]`;
      default:
        return `<!-- FaceàFace Widget -->\n<script src="https://cdn.faceaface.app/widget.js" async></script>\n<face-a-face-widget \n    id="flux_wb_892301" \n    position="bottom-right"\n    primary-color="${primaryColor}">\n</face-a-face-widget>`;
    }
  };

  const questions = [
    { id: 1, title: 'Q1: Introduction', subtitle: 'Bienvenue ! Quel est votre...', status: 'Vidéo OK', statusColor: 'bg-green-100 text-green-700' },
    { id: 2, title: 'Q2: Qualification', subtitle: 'Combien de leads générez-vous...', status: 'Brouillon', statusColor: 'bg-yellow-100 text-yellow-700' },
    { id: 3, title: 'Q3: Budget', subtitle: 'Quel est votre budget estimé ?', status: 'Vide', statusColor: 'bg-gray-100 text-gray-500' },
  ];

  return (
    <div className="font-display bg-[#f6f6f8] dark:bg-background-dark text-[#111118] dark:text-white h-screen overflow-hidden flex selection:bg-primary/20">
      {/* SideNavBar - Consistent Style */}
      <aside className="w-72 bg-white dark:bg-[#1a1a2e] border-r border-[#f0f0f4] dark:border-[#2f2f46] flex-shrink-0 flex flex-col justify-between p-6 z-20 h-full hidden lg:flex">
        <div className="flex flex-col gap-6">
          {/* Brand */}
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">face</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#111118] dark:text-white text-base font-bold leading-normal">
                FaceàFace
              </h1>
              <p className="text-[#616189] dark:text-[#a0a0b0] text-xs font-medium leading-normal">
                Entreprise Pro
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
              to="/dashboard"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                dashboard
              </span>
              <span className="text-sm font-medium leading-normal">
                Tableau de bord
              </span>
            </Link>
            {/* Active State for Studio */}
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-[#f0f0f4] dark:bg-[#2f2f46] text-primary cursor-default">
              <span className="material-symbols-outlined filled">videocam</span>
              <span className="text-sm font-bold leading-normal">Studio</span>
            </div>
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
                analytics
              </span>
              <span className="text-sm font-medium leading-normal">Analyses</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f0f0f4] dark:hover:bg-[#2f2f46] text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                settings
              </span>
              <span className="text-sm font-medium leading-normal">Paramètres</span>
            </a>
          </nav>
        </div>

        {/* User Profile */}
        <div className="mt-auto pt-4 border-t border-[#f0f0f4] dark:border-[#2f2f46] flex items-center gap-3">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" style={{backgroundImage: "url('https://picsum.photos/id/64/100/100')"}}></div>
            <div className="flex flex-col min-w-0">
                <p className="text-[#111118] dark:text-white text-sm font-bold truncate">Marc Dubois</p>
                <p className="text-[#616189] dark:text-[#a0a0b0] text-xs truncate">marc@faceaface.io</p>
            </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#f6f6f8] dark:bg-background-dark">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap bg-white dark:bg-[#1a1a2e] border-b border-[#f0f0f4] dark:border-[#2f2f46] px-8 py-4 z-10 h-16">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/dashboard" className="text-[#616189] dark:text-[#a0a0b0] font-medium hover:text-primary">Accueil</Link>
            <span className="text-[#616189] dark:text-[#a0a0b0] material-symbols-outlined text-base">chevron_right</span>
            <Link to="/studio" className="text-[#616189] dark:text-[#a0a0b0] font-medium hover:text-primary">Studio</Link>
            <span className="text-[#616189] dark:text-[#a0a0b0] material-symbols-outlined text-base">chevron_right</span>
            <span className="text-[#111118] dark:text-white font-bold">
                {activeTab === 'questions' ? 'Questions & Réponses' : activeTab === 'theme' ? 'Thème' : activeTab === 'settings' ? 'Paramètres' : 'Publication'}
            </span>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <button className="flex items-center justify-center size-10 rounded-full bg-[#f6f6f8] dark:bg-[#242438] hover:bg-[#eaeaef] dark:hover:bg-[#3f3f56] transition-colors text-[#111118] dark:text-white">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button onClick={() => setActiveTab('publish')} className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                Publier le bot
            </button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
            
            {/* Page Heading */}
            <div className="flex flex-col gap-1">
                <h1 className="text-[#111118] dark:text-white text-3xl font-bold tracking-tight">Configuration du Diagnostic</h1>
                <p className="text-[#616189] dark:text-[#a0a0b0] text-base">Créez et éditez le flux de conversation de votre assistant vidéo.</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#dbdbe6] dark:border-[#2f2f46] overflow-x-auto mb-2">
              <div className="flex min-w-max gap-8">
                <button
                  onClick={() => setActiveTab('questions')}
                  className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === 'questions' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'questions' ? 'fill' : ''}`}>
                    forum
                  </span>
                  <span className="text-sm font-bold">Questions</span>
                </button>
                <button
                  onClick={() => setActiveTab('theme')}
                  className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === 'theme' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'theme' ? 'fill' : ''}`}>
                    style
                  </span>
                  <span className="text-sm font-bold">Thème</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === 'settings' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'settings' ? 'fill' : ''}`}>
                    tune
                  </span>
                  <span className="text-sm font-bold">Paramètres</span>
                </button>
                <button
                  onClick={() => setActiveTab('publish')}
                  className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === 'publish' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'publish' ? 'fill' : ''}`}>
                    publish
                  </span>
                  <span className="text-sm font-bold">Publication</span>
                </button>
              </div>
            </div>

            {/* Questions Tab (New Q&A Editor) */}
            {activeTab === 'questions' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Question Flow */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[#111118] dark:text-white font-bold text-lg">Flux de questions</h3>
                        <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">add</span> Ajouter
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {questions.map((q) => (
                            <label key={q.id} className={`group cursor-pointer relative flex items-start gap-4 rounded-xl border-2 ${activeQuestionId === q.id ? 'border-primary bg-white dark:bg-[#1a1a2e]' : 'border-[#dbdbe6] dark:border-[#2f2f46] bg-white dark:bg-[#1a1a2e] hover:border-primary/50'} p-4 shadow-sm transition-all`}>
                                <input 
                                    type="radio" 
                                    name="question_flow" 
                                    className="mt-1 h-5 w-5 border-2 border-[#dbdbe6] dark:border-[#3f3f56] bg-transparent text-primary focus:ring-0 focus:ring-offset-0 checked:border-primary checked:bg-primary"
                                    checked={activeQuestionId === q.id}
                                    onChange={() => setActiveQuestionId(q.id)}
                                />
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex justify-between items-start w-full">
                                        <p className="text-[#111118] dark:text-white text-sm font-bold">{q.title}</p>
                                        <div className="flex gap-1">
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${q.statusColor}`}>{q.status}</span>
                                        </div>
                                    </div>
                                    <p className="text-[#616189] dark:text-[#a0a0b0] text-sm line-clamp-1">{q.subtitle}</p>
                                </div>
                                <div className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity ${activeQuestionId === q.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                    <span className="material-symbols-outlined text-[#dbdbe6] dark:text-[#3f3f56]">drag_indicator</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Right Column: Editor Panel */}
                <div className="lg:col-span-8 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm flex flex-col overflow-hidden">
                    {/* Panel Header */}
                    <div className="p-6 border-b border-[#f0f0f4] dark:border-[#2f2f46] flex justify-between items-center bg-white dark:bg-[#1a1a2e] sticky top-0 z-10">
                        <div>
                            <h2 className="text-lg font-bold text-[#111118] dark:text-white">Édition: Q1 Introduction</h2>
                            <p className="text-sm text-[#616189] dark:text-[#a0a0b0]">Configurez la vidéo et les options de réponse pour cette étape.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 text-sm font-bold text-[#616189] dark:text-[#a0a0b0] bg-[#f6f6f8] dark:bg-[#242438] rounded-lg hover:bg-[#eaeaef] dark:hover:bg-[#3f3f56]">Aperçu</button>
                            <button className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/20">Sauvegarder</button>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col gap-8">
                        {/* Video & Script Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Video Preview */}
                            <div className="relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden bg-black group">
                                <img alt="Video preview" className="w-full h-full object-cover opacity-80" src="https://picsum.photos/400/300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all text-white border border-white/50">
                                        <span className="material-symbols-outlined text-3xl fill-1 ml-1">play_arrow</span>
                                    </button>
                                </div>
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button className="p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white backdrop-blur-sm text-xs flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">upload</span> Changer
                                    </button>
                                </div>
                            </div>

                            {/* Script & AI Helper */}
                            <div className="flex flex-col gap-4">
                                <label className="block text-sm font-bold text-[#111118] dark:text-white">Script de la question</label>
                                <div className="relative">
                                    <textarea 
                                        className="w-full min-h-[140px] p-4 rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] bg-[#f6f6f8] dark:bg-[#242438] text-[#111118] dark:text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary resize-none placeholder-[#9ca3af]" 
                                        placeholder="Tapez votre question ici..."
                                        value={script}
                                        onChange={(e) => setScript(e.target.value)}
                                    ></textarea>
                                    <button 
                                        onClick={handleAiScriptImprovement}
                                        disabled={isAiThinking}
                                        className="absolute bottom-3 right-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:shadow-lg transition-shadow disabled:opacity-70"
                                    >
                                        <span className={`material-symbols-outlined text-sm ${isAiThinking ? 'animate-spin' : ''}`}>auto_awesome</span>
                                        {isAiThinking ? '...' : 'Améliorer avec l\'IA'}
                                    </button>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-3 flex gap-3 items-start">
                                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">lightbulb</span>
                                    <div>
                                        <p className="text-primary text-xs font-bold mb-1">Conseil Pro</p>
                                        <p className="text-[#616189] dark:text-[#a0a0b0] text-xs">Les questions ouvertes en début de parcours augmentent l'engagement de 24%. Soyez chaleureux !</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-[#f0f0f4] dark:border-[#2f2f46]" />

                        {/* Response Configuration */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#111118] dark:text-white font-bold text-lg">Type de réponse attendue</h3>
                                {/* Response Type Tabs */}
                                <div className="bg-[#f6f6f8] dark:bg-[#242438] p-1 rounded-lg inline-flex">
                                    <button className="px-4 py-1.5 rounded-md bg-white dark:bg-[#1a1a2e] text-[#111118] dark:text-white text-sm font-bold shadow-sm transition-all">Choix Multiples</button>
                                    <button className="px-4 py-1.5 rounded-md text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white text-sm font-medium transition-all">Texte Libre</button>
                                    <button className="px-4 py-1.5 rounded-md text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white text-sm font-medium transition-all">Vidéo</button>
                                </div>
                            </div>

                            {/* Options Editor */}
                            <div className="flex flex-col gap-3">
                                {/* Option 1 */}
                                <div className="flex items-center gap-3 p-3 border border-[#dbdbe6] dark:border-[#3f3f56] rounded-xl bg-white dark:bg-[#1a1a2e] group hover:border-primary/30 transition-colors">
                                    <div className="cursor-grab text-[#dbdbe6] dark:text-[#3f3f56] hover:text-[#616189] dark:hover:text-[#a0a0b0]">
                                        <span className="material-symbols-outlined">drag_indicator</span>
                                    </div>
                                    <div className="size-8 bg-[#f6f6f8] dark:bg-[#242438] rounded-lg flex items-center justify-center text-sm font-bold text-[#616189] dark:text-[#a0a0b0]">A</div>
                                    <input className="flex-1 bg-transparent border-none focus:ring-0 text-[#111118] dark:text-white font-medium placeholder-[#dbdbe6]" type="text" value="Génération de leads" placeholder="Texte du bouton..." />
                                    <div className="h-6 w-px bg-[#f0f0f4] dark:bg-[#2f2f46]"></div>
                                    <select className="bg-transparent border-none text-xs text-[#616189] dark:text-[#a0a0b0] font-medium focus:ring-0 cursor-pointer">
                                        <option>Aller à Q2</option>
                                        <option>Aller à Q3</option>
                                        <option>Finir</option>
                                    </select>
                                    <button className="text-[#dbdbe6] dark:text-[#3f3f56] hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </div>
                                {/* Option 2 */}
                                <div className="flex items-center gap-3 p-3 border border-[#dbdbe6] dark:border-[#3f3f56] rounded-xl bg-white dark:bg-[#1a1a2e] group hover:border-primary/30 transition-colors">
                                    <div className="cursor-grab text-[#dbdbe6] dark:text-[#3f3f56] hover:text-[#616189] dark:hover:text-[#a0a0b0]">
                                        <span className="material-symbols-outlined">drag_indicator</span>
                                    </div>
                                    <div className="size-8 bg-[#f6f6f8] dark:bg-[#242438] rounded-lg flex items-center justify-center text-sm font-bold text-[#616189] dark:text-[#a0a0b0]">B</div>
                                    <input className="flex-1 bg-transparent border-none focus:ring-0 text-[#111118] dark:text-white font-medium placeholder-[#dbdbe6]" type="text" value="Recrutement" placeholder="Texte du bouton..." />
                                    <div className="h-6 w-px bg-[#f0f0f4] dark:bg-[#2f2f46]"></div>
                                    <select className="bg-transparent border-none text-xs text-[#616189] dark:text-[#a0a0b0] font-medium focus:ring-0 cursor-pointer">
                                        <option>Aller à Q2</option>
                                        <option>Aller à Q3</option>
                                        <option>Finir</option>
                                    </select>
                                    <button className="text-[#dbdbe6] dark:text-[#3f3f56] hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </div>
                                {/* Add New Option */}
                                <button className="flex items-center justify-center gap-2 p-3 border border-dashed border-[#dbdbe6] dark:border-[#3f3f56] rounded-xl text-[#616189] dark:text-[#a0a0b0] hover:text-primary hover:border-primary hover:bg-primary/5 transition-all font-medium text-sm">
                                    <span className="material-symbols-outlined text-xl">add_circle</span>
                                    Ajouter une option
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}

            {/* Theme View Grid Layout */}
            {activeTab === 'theme' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
                {/* Left Column (8): Preview */}
                <div className="lg:col-span-8 flex flex-col gap-6 order-2 lg:order-1">
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-1 shadow-sm border border-[#f0f0f4] dark:border-[#2f2f46] h-full flex flex-col">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f4] dark:border-[#2f2f46]">
                      <h3 className="font-bold text-[#111118] dark:text-white">Aperçu en direct</h3>
                      <div className="flex bg-[#f0f0f4] dark:bg-[#2f2f46] rounded-lg p-1">
                        <button className="p-1.5 rounded-md bg-white dark:bg-black/20 shadow-sm text-[#111118] dark:text-white">
                          <span className="material-symbols-outlined text-[18px]">desktop_mac</span>
                        </button>
                        <button className="p-1.5 rounded-md text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white">
                          <span className="material-symbols-outlined text-[18px]">smartphone</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#F8F9FC] dark:bg-[#242438] p-8 flex items-center justify-center rounded-b-xl relative overflow-hidden min-h-[500px]">
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2b2bee_1px,transparent_1px)] [background-size:20px_20px]"></div>
                      <div className="w-full max-w-md aspect-[9/16] bg-black rounded-[2rem] shadow-2xl overflow-hidden relative border-4 border-white dark:border-[#3f3f56] ring-1 ring-[#dbdbe6] flex flex-col">
                        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: "url('https://picsum.photos/id/64/400/800')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between p-6 text-white">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 h-1 bg-white/30 rounded-full flex-1 mr-4">
                              <div className="w-1/3 h-full bg-white rounded-full"></div>
                            </div>
                            <button className="text-white/80 hover:text-white"><span className="material-symbols-outlined">close</span></button>
                          </div>
                          <div className="mt-8">
                            <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">Nouveau</span>
                          </div>
                          <div className="flex flex-col gap-4 mt-auto">
                            <div className="space-y-1">
                              <h4 className="font-bold text-2xl">Démo Produit</h4>
                              <p className="text-white/80 text-sm">Découvrez comment notre solution booste votre productivité.</p>
                            </div>
                            <div className="flex flex-col gap-3 pt-2">
                              <button 
                                style={{ 
                                  backgroundColor: primaryColor,
                                  borderRadius: buttonShape === 'square' ? '0px' : buttonShape === 'pill' ? '9999px' : '1rem',
                                  boxShadow: hasShadow ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
                                }}
                                className="w-full h-12 text-white font-bold transition-transform active:scale-95 flex items-center justify-center gap-2 group"
                              >
                                <span>Réserver une démo</span>
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                              </button>
                              <button className="w-full h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl transition-colors flex items-center justify-center">
                                Plus d'infos
                              </button>
                            </div>
                            <div className="flex items-center justify-between pt-2 opacity-80">
                              <button><span className="material-symbols-outlined fill">play_arrow</span></button>
                              <button><span className="material-symbols-outlined">volume_up</span></button>
                              <span className="text-xs font-mono">00:12 / 01:30</span>
                              <button><span className="material-symbols-outlined">settings</span></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (4): Controls */}
                <div className="lg:col-span-4 flex flex-col gap-6 order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-[#f8f9fc] to-white dark:from-[#1a1a2e] dark:to-[#242438] rounded-2xl border border-indigo-100 dark:border-indigo-900 shadow-sm p-5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <span className="material-symbols-outlined text-6xl text-indigo-500">psychology</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-indigo-500 text-[20px]">auto_awesome</span>
                        Suggestion IA
                      </h3>
                      <p className="text-sm text-[#616189] dark:text-[#a0a0b0] mb-4 leading-relaxed">
                        L'IA a analysé votre logo. Voici un thème recommandé pour maximiser l'engagement.
                      </p>
                      <button 
                        onClick={handleAiDesignSuggestion}
                        className="w-full py-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-bold text-sm rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors border border-indigo-100 dark:border-indigo-800 flex items-center justify-center gap-2"
                      >
                        <span>Appliquer le thème "Confiance"</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-[#f0f0f4] dark:border-[#2f2f46] bg-[#fafafc] dark:bg-[#242438]">
                      <h3 className="font-bold text-[#111118] dark:text-white text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#616189] dark:text-[#a0a0b0] text-[18px]">palette</span>
                        Palette de Couleurs
                      </h3>
                    </div>
                    <div className="p-5 flex flex-col gap-5">
                      <div>
                        <label className="text-xs font-bold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider mb-3 block">Couleur Principale</label>
                        <div className="flex gap-3 flex-wrap">
                          <button onClick={() => setPrimaryColor('#2b2bee')} className={`size-8 rounded-full bg-[#2b2bee] shadow-sm ${primaryColor === '#2b2bee' ? 'ring-2 ring-offset-2 ring-[#2b2bee]' : ''}`}></button>
                          <button onClick={() => setPrimaryColor('#10b981')} className={`size-8 rounded-full bg-[#10b981] shadow-sm ${primaryColor === '#10b981' ? 'ring-2 ring-offset-2 ring-[#10b981]' : ''}`}></button>
                          <button onClick={() => setPrimaryColor('#f59e0b')} className={`size-8 rounded-full bg-[#f59e0b] shadow-sm ${primaryColor === '#f59e0b' ? 'ring-2 ring-offset-2 ring-[#f59e0b]' : ''}`}></button>
                          <button onClick={() => setPrimaryColor('#ec4899')} className={`size-8 rounded-full bg-[#ec4899] shadow-sm ${primaryColor === '#ec4899' ? 'ring-2 ring-offset-2 ring-[#ec4899]' : ''}`}></button>
                          <button onClick={() => setPrimaryColor('#4F46E5')} className={`size-8 rounded-full bg-[#4F46E5] shadow-sm ${primaryColor === '#4F46E5' ? 'ring-2 ring-offset-2 ring-[#4F46E5]' : ''}`}></button>
                          <button className="size-8 rounded-full bg-white dark:bg-[#2f2f46] border border-[#dbdbe6] dark:border-[#3f3f56] flex items-center justify-center text-[#616189] hover:bg-gray-50 dark:hover:bg-[#3f3f56]">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider mb-3 block">Couleur de Fond</label>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="aspect-square rounded-lg bg-white border border-[#dbdbe6] cursor-pointer ring-2 ring-primary ring-offset-1"></div>
                          <div className="aspect-square rounded-lg bg-black cursor-pointer hover:opacity-80 transition-opacity"></div>
                          <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-[#dbdbe6] cursor-pointer hover:shadow-sm"></div>
                          <div className="aspect-square rounded-lg bg-[#2b2bee] cursor-pointer hover:opacity-80"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-[#f0f0f4] dark:border-[#2f2f46] bg-[#fafafc] dark:bg-[#242438]">
                      <h3 className="font-bold text-[#111118] dark:text-white text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#616189] dark:text-[#a0a0b0] text-[18px]">smart_button</span>
                        Style des Boutons
                      </h3>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider mb-3 block">Forme</label>
                        <div className="grid grid-cols-3 gap-2 bg-[#f8f9fc] dark:bg-[#242438] p-1 rounded-xl border border-[#f0f0f4] dark:border-[#3f3f56]">
                          <button onClick={() => setButtonShape('square')} className={`py-2 rounded-lg text-xs font-medium transition-all ${buttonShape === 'square' ? 'bg-white dark:bg-[#1a1a2e] shadow-sm border border-[#dbdbe6] dark:border-[#3f3f56] text-[#111118] dark:text-white font-bold' : 'text-[#616189] dark:text-[#a0a0b0] hover:bg-white dark:hover:bg-[#1a1a2e]'}`}>Carré</button>
                          <button onClick={() => setButtonShape('rounded')} className={`py-2 rounded-lg text-xs font-medium transition-all ${buttonShape === 'rounded' ? 'bg-white dark:bg-[#1a1a2e] shadow-sm border border-[#dbdbe6] dark:border-[#3f3f56] text-[#111118] dark:text-white font-bold' : 'text-[#616189] dark:text-[#a0a0b0] hover:bg-white dark:hover:bg-[#1a1a2e]'}`}>Arrondi</button>
                          <button onClick={() => setButtonShape('pill')} className={`py-2 rounded-lg text-xs font-medium transition-all ${buttonShape === 'pill' ? 'bg-white dark:bg-[#1a1a2e] shadow-sm border border-[#dbdbe6] dark:border-[#3f3f56] text-[#111118] dark:text-white font-bold' : 'text-[#616189] dark:text-[#a0a0b0] hover:bg-white dark:hover:bg-[#1a1a2e]'}`}>Pill</button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider block">Aperçu</label>
                        <button 
                          style={{ 
                            backgroundColor: primaryColor,
                            borderRadius: buttonShape === 'square' ? '0px' : buttonShape === 'pill' ? '9999px' : '1rem',
                            boxShadow: hasShadow ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
                          }}
                          className="w-full h-10 text-white font-bold shadow-md flex items-center justify-center transition-all"
                        >
                          Bouton Test
                        </button>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#f0f0f4] dark:border-[#2f2f46]">
                        <span className="text-sm font-medium text-[#111118] dark:text-white">Ombre portée</span>
                        <button 
                          onClick={() => setHasShadow(!hasShadow)}
                          className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${hasShadow ? 'bg-primary' : 'bg-gray-300'}`}
                        >
                          <span className={`absolute top-1 size-4 bg-white rounded-full shadow-sm transition-transform ${hasShadow ? 'right-1' : 'left-1'}`}></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-[#f0f0f4] dark:border-[#2f2f46] bg-[#fafafc] dark:bg-[#242438]">
                      <h3 className="font-bold text-[#111118] dark:text-white text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#616189] dark:text-[#a0a0b0] text-[18px]">animation</span>
                        Animations
                      </h3>
                    </div>
                    <div className="p-5">
                      <div className="relative">
                        <select className="w-full appearance-none bg-white dark:bg-[#1a1a2e] border border-[#dbdbe6] dark:border-[#2f2f46] text-[#111118] dark:text-white text-sm rounded-xl px-4 py-2.5 focus:border-primary focus:ring-primary">
                          <option>Fondu (Fade)</option>
                          <option>Glissement (Slide)</option>
                          <option>Zoom</option>
                          <option>Aucune</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#616189] dark:text-[#a0a0b0]">
                          <span className="material-symbols-outlined text-[20px]">expand_more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings View Grid Layout */}
            {activeTab === 'settings' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
                {/* Left Column (8): General Settings */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  {/* General Info Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow-sm border border-[#f0f0f4] dark:border-[#2f2f46]">
                    <h3 className="font-bold text-[#111118] dark:text-white text-lg mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">info</span>
                      Informations Générales
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#111118] dark:text-white mb-2" htmlFor="flow-name">Nom du Flux</label>
                        <input 
                          className="w-full rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] bg-[#f8f9fc] dark:bg-[#242438] px-4 py-3 text-sm focus:border-primary focus:ring-primary/20 placeholder:text-[#9ca3af] dark:text-white" 
                          id="flow-name" 
                          type="text" 
                          value={flowName} 
                          onChange={(e) => setFlowName(e.target.value)}
                        />
                        <p className="mt-1 text-xs text-[#616189] dark:text-[#a0a0b0]">Ce nom est uniquement visible pour votre équipe.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#111118] dark:text-white mb-2" htmlFor="flow-lang">Langue par défaut</label>
                          <div className="relative">
                            <select className="w-full appearance-none rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] bg-[#f8f9fc] dark:bg-[#242438] px-4 py-3 text-sm focus:border-primary focus:ring-primary/20 dark:text-white" id="flow-lang">
                              <option value="fr">Français (France)</option>
                              <option value="en">Anglais (US)</option>
                              <option value="es">Espagnol</option>
                              <option value="de">Allemand</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-[#616189] dark:text-[#a0a0b0]">expand_more</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#111118] dark:text-white mb-2" htmlFor="flow-timezone">Fuseau Horaire</label>
                          <div className="relative">
                            <select className="w-full appearance-none rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] bg-[#f8f9fc] dark:bg-[#242438] px-4 py-3 text-sm focus:border-primary focus:ring-primary/20 dark:text-white" id="flow-timezone">
                              <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
                              <option value="UTC">UTC</option>
                              <option value="America/New_York">America/New_York (EST)</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-[#616189] dark:text-[#a0a0b0]">expand_more</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-semibold text-[#111118] dark:text-white">Description interne</label>
                          <button 
                            onClick={handleAiDescription}
                            className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                            Générer avec IA
                          </button>
                        </div>
                        <textarea 
                          className="w-full rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] bg-[#f8f9fc] dark:bg-[#242438] px-4 py-3 text-sm focus:border-primary focus:ring-primary/20 placeholder:text-[#9ca3af] min-h-[100px] dark:text-white" 
                          placeholder="Ajoutez une description pour aider votre équipe à comprendre l'objectif de ce flux..."
                          value={flowDescription}
                          onChange={(e) => setFlowDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Accessibility Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow-sm border border-[#f0f0f4] dark:border-[#2f2f46]">
                    <h3 className="font-bold text-[#111118] dark:text-white text-lg mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">accessibility_new</span>
                      Expérience & Accessibilité
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl border border-[#f0f0f4] dark:border-[#3f3f56] bg-[#fcfcfd] dark:bg-[#242438]">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <span className="material-symbols-outlined text-[20px]">subtitles</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#111118] dark:text-white">Sous-titres automatiques</h4>
                            <p className="text-xs text-[#616189] dark:text-[#a0a0b0]">Générer des sous-titres pour l'accessibilité.</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl border border-[#f0f0f4] dark:border-[#3f3f56] bg-[#fcfcfd] dark:bg-[#242438]">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <span className="material-symbols-outlined text-[20px]">volume_up</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#111118] dark:text-white">Lecture automatique du son</h4>
                            <p className="text-xs text-[#616189] dark:text-[#a0a0b0]">Activer le son au démarrage de la vidéo.</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl border border-[#f0f0f4] dark:border-[#3f3f56] bg-[#fcfcfd] dark:bg-[#242438]">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <span className="material-symbols-outlined text-[20px]">speed</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#111118] dark:text-white">Contrôle de la vitesse</h4>
                            <p className="text-xs text-[#616189] dark:text-[#a0a0b0]">Permettre à l'utilisateur de changer la vitesse.</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Integrations Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow-sm border border-[#f0f0f4] dark:border-[#2f2f46]">
                    <h3 className="font-bold text-[#111118] dark:text-white text-lg mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">extension</span>
                      Intégrations & Avancé
                    </h3>
                    <div className="space-y-4">
                      <div className="border border-[#dbdbe6] dark:border-[#3f3f56] rounded-xl p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-gray-500">webhook</span>
                            <span className="text-sm font-bold text-[#111118] dark:text-white">Webhooks</span>
                          </div>
                          <button className="text-xs font-medium text-primary hover:underline">Documentation</button>
                        </div>
                        <div className="flex gap-2">
                          <input className="flex-1 rounded-lg border border-[#dbdbe6] dark:border-[#3f3f56] bg-[#f8f9fc] dark:bg-[#242438] px-3 py-2 text-sm placeholder:text-[#9ca3af] dark:text-white" placeholder="https://api.monsite.com/hook" type="url"/>
                          <button className="bg-white dark:bg-[#1a1a2e] border border-[#dbdbe6] dark:border-[#3f3f56] text-[#111118] dark:text-white hover:bg-gray-50 dark:hover:bg-[#3f3f56] font-medium rounded-lg px-4 py-2 text-sm">Tester</button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button className="flex items-center justify-between p-4 rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] hover:border-primary/50 hover:bg-primary/5 transition-all group bg-white dark:bg-[#242438]">
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-bold text-[#111118] dark:text-white">Calendly</p>
                              <p className="text-xs text-green-600 font-medium">Connecté</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">settings</span>
                        </button>
                        <button className="flex items-center justify-between p-4 rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56] hover:border-primary/50 hover:bg-primary/5 transition-all group bg-white dark:bg-[#242438]">
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                              <span className="material-symbols-outlined text-[20px]">mail</span>
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-bold text-[#111118] dark:text-white">Mailchimp</p>
                              <p className="text-xs text-[#616189] dark:text-[#a0a0b0]">Non connecté</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">add_link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (4): Notifications & Support */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Notifications Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm flex flex-col">
                    <div className="p-5 border-b border-[#f0f0f4] dark:border-[#2f2f46] flex justify-between items-center bg-[#fafafc] dark:bg-[#242438] rounded-t-2xl">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">notifications_active</span>
                        <h3 className="text-[#111118] dark:text-white font-bold text-base">Notifications</h3>
                      </div>
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">3 Actives</span>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" id="notif-email" type="checkbox"/>
                        <div className="flex flex-col">
                          <label className="text-sm font-bold text-[#111118] dark:text-white" htmlFor="notif-email">Alerte Email</label>
                          <p className="text-xs text-[#616189] dark:text-[#a0a0b0] leading-snug">Recevoir un email à chaque nouvelle réponse vidéo.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <input className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" id="notif-slack" type="checkbox"/>
                        <div className="flex flex-col">
                          <label className="text-sm font-bold text-[#111118] dark:text-white" htmlFor="notif-slack">Slack</label>
                          <p className="text-xs text-[#616189] dark:text-[#a0a0b0] leading-snug">Envoyer une notification sur le canal #leads.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <input defaultChecked className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" id="notif-browser" type="checkbox"/>
                        <div className="flex flex-col">
                          <label className="text-sm font-bold text-[#111118] dark:text-white" htmlFor="notif-browser">Navigateur</label>
                          <p className="text-xs text-[#616189] dark:text-[#a0a0b0] leading-snug">Notifications push desktop lors d'une interaction.</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-[#f0f0f4] dark:border-[#2f2f46]">
                        <label className="block text-xs font-bold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider mb-2">Email destinataire</label>
                        <input className="w-full rounded-lg border border-[#dbdbe6] dark:border-[#3f3f56] px-3 py-2 text-sm focus:border-primary focus:ring-primary/20 bg-white dark:bg-[#1a1a2e] dark:text-white" type="email" defaultValue="contact@faceaface.io"/>
                      </div>
                    </div>
                  </div>

                  {/* Help Card */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 p-5 shadow-sm">
                    <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-[20px]">school</span>
                      Besoin d'aide ?
                    </h4>
                    <p className="text-xs text-indigo-800 dark:text-indigo-200 mb-4 leading-relaxed">
                      Consultez notre documentation pour apprendre à configurer vos webhooks et intégrer FaceàFace à votre CRM.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>
                        <a className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 flex items-center gap-1 group" href="#">
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                          Guide de démarrage
                        </a>
                      </li>
                      <li>
                        <a className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 flex items-center gap-1 group" href="#">
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                          Configurer les intégrations
                        </a>
                      </li>
                    </ul>
                    <button className="w-full bg-white dark:bg-[#1a1a2e] text-indigo-600 dark:text-indigo-400 font-bold text-xs py-2 px-4 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                      Contacter le support
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Publish View Grid Layout */}
            {activeTab === 'publish' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10">
                {/* Left Column (8): Code & Link */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  {/* Integration Code Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-[#f0f0f4] dark:border-[#2f2f46] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">code</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#111118] dark:text-white text-lg">Code d'intégration</h3>
                          <p className="text-[#616189] dark:text-[#a0a0b0] text-sm">Ajoutez ce flux à votre site web existant.</p>
                        </div>
                      </div>
                      <div className="flex bg-[#f0f0f4] dark:bg-[#2f2f46] rounded-lg p-1">
                        <button onClick={() => setPlatform('html')} className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${platform === 'html' ? 'bg-white dark:bg-black/20 text-[#111118] dark:text-white shadow-sm' : 'text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}>HTML Standard</button>
                        <button onClick={() => setPlatform('react')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${platform === 'react' ? 'bg-white dark:bg-black/20 text-[#111118] dark:text-white shadow-sm font-bold' : 'text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}>React</button>
                        <button onClick={() => setPlatform('wordpress')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${platform === 'wordpress' ? 'bg-white dark:bg-black/20 text-[#111118] dark:text-white shadow-sm font-bold' : 'text-[#616189] dark:text-[#a0a0b0] hover:text-[#111118] dark:hover:text-white'}`}>WordPress</button>
                      </div>
                    </div>
                    <div className="p-6 bg-[#fafafc] dark:bg-[#242438]">
                      <p className="text-sm text-[#616189] dark:text-[#a0a0b0] mb-4 font-medium">Copiez et collez ce code juste avant la balise fermante <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-[#111118] dark:text-white">&lt;/body&gt;</code> de votre page.</p>
                      <div className="relative group">
                        <pre className="bg-[#1e1e2d] text-gray-300 p-5 rounded-xl text-xs sm:text-sm font-mono overflow-x-auto border border-[#2b2b40] leading-relaxed shadow-inner">
                          {getCodeSnippet()}
                        </pre>
                        <button className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors border border-white/10 backdrop-blur-sm">
                          <span className="material-symbols-outlined text-[16px]">content_copy</span>
                          <span className="text-xs font-bold">Copier</span>
                        </button>
                      </div>
                      <div className="mt-4 flex items-start gap-2 text-xs text-[#616189] dark:text-[#a0a0b0]">
                        <span className="material-symbols-outlined text-[16px] text-primary mt-0.5">info</span>
                        <p>Besoin d'aide ? Consultez notre <a className="text-primary hover:underline font-medium" href="#">guide d'intégration</a> pour des instructions détaillées sur Wix, Shopify, et plus encore.</p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Link Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <span className="material-symbols-outlined">link</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#111118] dark:text-white text-lg">Lien Direct</h3>
                        <p className="text-[#616189] dark:text-[#a0a0b0] text-sm">Partagez une page dédiée hébergée par FaceàFace.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      <div className="flex-1 relative">
                        <input className="w-full bg-[#f8f9fc] dark:bg-[#242438] border border-[#dbdbe6] dark:border-[#3f3f56] text-[#111118] dark:text-white text-sm rounded-xl pl-4 pr-12 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-medium" type="text" value="https://faceaface.app/v/flux-bienvenue-01" readOnly />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-[#616189] dark:text-[#a0a0b0] transition-colors">
                          <span className="material-symbols-outlined text-[20px]">content_copy</span>
                        </button>
                      </div>
                      <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-[#1a1a2e] border border-[#dbdbe6] dark:border-[#3f3f56] hover:bg-gray-50 dark:hover:bg-[#2f2f46] text-[#111118] dark:text-white rounded-xl font-bold text-sm transition-colors whitespace-nowrap">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        Ouvrir
                      </button>
                    </div>
                    <h4 className="text-xs font-bold text-[#616189] dark:text-[#a0a0b0] uppercase tracking-wider mb-3">Partager sur les réseaux</h4>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => handleSocialShare('Email')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f0f4] dark:bg-[#2f2f46] hover:bg-[#e4e4e9] dark:hover:bg-[#3f3f56] text-[#111118] dark:text-white text-sm font-bold transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-blue-600">mail</span>
                        Email
                      </button>
                      <button onClick={() => handleSocialShare('LinkedIn')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f0f4] dark:bg-[#2f2f46] hover:bg-[#e4e4e9] dark:hover:bg-[#3f3f56] text-[#111118] dark:text-white text-sm font-bold transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-blue-500">public</span>
                        LinkedIn
                      </button>
                      <button onClick={() => handleSocialShare('Twitter')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f0f4] dark:bg-[#2f2f46] hover:bg-[#e4e4e9] dark:hover:bg-[#3f3f56] text-[#111118] dark:text-white text-sm font-bold transition-colors">
                        <span className="material-symbols-outlined text-[18px] text-sky-500">share</span>
                        Twitter / X
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f0f4] dark:bg-[#2f2f46] hover:bg-[#e4e4e9] dark:hover:bg-[#3f3f56] text-[#111118] dark:text-white text-sm font-bold transition-colors">
                        <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                        QR Code
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column (4): Status & Preview */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Status Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm p-6">
                    <h3 className="font-bold text-[#111118] dark:text-white text-base mb-4">Statut de publication</h3>
                    <div className="flex items-center justify-between p-3 bg-[#f8f9fc] dark:bg-[#242438] rounded-xl border border-[#dbdbe6] dark:border-[#3f3f56]">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#111118] dark:text-white">Visibilité</span>
                        <span className="text-xs text-[#616189] dark:text-[#a0a0b0]">Activer le flux publiquement</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#f0f0f4] dark:border-[#2f2f46]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-[#616189] dark:text-[#a0a0b0]">Vues (30j)</span>
                        <span className="text-xs font-bold text-[#111118] dark:text-white">1,240</span>
                      </div>
                      <div className="w-full bg-[#f0f0f4] dark:bg-[#2f2f46] rounded-full h-1.5 mb-1">
                        <div className="bg-primary h-1.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Final Preview Card */}
                  <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl border border-[#f0f0f4] dark:border-[#2f2f46] shadow-sm flex flex-col h-full overflow-hidden">
                    <div className="p-4 border-b border-[#f0f0f4] dark:border-[#2f2f46] bg-[#fafafc] dark:bg-[#242438]">
                      <h3 className="font-bold text-[#111118] dark:text-white text-base">Aperçu Final</h3>
                    </div>
                    <div className="relative flex-1 bg-cover bg-center min-h-[400px]" style={{backgroundImage: "url('https://picsum.photos/id/48/400/600')"}}>
                      <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-[2px]"></div>
                      {/* Fake Website Content */}
                      <div className="absolute inset-0 p-6 flex flex-col gap-3 opacity-30 pointer-events-none">
                        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded-lg mt-4"></div>
                        <div className="h-2 w-full bg-gray-300 dark:bg-gray-600 rounded mt-4"></div>
                        <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-2 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                      {/* Widget Preview */}
                      <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3 animate-[fade-in_0.5s_ease-out]">
                        <div className="bg-white dark:bg-[#1a1a2e] px-4 py-2 rounded-xl rounded-br-none shadow-lg border border-gray-100 dark:border-gray-700 mb-1 max-w-[200px]">
                          <p className="text-xs font-medium text-[#111118] dark:text-white">👋 Hey ! Une question sur nos services ?</p>
                        </div>
                        <div className="size-16 rounded-full border-[3px] border-primary shadow-xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
                          <img alt="Agent" className="w-full h-full object-cover" src="https://picsum.photos/id/64/100/100" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="size-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <span className="material-symbols-outlined text-primary fill text-[20px]">play_arrow</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-2 size-3 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-[#1a1a2e] border-t border-[#f0f0f4] dark:border-[#2f2f46] text-center">
                      <button onClick={() => setActiveTab('theme')} className="text-xs font-bold text-primary hover:underline">Personnaliser l'apparence</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Studio;
