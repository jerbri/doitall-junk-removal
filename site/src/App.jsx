import {
  Armchair,
  Building2,
  Camera,
  Clock,
  DollarSign,
  Hammer,
  Home,
  Mail,
  MessageSquare,
  Phone,
  Refrigerator,
  Sparkles,
  Trees,
  Truck,
  Warehouse
} from "lucide-react";
import logo from "./assets/logo-512.webp";
import { business, mailLink, smsLink, telLink } from "./business.js";
import { SocialIcon } from "./SocialIcon.jsx";

const haulList = [
  { icon: Armchair, name: "Furniture", text: "Couches, mattresses, dressers, recliners, that sectional nobody wants." },
  { icon: Refrigerator, name: "Appliances", text: "Fridges, washers, dryers, water heaters, old grills." },
  { icon: Warehouse, name: "Cleanouts", text: "Garages, attics, sheds, storage units, rentals and estates." },
  { icon: Trees, name: "Yard Debris", text: "Branches, brush, old fencing, busted playsets." },
  { icon: Hammer, name: "Construction", text: "Drywall, flooring, cabinets and leftover reno mess." },
  { icon: Building2, name: "Commercial", text: "Office furniture, fixtures and property turnovers." }
];

const steps = [
  { icon: Camera, title: "Text a pic", text: "Snap a photo of the junk and text it over. That's it." },
  { icon: DollarSign, title: "Get a price", text: "We send back an upfront quote. No surprises when we show up." },
  { icon: Truck, title: "We haul it", text: "We do all the lifting, load the trailer and sweep up after." }
];

const reasons = [
  { icon: Clock, title: "Fast scheduling", text: "Same-day and next-day pickups whenever we can make it work." },
  { icon: DollarSign, title: "Upfront pricing", text: "The price we quote is the price you pay." },
  { icon: Home, title: "Local guys", text: "Two hometown guys who answer their own phone." },
  { icon: Sparkles, title: "We leave it clean", text: "Junk gone, floor swept. You won't know we were there." }
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${business.name} home`}>
        <img src={logo} alt="" />
        <span>Do It All <em>Junk</em></span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#haul">What we haul</a>
        <a href="#how">How it works</a>
        <a href="#follow">Follow us</a>
      </nav>
      <a className="button primary small" href={telLink}>
        <Phone size={16} /> {business.phoneDisplay}
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">Residential • Commercial • Cleanouts</div>
        <h1>
          You point.<br />
          <span className="green">We haul.</span>
        </h1>
        <p>
          Couches, appliances, garage cleanouts, yard debris and just about
          anything else. If it fits on the truck, it's gone. Serving{" "}
          {business.serviceArea}.
        </p>
        <div className="buttons">
          <a className="button primary" href={smsLink}>
            <MessageSquare size={18} /> Text a pic for a quote
          </a>
          <a className="button secondary" href={telLink}>
            <Phone size={18} /> Call {business.phoneDisplay}
          </a>
        </div>
        <p className="signature">{business.owners}</p>
      </div>
      <div className="hero-logo">
        <img src={logo} alt={`${business.name} logo`} width="512" height="512" />
      </div>
    </section>
  );
}

function Haul() {
  return (
    <section className="section" id="haul">
      <h2>What we <span className="green">haul</span></h2>
      <p className="lead">Short answer: pretty much everything. Here's the usual stuff.</p>
      <div className="grid three">
        {haulList.map(({ icon: Icon, name, text }) => (
          <article className="card" key={name}>
            <div className="icon"><Icon size={26} /></div>
            <h3>{name}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="note">
        Don't see it? <a href={smsLink}>Text us</a>. The answer is probably yes.
      </p>
    </section>
  );
}

function How() {
  return (
    <section className="section band" id="how">
      <h2>How it <span className="green">works</span></h2>
      <ol className="steps">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <div className="step-num">{i + 1}</div>
            <div className="icon"><Icon size={26} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Why() {
  return (
    <section className="section" id="why">
      <h2>Why <span className="green">Do It All</span></h2>
      <div className="grid four">
        {reasons.map(({ icon: Icon, title, text }) => (
          <article className="card" key={title}>
            <div className="icon"><Icon size={26} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Follow() {
  return (
    <section className="section band" id="follow">
      <h2>Watch us <span className="green">work</span></h2>
      <p className="lead">
        Before and afters, big loads and the occasional weird find. Follow along.
      </p>
      <div className="socials">
        {business.socials.map((s) => (
          <a className="social" key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
            <SocialIcon name={s.name} size={28} />
            <span>
              <strong>{s.name}</strong>
              <small>{s.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Got junk? <span className="green">Let's go.</span></h2>
      <p className="lead">Text a photo for the fastest quote. Call or email works too.</p>
      <div className="contact-row">
        <a className="contact-card" href={smsLink}>
          <MessageSquare size={28} />
          <strong>Text</strong>
          <span>{business.phoneDisplay}</span>
        </a>
        <a className="contact-card" href={telLink}>
          <Phone size={28} />
          <strong>Call</strong>
          <span>{business.phoneDisplay}</span>
        </a>
        <a className="contact-card" href={mailLink}>
          <Mail size={28} />
          <strong>Email</strong>
          <span>{business.email}</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <img src={logo} alt="" />
        <span>
          <strong>{business.name}</strong>
          <br />
          {business.tagline}
        </span>
      </div>
      <div className="footer-socials">
        {business.socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
            <SocialIcon name={s.name} size={22} />
          </a>
        ))}
      </div>
      <small>© {new Date().getFullYear()} {business.name}</small>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={telLink}><Phone size={18} /> Call</a>
      <a href={smsLink} className="primary"><MessageSquare size={18} /> Text a pic</a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Haul />
        <How />
        <Why />
        <Follow />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
