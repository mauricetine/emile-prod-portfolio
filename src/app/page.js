import Image from 'next/image'
import './globals.css'

const services = [
  { id: 1, title: "Création de Logos", desc: "Identités visuelles uniques et mémorables pour votre marque" },
  { id: 2, title: "Flyers & Affiches", desc: "Supports événementiels percutants : concerts, soirées, promotions" },
  { id: 3, title: "Retouche Photo", desc: "Montages et retouches professionnelles de haute qualité" },
  { id: 4, title: "Montage Vidéo", desc: "Création et montage vidéo avec Final Cut Pro" },
  { id: 5, title: "Captation Drone", desc: "Prises de vues aériennes par drone (photo & vidéo)" },
  { id: 6, title: "Photographie", desc: "Photographie numérique professionnelle" },
]

const competences = [
  { category: "Audiovisuel & Multimédia", skills: ["Montage vidéo (Final Cut Pro)", "Captation vidéo", "Prises de vues aériennes par drone", "Photographie numérique"] },
  { category: "Graphisme & Design", skills: ["Logos et identités visuelles", "Affiches, flyers, kakémonos", "Cartes de visite", "Retouche et composition graphique"] },
]

const portfolioItems = [
  { id: 1, image: "/creation-1.jpeg", title: "Affiche Parfum Dior", category: "Publicité" },
  { id: 2, image: "/creation-2.jpeg", title: "Visuel Réseaux Sociaux", category: "Digital Design" },
  { id: 3, image: "/creation-3.jpeg", title: "Design Créatif", category: "Art Direction" },
  { id: 4, image: "/creation-4.jpeg", title: "Affiche Services Design", category: "Branding" },
  { id: 5, image: "/creation-5.jpeg", title: "Flyer Commercial", category: "Print Design" },
  { id: 6, image: "/creation-6.jpeg", title: "Affiche Concert", category: "Événementiel" },
  { id: 7, image: "/creation-7.jpeg", title: "Game Day CAN 2026", category: "Sport" },
  { id: 8, image: "/creation-8.jpeg", title: "Carte de Services", category: "Communication" },
  { id: 9, image: "/creation-9.jpeg", title: "Finale CAN 2026", category: "Sport" },
]

const formations = [
  { year: "2025 - 2026", title: "Licence 3 en Multimédia (en cours)", school: "Institut Supérieur d'Informatique (ISI) Dakar" },
  { year: "2021 - 2022", title: "Baccalauréat Littéraire", school: "Lycée de Diouloulou" },
  { year: "2017 - 2018", title: "BFEM", school: "CME de Santhiaba" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/emile-prod-logo.jpeg" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg">Emile<span className="text-red-600">Prod</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-red-600">Accueil</a>
            <a href="#about" className="hover:text-red-600">À Propos</a>
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#portfolio" className="hover:text-red-600">Portfolio</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </div>
          <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
            Devis Gratuit
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-white to-red-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm mb-4">
              ✨ Vidéaste & Graphiste
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Emile SOUMARE
            </h1>
            <h2 className="text-xl md:text-2xl text-red-600 font-semibold mb-6">
              Infographiste & Photographe
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Passionné par le design graphique, je crée des visuels percutants : 
              affiches, illustrations, vidéos et prises de vues aériennes par drone, 
              au service de votre communication graphique et audiovisuelle.
            </p>
            <div className="flex gap-4">
              <a href="#portfolio" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Voir Mes Travaux
              </a>
              <a href="#contact" className="border-2 border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white">
                Me Contacter
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-72 relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image src="/emile-prod-logo.jpeg" alt="Emile Prod" fill className="object-contain p-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">À Propos de Moi</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">Qui suis-je ?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Infographiste et photographe passionné, en formation multimédia, je crée des visuels percutants : 
                affiches, illustrations, vidéos (Final Cut Pro) et prises de vues aériennes par drone, 
                au service de la communication graphique et audiovisuelle.
              </p>
              
              <h4 className="font-bold mb-3">🎓 Formations</h4>
              <div className="space-y-3">
                {formations.map((f, i) => (
                  <div key={i} className="border-l-2 border-red-600 pl-4">
                    <div className="text-sm text-red-600 font-medium">{f.year}</div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-gray-500">{f.school}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences */}
            <div className="space-y-6">
              {competences.map((comp, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold mb-4 text-red-600">{comp.category}</h3>
                  <ul className="space-y-2">
                    {comp.skills.map((skill, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Langues */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-red-600">🌍 Langues</h3>
                <div className="flex gap-6">
                  <div>
                    <span className="font-medium">Français :</span> Niveau assez bon
                  </div>
                  <div>
                    <span className="font-medium">Anglais :</span> Niveau moyen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Services</h2>
            <p className="text-gray-600">Des prestations adaptées à vos besoins</p>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-sm font-bold text-red-600 mb-2">0{s.id}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Réalisations</h2>
            <p className="text-gray-600">Découvrez mes travaux créatifs</p>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-red-400 text-xs">{item.category}</span>
                  <span className="text-white font-bold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contactez-Moi</h2>
            <p className="text-gray-600">Travaillons ensemble sur votre projet</p>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {/* Adresse */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">📍</div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Adresse</div>
                  <div className="font-semibold">Nord Foire, Rue 2014</div>
                  <div className="text-gray-600">Dakar, Sénégal</div>
                </div>
              </div>
              
              {/* Téléphone */}
              <a href="tel:+221783269623" className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow block">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">📞</div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Téléphone</div>
                  <div className="font-semibold">+221 78 326 96 23</div>
                </div>
              </a>
              
              {/* Email */}
              <a href="mailto:emilesoumare2001@gmail.com" className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow block">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">✉️</div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="font-semibold">emilesoumare2001@gmail.com</div>
                </div>
              </a>

              {/* Disponibilité */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="font-semibold">Disponible pour de nouveaux projets</span>
                </div>
                <p className="text-red-100 text-sm">
                  Freelance, collaborations créatives et missions de design graphique
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-6">Envoyez un Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600" />
                <input type="email" placeholder="Votre email" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600" />
                <input type="text" placeholder="Sujet" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600" />
                <textarea placeholder="Votre message" rows="4" className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-red-600 resize-none"></textarea>
                <button type="submit" className="w-full bg-red-600 text-white p-4 rounded-xl hover:bg-red-700 font-semibold text-lg transition-colors">
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/emile-prod-logo.jpeg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl">Emile<span className="text-red-500">Prod</span></span>
                <p className="text-gray-400 text-sm">Vidéaste & Graphiste</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-300">Emile SOUMARE</p>
              <p className="text-gray-500 text-sm">Nord Foire, Rue 2014 - Dakar, Sénégal</p>
            </div>
            
            <div className="flex gap-4">
              <a href="tel:+221783269623" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                📞
              </a>
              <a href="mailto:emilesoumare2001@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                ✉️
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 my-8"></div>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm">© 2026 Emile Prod. Tous droits réservés.</p>
            <p className="text-gray-600 text-sm mt-2">Qualité – Créativité – Rapidité</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
