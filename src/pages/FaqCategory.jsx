import { Link, useParams } from 'react-router-dom';
import { faqCategories } from '../data/faqData';

const toAnchor = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

function FaqCategory({ slugOverride }) {
  const params = useParams();
  const slug = params.slug ?? slugOverride;
  const category = faqCategories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Category not found</h1>
        <p className="text-slate-500">The knowledge base section you are looking for does not exist.</p>
        <Link
          to="/faq"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
        >
          Back to FAQ home
        </Link>
      </div>
    );
  }

  const isLegalCategory = category.slug === 'legal';
  const articleAnchors = category.articles.map((article) => ({
    title: article.question,
    anchor: toAnchor(article.question)
  }));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/LOGO.png" alt="Ryzafit logo" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-semibold text-slate-900">Ryzafit</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Knowledge Base</p>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <Link to="/faq" className="hover:text-blue-600">
              All Categories
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600">{category.title}</span>
          </div>
        </div>
      </header>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Category</p>
          <h1 className="text-3xl font-bold">{category.title}</h1>
          <p className="text-white/80 max-w-3xl">{category.description}</p>
          <p className="text-sm text-white/70">{category.articles.length} articles</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:flex lg:gap-10">
          <aside className="hidden lg:block w-64 space-y-6">
            {!isLegalCategory && (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">On this page</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {articleAnchors.map((item) => (
                    <li key={item.anchor}>
                      <a href={`#${item.anchor}`} className="hover:text-blue-600">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {isLegalCategory && (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Legal</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {category.articles.map((article) => (
                    <li key={article.question}>
                      <Link to={article.quickNavRoute} className="text-blue-600 hover:text-blue-700">
                        {article.question}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <div className="flex-1 space-y-6">
            {isLegalCategory ? (
              <div className="space-y-6">
                {category.articles.map((article) => (
                  <article
                    key={article.question}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3"
                  >
                    <div className="text-sm font-semibold text-slate-400">{category.title}</div>
                    <h2 className="text-xl font-semibold text-slate-900">{article.question}</h2>
                    {article.intro && <p className="text-slate-600">{article.intro}</p>}
                    <div className="pt-2">
                      <Link
                        to={article.quickNavRoute}
                        className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                      >
                        View {article.question}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              category.articles.map((article, index) => (
                <article
                  key={article.question}
                  id={articleAnchors[index].anchor}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="font-semibold text-blue-600">Article {index + 1}</span>
                    <span>•</span>
                    <span>{category.title}</span>
                    {article.section && (
                      <>
                        <span>•</span>
                        <span className="text-slate-500">{article.section}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">{article.question}</h2>
                  {article.quickNavRoute && (
                    <Link
                      to={article.quickNavRoute}
                      className="inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Quick nav: {article.question}
                    </Link>
                  )}
                  {article.answer && <p className="text-slate-600">{article.answer}</p>}
                  {article.intro && <p className="text-slate-600">{article.intro}</p>}
                  {article.steps && (
                    <ol className="list-decimal space-y-2 pl-5 text-slate-600">
                      {article.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  )}
                  {article.bullets && (
                    <ul className="list-disc space-y-2 pl-5 text-slate-600">
                      {article.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {article.outro && <p className="text-slate-600">{article.outro}</p>}
                  {article.sections && (
                    <div className="space-y-6">
                      {article.sections.map((section) => (
                        <div key={section.heading} className="space-y-3">
                          <h3 className="text-lg font-semibold text-slate-900">{section.heading}</h3>
                          {(section.paragraphs ?? []).map((paragraph) => (
                            <p key={paragraph} className="text-slate-600">
                              {paragraph}
                            </p>
                          ))}
                          {section.bullets && (
                            <ul className="list-disc space-y-2 pl-5 text-slate-600">
                              {section.bullets.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                          {section.outro && <p className="text-slate-600">{section.outro}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        </div>
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

export default FaqCategory;
