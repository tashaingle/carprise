export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400 to-sky-500" />
            <span className="text-lg font-semibold tracking-tight">Carprise</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#proof" className="hover:text-white">Results</a>
            <a href="#drivers" className="hover:text-white">Drivers</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-white/90"
            >
              Get a proposal
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              London-first • Urban Attention • Trial • Attribution
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Turn everyday cars into measurable brand experiences.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Carprise is a driver-powered mobility media network combining
              moving OOH visibility, in-car product trial, and real-time reporting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-gradient-to-r from-lime-400 to-sky-500 px-6 py-3 text-center text-sm font-semibold text-neutral-950 hover:opacity-90"
              >
                Book a brand demo
              </a>
              <a
                href="#drivers"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Earn as a driver
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <Stat label="Effective CPM" value="£4–£7" />
              <Stat label="Pilot breakeven" value="~150 cars" />
              <Stat label="Potential / car / mo" value="~£245" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
            <div className="grid gap-4">
              <Card
                title="Moving Vehicle Media"
                body="Decals & partial wraps for high-frequency urban exposure."
              />
              <Card
                title="In-Car Kiosk + Sampling"
                body="Sealed FMCG placements and QR-based promotions at point of consumption."
              />
              <Card
                title="Experience Layer"
                body="Optional audio + subtle sensory sponsorships for premium engagement."
              />
              <Card
                title="Attribution & Insights"
                body="Routes, exposure estimates, QR interactions, and post-campaign reporting."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Social proof placeholder */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Built for FMCG, fintech, telco, subscriptions, entertainment
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/60 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3">Brand Partner</div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3">Agency Partner</div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3">Retail Partner</div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3">Fleet Partner</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Fast to launch, simple to manage, and measurable end-to-end.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <Step n="1" title="Define" body="Objectives, audience, geography, media mix." />
          <Step n="2" title="Match" body="We allocate vetted drivers and routes." />
          <Step n="3" title="Launch" body="Install assets, go live, monitor performance." />
          <Step n="4" title="Report" body="Post-campaign analytics, learnings, and de-install." />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Products</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Feature
              title="Carprise Ads"
              body="Removable decals & wraps. Time-bound campaigns with compliance-first installs."
              bullets={["High visibility", "Hyper-local targeting", "Lower CPM vs static OOH"]}
            />
            <Feature
              title="Carprise Sampling + Kiosk"
              body="Sealed, brand-approved SKUs in-car. Placement + revenue share."
              bullets={["Trial at point of use", "QR offers", "Curated categories"]}
            />
            <Feature
              title="Carprise Experience Layer"
              body="Optional branded audio, subtle scent, and in-ride prompts."
              bullets={["Premium feel", "Opt-in for drivers", "Not gimmicky—curated"]}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="proof" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">What a campaign can deliver</h2>
            <p className="mt-3 text-white/70">
              Example 8-week London campaign at ~£50k budget.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Kpi label="Impressions" value="4–5M" />
              <Kpi label="Product trials" value="60–80k" />
              <Kpi label="QR interactions" value="15–20k" />
              <Kpi label="Included" value="Exterior + 1 SKU + Audio" />
            </div>

            <p className="mt-6 text-sm text-white/60">
              Figures shown are illustrative; exact outputs depend on geography, routes, and media mix.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-semibold">Pilot economics snapshot</h3>
            <div className="mt-6 space-y-3 text-sm text-white/75">
              <Row k="Avg revenue / car / month" v="~£220" />
              <Row k="Driver payout / car / month" v="~£100" />
              <Row k="Gross margin / car / month" v="~£120" />
              <Row k="Fixed costs (pilot)" v="~£17k / month" />
              <Row k="Breakeven" v="~142 cars (~150 target)" />
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              Better CPM + better attribution than static OOH, with scalable revenue density per vehicle.
            </div>
          </div>
        </div>
      </section>

      {/* Drivers */}
      <section id="drivers" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Earn as a driver</h2>
              <p className="mt-3 text-white/70">
                Monetise your car with minimal disruption. Campaigns are time-bound, compliant, and removable.
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/75">
                <Bullet>Vetted campaigns and clear agreements</Bullet>
                <Bullet>Route-based deployment (you keep your routine)</Bullet>
                <Bullet>Optional participation in sampling/experience campaigns</Bullet>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
              <h3 className="text-lg font-semibold">FAQ (drivers + riders)</h3>
              <div className="mt-6 space-y-4 text-sm text-white/75">
                <Faq q="Is food in cars a liability risk?" a="Only sealed, branded products. No perishables. Opt-in participation." />
                <Faq q="Will scent/audio branding annoy people?" a="Optional, subtle, campaign-based. No permanent modifications." />
                <Faq q="How do you ensure consistency?" a="Standardised kits, installation guidelines, and campaign rules." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight">Get a proposal</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Tell us your city, target audience, and budget. We’ll reply with a campaign plan and forecast.
          </p>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="you@company.com" />
            <Input label="Company" placeholder="Company name" />
            <Input label="Budget" placeholder="e.g. £50,000" />
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs text-white/60">Message</label>
              <textarea
                className="h-28 w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="What are you trying to achieve? (launch, trial, awareness, attribution, etc.)"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/50">
                This form is a front-end starter — connect it to your email/CRM when ready.
              </p>
              <button
                type="button"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Carprise. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#how">How it works</a>
            <a className="hover:text-white" href="#products">Products</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </footer>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-lg font-semibold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950/30 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{body}</div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-950/30 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold">
          {n}
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-white/70">{body}</p>
    </div>
  );
}

function Feature({
  title,
  body,
  bullets,
}: {
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-950/30 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{body}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 inline hook w-2 text-white/60">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-white/60">{k}</span>
      <span className="font-medium text-white">{v}</span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-white/50" />
      <span>{children}</span>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950/30 p-4">
      <div className="text-sm font-semibold">{q}</div>
      <div className="mt-1 text-sm text-white/70">{a}</div>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs text-white/60">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
      />
    </div>
  );
}
