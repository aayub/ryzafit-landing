import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { faqCategories } from '../data/faqData';

function Faq() {
  const [query, setQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    if (normalizedQuery.length === 0) return faqCategories;

    return faqCategories.filter((category) => {
      const searchableText = `${category.title} ${category.description} ${category.articles
        .map(
          (article) =>
            `${article.section ?? ''} ${article.question} ${article.answer ?? ''} ${(article.steps ?? []).join(' ')} ${(article.bullets ?? []).join(' ')} ${(article.sections ?? [])
              .map(
                (section) =>
                  `${section.heading ?? ''} ${(section.paragraphs ?? []).join(' ')} ${(section.bullets ?? []).join(' ')} ${section.outro ?? ''}`
              )
              .join(' ')}`
        )
        .join(' ')}`.toLowerCase();

      return normalizedQuery.every((term) => searchableText.includes(term));
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-800 text-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 space-y-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/LOGO.png" alt="Ryzafit logo" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-lg font-semibold tracking-wide">Ryzafit</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Knowledge Base</p>
              </div>
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Back to Home
            </Link>
          </div>

          <div className="space-y-4 text-center text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-white/80">FAQ</p>
            <h1 className="text-3xl md:text-4xl font-bold">What can we help you with today?</h1>
            <p className="text-white/80">
              Search across our workout knowledge base or jump straight into a category below.
            </p>
          </div>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the Knowledge Base"
              className="flex-1 rounded-2xl border border-white/20 bg-white/95 px-5 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-2xl bg-blue-500 px-8 py-3 font-semibold text-white shadow hover:bg-blue-600 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto w-full max-w-5xl px-4 py-12 space-y-6">
          <p className="text-sm text-slate-500">
            Showing {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'}
          </p>
          {filteredCategories.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-lg font-semibold text-slate-900">No categories found</p>
              <p className="mt-2 text-slate-500">Try another search term or browse from the full list.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredCategories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/faq/${category.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                      {category.title}
                    </h2>
                    <p className="text-sm text-slate-500">{category.description}</p>
                  </div>
                  <div className="mt-6 text-sm font-semibold text-blue-600">
                    {category.articles.length} {category.articles.length === 1 ? 'article' : 'articles'}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500">
          Powered by{' '}
          <a href="https://timpilabs.com" target="_blank" rel="noreferrer" className="font-semibold text-slate-700">
            Timpi Labs
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Faq;
