import { Link } from 'react-router-dom';
import { legalDocuments } from '../data/legalDocuments';

const toAnchor = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

function LegalDocument({ documentKey }) {
  const document = legalDocuments[documentKey];
  const otherDocuments = Object.values(legalDocuments).filter((doc) => doc.key !== documentKey);

  if (!document) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Document not found</h1>
        <p className="text-slate-500">The legal resource you are looking for does not exist.</p>
        <Link
          to="/faq"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
        >
          Back to FAQ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/LOGO.png" alt="Ryzafit logo" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-semibold text-slate-900">Ryzafit</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Legal Center</p>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <Link to="/faq" className="hover:text-blue-600">
              FAQ
            </Link>
            <span className="text-slate-300">/</span>
            <Link to="/legal" className="hover:text-blue-600">
              Legal
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600">{document.title}</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 py-12 lg:flex lg:gap-10">
          <aside className="hidden lg:block w-64 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">On this page</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {document.sections.map((section) => {
                  const anchor = toAnchor(section.heading);
                  return (
                    <li key={anchor}>
                      <a href={`#${anchor}`} className="hover:text-blue-600">
                        {section.heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Legal</p>
              <ul className="space-y-2 text-sm">
                {otherDocuments.map((doc) => (
                  <li key={doc.key}>
                    <Link to={doc.route} className="text-blue-600 hover:text-blue-700">
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-1 space-y-10">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Legal</p>
              <h1 className="text-3xl font-bold text-slate-900">{document.title}</h1>
              <p className="text-slate-600">{document.summary}</p>
              <p className="text-sm text-slate-400">Last updated {document.lastUpdated}</p>
            </div>

            <div className="space-y-8">
              {document.sections.map((section) => {
                const anchor = toAnchor(section.heading);
                return (
                  <div
                    key={section.heading}
                    id={anchor}
                    className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
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
                    {section.sections && (
                      <div className="space-y-4">
                        {section.sections.map((subsection) => {
                          const subAnchor = `${anchor}-${toAnchor(subsection.heading)}`;
                          return (
                            <div key={subAnchor} id={subAnchor} className="space-y-2">
                              <h3 className="text-lg font-semibold text-slate-900">{subsection.heading}</h3>
                              {(subsection.paragraphs ?? []).map((paragraph) => (
                                <p key={paragraph} className="text-slate-600">
                                  {paragraph}
                                </p>
                              ))}
                              {subsection.bullets && (
                                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                                  {subsection.bullets.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {section.outro && <p className="text-slate-600">{section.outro}</p>}
                  </div>
                );
              })}
            </div>

            {document.contactNote && (
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-slate-700">{document.contactNote}</div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-500">
          Powered by{' '}
          <a href="https://timpilabs.com" target="_blank" rel="noreferrer" className="font-semibold text-slate-700">
            Timpi Labs
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LegalDocument;
