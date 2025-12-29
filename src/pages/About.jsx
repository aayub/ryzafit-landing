import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/timpilabs/' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@timpilabs' },
  { label: 'Reddit', url: 'https://www.reddit.com/user/timpilabs/' }
];

function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/LOGO.png" alt="Ryzafit logo" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-semibold text-slate-900">Ryzafit</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About</p>
            </div>
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <Link to="/faq" className="hover:text-blue-600">
              FAQ
            </Link>
            <Link to="/legal" className="hover:text-blue-600">
              Legal
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 space-y-10">
          <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">About</p>
              <h1 className="text-3xl font-bold text-slate-900">About RyzaFit</h1>
            </div>
            <div className="space-y-4 text-slate-700">
              <p>RyzaFit was built to make fitness tracking clearer, more intuitive, and more honest.</p>
              <p>
                We believe progress should be measured with tools that actually reflect the work you put in — not vague summaries, inflated metrics, or
                cluttered interfaces. RyzaFit focuses on giving you precise workout tracking, meaningful insights, and a clean experience that stays out
                of your way while you train.
              </p>
              <p>The app is designed with a strong emphasis on:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Accurate workout logging</li>
                <li>Clear, visual progress tracking</li>
                <li>Thoughtful analytics that help you understand trends over time</li>
                <li>A native iOS experience that feels fast, responsive, and intentional</li>
              </ul>
              <p>
                RyzaFit does not try to coach, diagnose, or replace professional guidance. Instead, it aims to be a reliable companion for tracking your
                fitness journey — whether you’re just getting started or refining an established routine.
              </p>
            </div>
          </article>

          <article className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Built with care</h2>
            <p className="text-slate-700">
              RyzaFit is independently built and maintained, with close attention to detail across design, performance, and usability. Every feature is
              intentionally scoped to serve a real purpose, without unnecessary noise or gimmicks.
            </p>
            <p className="text-slate-700">We care deeply about:</p>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>User trust</li>
              <li>Data privacy</li>
              <li>Long-term maintainability</li>
              <li>Building something we would want to use ourselves</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Stay connected</h2>
            <p className="text-slate-700">Follow RyzaFit for updates, feature previews, and development progress:</p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Legal & Policies</h2>
            <p className="text-slate-700">For information about how RyzaFit operates, handles data, and licenses the app, please visit:</p>
            <Link to="/legal" className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Legal & Policies
            </Link>
            <p className="text-slate-600 text-sm">
              Includes Terms & Conditions, Privacy Policy, and the End User License Agreement (EULA).
            </p>
          </article>

          <div className="rounded-3xl border border-slate-200 bg-blue-50 p-8 text-slate-700">
            Thank you for using RyzaFit.
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

export default About;
