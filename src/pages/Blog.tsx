import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { BLOG_POSTS, BlogPostItem } from '../data/blogData';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, User, Search, BookOpen } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Tous', 'Alternance & Carrière', 'Formations & BTS', 'Marketing & Innovation', 'Conseils Recrutement'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Blog & Actualités Business School"
            subtitle="CONSEILS, ORIENTATION & EMPLOYABILITÉ"
          />
          <p className="text-lg text-gray-700 font-normal leading-relaxed">
            Retrouvez tous nos articles et guides d'experts pour réussir votre alternance, choisir la bonne formation supérieure à Toulouse et propulser votre carrière commerciale et digitale.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mb-16 space-y-6">
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un article, un sujet, un diplôme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 border-brand-primary/15 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all shadow-md"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-brand-primary text-brand-accent border-2 border-brand-accent/40 shadow-lg scale-105'
                    : 'bg-white text-brand-primary border border-gray-200 hover:border-brand-secondary hover:text-brand-secondary shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredPosts.map((post: BlogPostItem) => (
              <div
                key={post.id}
                className="bg-white rounded-[36px] overflow-hidden border-2 border-brand-primary/15 shadow-lg hover:shadow-2xl hover:border-brand-secondary hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col group cursor-pointer"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-brand-primary/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-brand-accent text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-accent/30 shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center space-x-6 text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-4 h-4 text-brand-secondary" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-4 h-4 text-brand-secondary" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-extrabold text-brand-primary mb-3 leading-snug group-hover:text-brand-secondary transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-gray-700 text-sm font-normal leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 py-3.5 px-6 bg-brand-primary group-hover:bg-brand-secondary text-white text-xs font-extrabold uppercase tracking-wider rounded-2xl flex items-center justify-between transition-all shadow-md group-hover:scale-[1.02]"
                  >
                    <span>Lire l'article complet</span>
                    <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-brand-primary/15 shadow-md">
            <BookOpen className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold text-brand-primary mb-2">Aucun article trouvé</h3>
            <p className="text-gray-600 font-normal">Essayez de modifier votre recherche ou le filtre de catégorie.</p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-24 p-12 bg-brand-primary rounded-[48px] border-2 border-brand-accent/30 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-extrabold text-white mb-3 italic">Envie de concrétiser votre projet d'études ?</h3>
            <p className="text-gray-200 font-normal text-base leading-relaxed">
              Découvrez nos formations certifiées RNCP en alternance et contactez nos conseillers pédagogiques.
            </p>
          </div>
          <Link
            to="/admission"
            className="bg-brand-accent hover:bg-white text-brand-primary font-black px-8 py-5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 shrink-0 inline-flex items-center gap-3"
          >
            <span>Déposer ma candidature</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}

