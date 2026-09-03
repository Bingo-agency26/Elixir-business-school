import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowLeft, Clock, Calendar, User, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#F1F5F9]">
        <div className="text-center p-10 bg-white rounded-3xl border-2 border-brand-primary/15 shadow-xl">
          <h2 className="text-4xl font-extrabold text-brand-primary mb-4">Article non trouvé</h2>
          <Link to="/blog" className="text-brand-secondary font-black uppercase text-xs tracking-wider hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F1F5F9]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-brand-primary font-black uppercase text-xs tracking-wider bg-white px-5 py-2.5 rounded-full border-2 border-brand-primary/15 hover:border-brand-secondary hover:text-brand-secondary mb-12 transition-all shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Retour aux articles</span>
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-[40px] border-2 border-brand-primary/15 shadow-2xl p-8 sm:p-14 mb-16 overflow-hidden">
          {/* Badge & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="bg-brand-primary text-brand-accent text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-brand-accent/30 shadow-xs">
              {post.category}
            </span>
            <div className="flex items-center space-x-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-brand-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-brand-secondary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-primary mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 mb-10">
            <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-full flex items-center justify-center font-extrabold text-lg shadow-md">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-brand-primary text-sm">{post.author}</div>
              <div className="text-xs text-gray-500 font-medium">{post.authorRole}</div>
            </div>
          </div>

          {/* Main Image */}
          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12 border-2 border-brand-primary/10 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Intro */}
          <p className="text-xl text-gray-800 font-medium leading-relaxed mb-10 pb-8 border-b border-gray-100 italic">
            "{post.content.intro}"
          </p>

          {/* Sections */}
          <div className="space-y-10 text-gray-800 font-normal leading-relaxed text-lg">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary leading-tight">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg font-normal leading-relaxed">
                  {section.text}
                </p>
                {section.bullets && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-base text-gray-800 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-8 bg-brand-primary text-white rounded-3xl border-2 border-brand-accent/30 shadow-xl italic font-medium text-lg leading-relaxed">
            <h3 className="text-brand-accent font-black text-xl mb-3 uppercase tracking-wider not-italic">En conclusion</h3>
            {post.content.conclusion}
          </div>
        </article>

        {/* CTA Card */}
        <div className="bg-white p-10 rounded-[36px] border-2 border-brand-primary/15 shadow-xl mb-16 text-center">
          <h3 className="text-3xl font-extrabold text-brand-primary mb-4">Rejoignez Elixir Business School</h3>
          <p className="text-gray-700 text-base max-w-2xl mx-auto mb-8">
            Formez-vous aux métiers du commerce, du management et du marketing digital en alternance à Toulouse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admission"
              className="bg-brand-primary hover:bg-brand-secondary text-white font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Déposer ma candidature</span>
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </Link>
            <Link
              to="/formations"
              className="border-2 border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5 font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all"
            >
              Voir les formations
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-extrabold text-brand-primary mb-8 italic">Articles similaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(rPost => (
                <Link
                  key={rPost.id}
                  to={`/blog/${rPost.slug}`}
                  className="bg-white p-6 rounded-3xl border-2 border-brand-primary/15 shadow-md hover:shadow-xl hover:border-brand-secondary hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full mb-3 inline-block">
                      {rPost.category}
                    </span>
                    <h4 className="font-extrabold text-brand-primary text-xl mb-2 group-hover:text-brand-secondary transition-colors leading-snug">
                      {rPost.title}
                    </h4>
                    <p className="text-gray-600 text-xs line-clamp-2 mb-4 font-normal">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-brand-secondary uppercase tracking-wider pt-4 border-t border-gray-100">
                    <span>Lire l'article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
