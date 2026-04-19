/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Zap, 
  BrainCircuit, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  ChevronRight, 
  Play, 
  CheckCircle2, 
  Github, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import { useState } from 'react';

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center neon-glow">
          <Zap className="text-white w-5 h-5 fill-white" />
        </div>
        <span className="font-display font-bold text-xl text-white tracking-tight">Lumina AI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
        <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
        <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
        <a href="#team" className="hover:text-white transition-colors">Équipe</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors">Connexion</button>
        <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300">
          Commencer
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold text-cyan-400 mb-6 border border-cyan-500/20">
          PROPULSÉ PAR L'IA DE NOUVELLE GÉNÉRATION
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-white">
          Automatisez Votre Entreprise <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Avec Intelligence
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed font-sans">
          Déployez des agents IA de pointe pour gérer vos workflows complexes, analyser des pétaoctets de données,
          et faire évoluer votre infrastructure technique sans friction.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Essai Gratuit <ChevronRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-white" /> Voir Démo
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 relative"
      >
        <div className="relative glass rounded-2xl overflow-hidden shadow-2xl p-2 md:p-4 aspect-video sm:aspect-[16/7]">
           <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden flex flex-col">
              <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-slate-900/50">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                 </div>
                 <div className="glass px-4 py-1 rounded-md text-[10px] text-slate-500 font-mono">
                    lumina-dashboard-v4.2.0
                 </div>
                 <div className="w-10" />
              </div>
              <div className="flex-1 flex">
                 <div className="w-16 md:w-20 border-r border-white/10 p-4 flex flex-col gap-6">
                    {[Zap, BrainCircuit, BarChart3, ShieldCheck, Globe].map((Icon, i) => (
                      <Icon key={i} className={`w-5 h-5 ${i === 0 ? 'text-cyan-400' : 'text-slate-600'}`} />
                    ))}
                 </div>
                 <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
                    <div className="col-span-full h-32 glass rounded-xl p-4 flex items-center justify-between border-cyan-500/20">
                       <div className="flex flex-col gap-1">
                          <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Débit en temps réel</span>
                          <span className="text-3xl font-display font-bold">14,293 ops/s</span>
                       </div>
                       <div className="h-full w-48 flex items-end gap-1">
                          {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex-1 bg-cyan-500/40 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }} />
                          ))}
                       </div>
                    </div>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="glass rounded-xl p-4 h-40 flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                            <span className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">État du Nœud {i+1}</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                         </div>
                         <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold font-display">Charge {85 + i * 2}%</span>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                               <div className="h-full bg-purple-500" style={{ width: `${85 + i * 2}%` }} />
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
        {/* Floating cards for depth */}
        <div className="absolute -top-6 -right-6 hidden lg:block w-48 glass rounded-xl p-4 shadow-xl -rotate-6 animate-bounce [animation-duration:3s]">
           <span className="block text-[10px] text-slate-500 font-mono mb-2 uppercase">Avis IA</span>
           <p className="text-xs text-white">Optimisez le Nœud 4 pour une meilleure latence.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
      title: "Automatisation Neurale",
      desc: "Des workflows auto-réparateurs qui s'adaptent aux changements de votre infrastructure en temps réel."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Analyses Profondes",
      desc: "Visualisez des modèles à travers des ensembles de données massifs avec une interprétation assistée par l'IA."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Sécurité Entreprise",
      desc: "Modèle zero-trust avec détection et réponse automatisées aux menaces."
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      title: "Maillage Global",
      desc: "Déploiement instantané dans plus de 40 régions mondiales avec routage intelligent."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Évolutivité Instantanée",
      desc: "Notre moteur prédit les pics de charge et fait évoluer les ressources horizontalement avant qu'ils ne surviennent."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      title: "Prêt pour la Conformité",
      desc: "Audit automatisé de conformité SOC2 et HIPAA pour les secteurs réglementés."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Conçu pour la stack moderne</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour gérer des opérations techniques à grande échelle sans fardeau.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:neon-glow transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "49" : "59",
      desc: "Parfait pour les startups en forte croissance.",
      features: ["Jusqu'à 10 nœuds", "Support standard", "Formation IA de base", "2 régions"]
    },
    {
      name: "Pro",
      price: isAnnual ? "149" : "179",
      desc: "La boîte à outils complète pour les grandes équipes.",
      features: ["Nœuds illimités", "Support prioritaire 24/7", "Réglage avancé", "Disponibilité globale", "Conformité SOC2 avancée"],
      popular: true
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      desc: "Adapté à l'échelle des Fortune 500.",
      features: ["Infrastructure dédiée", "Garanties SLA", "Formation de modèles personnalisés", "Migration accompagnée"]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tarification simple et transparente</h2>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>Mensuel</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-slate-800 relative p-1"
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-all transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>Annuel <span className="text-cyan-400 text-xs">(Économisez 20%)</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-2xl flex flex-col ${p.popular ? 'bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-2 border-cyan-500/50 shadow-2xl relative' : 'glass'}`}
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Plus Populaire
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {p.price !== 'Sur mesure' && '$'}{p.price}
                  </span>
                  {p.price !== 'Sur mesure' && <span className="text-slate-400">/mois</span>}
                </div>
                <p className="text-slate-400 text-sm mt-4">{p.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${p.popular ? 'bg-white text-slate-950 hover:bg-cyan-500 hover:text-white' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                {p.name === 'Entreprise' ? 'Contacter les Ventes' : 'Commencer'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="font-display font-bold text-xl text-white">Lumina AI</span>
        </div>
        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
          Bâtir les fondations de la prochaine génération d'infrastructures techniques intelligentes.
          Fait confiance par les ingénieurs, adoré par les CTO.
        </p>
        <div className="flex items-center gap-4">
          <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>

      {[
        { title: 'Produit', links: ['Fonctionnalités', 'Intégrations', 'Sécurité', 'Entreprise'] },
        { title: 'Société', links: ['À propos', 'Carrières', 'Blog', 'Presse'] },
        { title: 'Légal', links: ['Confidentialité', 'Conditions', 'Cookies', 'DPA'] },
      ].map((col, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h4 className="font-bold text-white text-sm uppercase tracking-widest">{col.title}</h4>
          {col.links.map((link, j) => (
            <a key={j} href="#" className="text-slate-500 text-sm hover:text-white transition-colors">{link}</a>
          ))}
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p>© 2026 Lumina AI Technologies Inc. Tous droits réservés.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white">Statut</a>
        <a href="#" className="hover:text-white">Temps de fonctionnement</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Nav />
      <Hero />
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mb-10">Fait confiance par les équipes d'ingénierie modernes</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 invert brightness-0">
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
             <div className="h-8 w-24 bg-slate-400 rounded-md" />
             <div className="h-8 w-40 bg-slate-400 rounded-md" />
             <div className="h-8 w-28 bg-slate-400 rounded-md" />
             <div className="h-8 w-36 bg-slate-400 rounded-md" />
          </div>
        </div>
      </section>
      <Features />
      <Pricing />
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full -z-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[100px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 text-center glass p-12 md:p-20 rounded-[40px]">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Révolutionnez votre pile technique aujourd'hui.</h2>
           <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Rejoignez plus de 1 000 entreprises utilisant Lumina pour propulser leurs opérations orientées IA.</p>
           <button className="px-10 py-5 bg-white text-slate-950 rounded-full font-black text-xl hover:scale-105 transition-transform">
             Commencer à Construire Now
           </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
