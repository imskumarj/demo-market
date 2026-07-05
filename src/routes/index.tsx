import { createFileRoute } from "@tanstack/react-router";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = ["offres", "à propos", "projets", "manifeste"];

const clients = ["HABA", "all", "EVO", "canéva", "idruide", "◇", "KIABI", "H", "Memento Mori", "BPCE"];

const methodology = [
  { icon: "💬", title: "Ateliers", desc: "Qui vont nous permettre d'échanger, de débattre, de proposer, de créer et de valider." },
  { icon: "✏️", title: "Figjam", desc: "Pour itérer sur votre projet, Figjam est un grand tableau blanc digital : Brainstorming, idées.. vous allez adorer" },
  { icon: "🎨", title: "Figma", desc: "Pour imaginer ensemble le design et l'expérience de votre projet, Figma est l'outil que nous privilégions." },
  { icon: "</>", title: "Développement", desc: "Pour développer vos sites et applications nous favorisons : Webflow, Bubble, Adalo, Shopify et Wordpress." },
  { icon: "🔴", title: "Asana", desc: "Pour la gestion de votre projet : planning, tâches, ticketing, gestion d'équipe, Asana est un indispensable." },
];

function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff2e93" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path fill="url(#g1)" d="M320 60c40 40 60 100 40 160s-80 100-150 110-140-20-170-80-20-140 30-190 130-70 190-40 20 0 60 40z" />
      <path fill="none" stroke="url(#g1)" strokeWidth="30" d="M120 340c60 20 130 10 170-40s50-130 20-190" opacity="0.9"/>
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-ink font-sans">
      {/* HERO */}
      <section className="p-4">
        <div className="relative overflow-hidden rounded-3xl bg-[#0d0d10] text-white min-h-[560px] px-6 sm:px-10 pt-6 pb-10">
          {/* nav */}
          <div className="flex items-center justify-between relative z-10">
            <div className="font-display text-2xl leading-none">
              he<span className="italic text-white/90">dy</span>
              <div className="text-[10px] tracking-[0.3em] text-white/50 -mt-1">agency</div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {nav.map((n) => (
                <a key={n} href={`#${n}`} className="hover:text-white transition">{n}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button className="btn-gradient btn-gradient-hover text-sm">1h de conseil gratuit</button>
              <button aria-label="menu" className="w-10 h-10 rounded-full bg-white text-ink grid place-items-center">☰</button>
            </div>
          </div>

          {/* blobs */}
          <Blob className="absolute -right-24 -top-10 w-[560px] opacity-90" />
          <Blob className="absolute right-40 top-40 w-[280px] opacity-70 rotate-45" />

          <div className="relative z-10 mt-16 sm:mt-24">
            <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] leading-[0.9] font-bold">
              digital<br/>makers
            </h1>

            <div className="mt-10 inline-flex items-center gap-4 bg-white text-ink rounded-2xl p-3 pr-6 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 grid place-items-center text-white">▶</div>
              <div>
                <div className="text-sm text-muted-foreground">2min pour nous connaitre</div>
                <a href="#" className="font-semibold underline">C'est parti !</a>
              </div>
            </div>
          </div>

          {/* side rail */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 text-ink rounded-l-xl px-2 py-4 text-xs [writing-mode:vertical-rl] rotate-180">
            Notions
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <h2 className="text-4xl sm:text-5xl font-bold">Plus de simplicité, de flexibilité,<br/>de design et d'échanges</h2>
        <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
          Chez Hedy, nous prônons plus de simplicité dans les process : <a href="#" className="underline text-ink">Less Meeting, More Organization</a>
          <br/>Pour cela, nous avons mis en place <strong className="text-ink">trois offres claires</strong> :
        </p>
      </section>

      {/* OFFRE WRAP */}
      <section className="px-4">
        <div className="relative overflow-hidden rounded-3xl bg-[#0d0d10] text-white p-8 sm:p-12">
          <Blob className="absolute -left-32 top-0 w-[420px] opacity-90" />
          <div className="relative z-10 ml-auto max-w-2xl">
            <h3 className="font-display text-4xl font-bold">offre wrap 🌯</h3>
            <p className="mt-4 text-white/80">
              L'offre <strong>wrap</strong> vous permettra de lancer votre présence en ligne avec un accompagnement stratégique sur-mesure, sans rogner sur la qualité du design et du référencement.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <span>👉 Prestation SEO</span>
              <span>👉 Design sur-mesure</span>
              <span>👉 Stratégie digitale optimisée</span>
            </div>
            <button className="mt-8 btn-gradient btn-gradient-hover">en savoir plus sur cette offre</button>
          </div>
        </div>
      </section>

      {/* OFFRE TOAST + CLUB */}
      <section className="px-4 mt-6 grid md:grid-cols-2 gap-6">
        {[
          { title: "offre toast 🍞", body: (<>Vous avez besoin d'une présence en ligne <strong>rapide et efficace</strong> mais surtout limitée en terme de temps et/ou de budget : l'offre toast est faite pour vous !<br/><br/>Design personnalisé, accompagnement, conseil...<br/><br/>👉 <strong>Le tout sur une base solide en référencement</strong> pour que vos futurs clients vous trouvent en quelques clics.</>), cta: "parlez-nous de votre besoin" },
          { title: "offre club 🍹", body: (<>Vous êtes une agence et vous avez besoin de <strong>renfort</strong> sur des projets spécifiques ? Vous êtes une équipe d'experts et vous souhaitez intégrer des profils qui sachent s'adapter à votre organisation ? Votre demande colle davantage à une technologie spécifique ?<br/><br/>👉 <strong>La force de cette offre c'est le réseau</strong> : chacun sa spécialité et à chaque projet son expertise.</>), cta: "en savoir plus sur cette offre" },
        ].map((o) => (
          <div key={o.title} className="relative overflow-hidden rounded-3xl bg-cream p-8 sm:p-10">
            <Blob className="absolute -left-24 -top-10 w-[300px] opacity-90" />
            <div className="relative z-10 ml-auto max-w-md">
              <h3 className="font-display text-3xl font-bold">{o.title}</h3>
              <p className="mt-4 text-sm text-ink/80 leading-relaxed">{o.body}</p>
              <button className="mt-8 btn-gradient btn-gradient-hover text-sm">{o.cta}</button>
            </div>
          </div>
        ))}
      </section>

      {/* BIG WORD */}
      <section className="overflow-hidden py-16">
        <div className="font-display text-[18vw] leading-none font-bold text-ink/5 whitespace-nowrap select-none">
          ergonomie · stratégie · design · ergonomie
        </div>
      </section>

      {/* MAKE YOU GROW */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 items-center">
        <div className="rotate-[-4deg]">
          <img src={person1} alt="Designer at work" width={640} height={800} loading="lazy" className="rounded-2xl shadow-2xl w-full h-auto" />
        </div>
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">Make you grow,<br/>together<span className="text-pink-500">.</span></h2>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Vous avez beaucoup à nous apprendre sur votre marché et votre offre. <strong className="text-ink">Des infos précieuses qui méritent toute notre attention</strong> : parce qu'une solution digitale, ça se construit ensemble. C'est pour cela qu'un projet ne démarre jamais sans un vrai kick-off et que nous avons développés des méthodologies de <strong className="text-ink">co-construction</strong>. Vous impliquer dans chaque étape du projet, c'est vous en donner une maîtrise.
          </p>
          <button className="mt-8 btn-gradient btn-gradient-hover">nous contacter</button>
        </div>
        <div className="rotate-[4deg]">
          <img src={person2} alt="Developer at work" width={640} height={800} loading="lazy" className="rounded-2xl shadow-2xl w-full h-auto" />
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-muted py-20 px-6">
        <h2 className="text-center text-3xl font-bold">Ils nous ont<br/>fait confiance</h2>
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-5 gap-6">
          {clients.map((c, i) => (
            <div key={i} className="aspect-square bg-white rounded-2xl grid place-items-center font-bold text-lg text-ink shadow-sm">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGIE */}
      <section className="px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-[#0d0d10] text-white p-8 sm:p-16">
          <h2 className="text-center text-4xl sm:text-5xl font-bold">Notre méthodologie</h2>
          <p className="text-center mt-6 max-w-2xl mx-auto text-sm text-white/70">
            Créer une équipe pour votre projet c'est bien, avoir <strong className="text-white">une organisation sans faille</strong> c'est mieux. Pourquoi ? Pour gagner en productivité, en temps et en ébullition d'idées.
          </p>
          <div className="mt-16 grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
            {methodology.map((m) => (
              <div key={m.title}>
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-display text-xl font-bold">{m.title}</h3>
                <p className="mt-3 text-xs text-white/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold">Derniers projets</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong className="text-ink">Vous voulez en voir plus ?</strong> Contactez-nous et nous nous ferons un plaisir de partager avec vous quelques unes de nos réalisations.
          </p>
          <button className="mt-6 btn-gradient btn-gradient-hover text-sm">découvrir d'autres projets</button>
        </div>
        <img src={project1} alt="Project 1" width={800} height={600} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto" />
        <img src={project2} alt="Project 2" width={800} height={600} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto" />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <div className="font-display text-4xl">he<span className="italic">dy</span></div>
            <div className="text-xs tracking-[0.3em] text-muted-foreground -mt-1">agency</div>
          </div>
          <div>
            <div className="font-semibold mb-3">Expertises</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Design Thinking</li><li>UX Design</li><li>UI Design</li><li>Product Design</li><li>Developpement Webflow</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 opacity-0">.</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Developpement Shopify</li><li>Referencement SEO</li><li>Referencement SEA</li><li>Reseaux sociaux</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">France</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>hello@hedyagency.com</li>
              <li>07 56 97 20 23</li>
            </ul>
            <div className="font-semibold mt-4 mb-2">Rejoignez-nous</div>
            <div className="flex gap-2 text-xs">
              <span className="btn-gradient !py-1 !px-3">1.38 CO2/view</span>
              <span className="px-3 py-1 rounded-full border border-border">Ecoindex A</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-8 flex flex-wrap items-center justify-between text-xs text-muted-foreground">
          <div>©2022 Hedy. Tous droits reservés.</div>
          <div className="flex gap-4"><a href="#">Mentions légales</a><span>webflow Experts</span></div>
        </div>
      </footer>
    </div>
  );
}
