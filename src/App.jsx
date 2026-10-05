import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ClipboardCheck, Clock3, HardHat, Layers3, Mail, MapPin, Menu, MessageCircle, Phone, Ruler, Send, ShieldCheck, X, Hammer, Building2 } from 'lucide-react'
import { company, services, workSteps } from './data.js'

const images = {
  hero: '/images/construction-hero.svg',
  building: '/images/building-study.svg',
  structure: '/images/building-study.svg',
  site: '/images/site-in-progress.svg',
}
const whatsappUrl = (message = 'Hello, I would like to discuss a construction project.') => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`

function Brand({ light = false }) {
  return <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label={`${company.name} home`}><span className="brand-mark">{company.monogram}<i /></span><span className="brand-name">{company.name}<small>CONSTRUCTION & CONTRACTING</small></span></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const nav = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Contact', '#contact']]
  return <header className="site-header"><div className="header-inner"><Brand /><nav className={`main-nav${open ? ' nav-open' : ''}`} aria-label="Main navigation">
    {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    <a className="button button-dark nav-quote" href="#contact" onClick={() => setOpen(false)}>Get a quote <ArrowUpRight size={16} /></a>
  </nav><a className="button button-dark desktop-quote" href="#contact">Get a quote <ArrowUpRight size={16} /></a>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}

function Eyebrow({ children, light = false }) { return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span />{children}</div> }
function SectionHeading({ eyebrow, title, text, light = false }) { return <div className={`section-heading${light ? ' section-heading-light' : ''}`}><Eyebrow light={light}>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div> }
function PageIntro({ label, title, detail }) { return <section className="page-intro"><div className="page-intro-inner"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{detail}</p></div><div className="intro-stamp"><span>JS</span><small>BUILT<br />WITH<br />PURPOSE</small></div></section> }

function ServiceGrid({ limit }) {
  const iconTypes = [Building2, Layers3, Hammer, Building2, Layers3, Ruler, HardHat, Ruler, Ruler, Hammer, ClipboardCheck]
  return <div className="service-grid">{services.slice(0, limit || services.length).map((service, index) => {
    const Icon = iconTypes[index]
    return <article className="service-item" key={service.title}><div className="service-top"><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span className="service-icon"><Icon size={22} strokeWidth={1.6} /></span></div><h3>{service.title}</h3><p>{service.detail}</p><a href="#contact" className="text-link">Discuss this service <ArrowUpRight size={15} /></a></article>
  })}</div>
}

function TrustStrip() {
  const items = [[ShieldCheck, 'Quality-minded work'], [ClipboardCheck, 'Reliable coordination'], [HardHat, 'Safety focus'], [Ruler, 'Project-led approach']]
  return <div className="trust-strip">{items.map(([Icon, text]) => <div className="trust-item" key={text}><Icon size={18} strokeWidth={1.7} /><span>{text}</span></div>)}</div>
}

function StatsStrip() {
  return <section className="stats-strip" aria-label="Company statistics"><div className="container stats-inner">{company.stats.map(stat => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>
}

function Process() {
  return <section className="process-section"><div className="container"><SectionHeading eyebrow="A clear path forward" title="How we work" text="Good work begins with clear expectations. We keep the process practical, collaborative and focused on your project." /><div className="process-grid">{workSteps.map(([number, title, detail]) => <article className="process-step" key={number}><span>{number}</span><div className="process-marker"><i /></div><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>
}

function CtaBand() {
  return <section className="cta-band"><div className="container cta-inner"><div><Eyebrow light>Let's get started</Eyebrow><h2>Have a construction<br />project in mind?</h2><p>Tell us what you are planning. We’ll connect to understand the scope.</p></div><div className="cta-actions"><a className="button button-accent" href="#contact">Request a quote <ArrowUpRight size={17} /></a><a className="button button-outline-light" href={`tel:${company.phone}`}><Phone size={16} /> Call us</a><a className="cta-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-about"><Brand light /><p>{company.description}</p><a className="footer-social" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp"><MessageCircle size={17} /></a></div><div className="footer-column"><h3>Explore</h3><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><div className="footer-column"><h3>Services</h3>{['Civil Construction', 'Structural Work', 'Steel & Fabrication', 'Masonry Work', 'Concrete Work', 'Renovation & Repair'].map(item => <a href="#services" key={item}>{item}</a>)}</div><div className="footer-column footer-contact"><h3>Get in touch</h3><a href={`tel:${company.phone}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><span>{company.address}</span><a className="footer-map" href="#contact">Contact the team <ArrowRight size={14} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span><span>GSTIN: {company.gstNumber}</span><span>Made for the work ahead.</span></div></footer>
}

function FloatingContact() { return <div className="floating-contact"><a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={21} /><span>WhatsApp</span></a><a href={`tel:${company.phone}`} aria-label="Call JS Construction"><Phone size={20} /><span>Call</span></a></div> }

function Home() {
  return <><section className="hero" id="home" style={{ '--hero-image': `url("${images.hero}")` }}><div className="hero-texture" /><div className="hero-content container"><Eyebrow light>Construction & contracting · {company.city}</Eyebrow><h1>Built with<br /><em>purpose.</em></h1><p className="hero-lede">{company.description}</p><div className="hero-actions"><a className="button button-accent" href="#contact">Start a conversation <ArrowUpRight size={17} /></a><a className="button button-outline-light" href="#projects">Explore our work <ArrowDownRight size={17} /></a></div><div className="hero-caption"><span>JS / 01</span><span>Construction that moves your project forward</span></div></div><div className="hero-side-label">{company.name} <span>·</span> {company.address}</div><div className="hero-index"><span>01</span><i /></div><div className="hero-blueprint" aria-hidden="true"><span /><span /><span /><span /><i /></div></section>
    <TrustStrip /><StatsStrip />
    <section className="intro-section section-pad reveal" id="about"><div className="container intro-layout"><div className="intro-photo-wrap"><img src={images.building} alt="Architectural concrete building under construction" /><div className="photo-note"><span>01</span><span>Ideas, made tangible.</span></div><div className="photo-coordinate">{company.city.toUpperCase()} · {company.state.toUpperCase()}</div></div><div className="intro-copy"><Eyebrow>Who we are</Eyebrow><h2>Building with<br /><span>purpose.</span></h2><p className="intro-lead">Construction should feel considered at every stage, from the first conversation to the final handover.</p><p>{company.description}</p><a className="text-link text-link-large" href="#contact">More about JS Construction <ArrowUpRight size={16} /></a><div className="intro-aside"><span className="aside-line" />{company.address.toUpperCase()}</div></div></div></section>
    <section className="services-section section-pad reveal" id="services"><div className="container"><div className="section-topline"><SectionHeading eyebrow="What we do" title={<>Work built around<br />your needs.</>} text="A range of construction and contracting services, brought together around the requirements of your project." /><a href="#contact" className="button button-dark">Discuss a project <ArrowUpRight size={16} /></a></div><ServiceGrid /></div></section>
    <section className="manifesto reveal"><div className="manifesto-image" style={{ backgroundImage: `url("${images.structure}")` }} /><div className="manifesto-content"><Eyebrow light>Our approach</Eyebrow><blockquote>“Good construction is more than what you see. It’s the care behind every detail.”</blockquote><p>Clear communication, thoughtful planning and accountable execution are at the heart of every project.</p><a className="text-link text-link-light" href="#about">What guides our work <ArrowUpRight size={16} /></a></div><span className="manifesto-index">02 — THE WAY WE BUILD</span></section>
    <section className="reveal"><Process /></section>
    <section className="work-section section-pad reveal" id="projects"><div className="container work-layout"><div className="work-copy"><Eyebrow>Project showcase</Eyebrow><h2>Every project<br />starts with a<br /><span>conversation.</span></h2><p>We are preparing a portfolio of completed and current work. Get in touch to discuss your project and see relevant examples as they become available.</p><a className="button button-dark" href="#contact">Discuss your project <ArrowUpRight size={16} /></a></div><div className="work-image"><img src={images.site} alt="Construction site with a building under development" /><div className="work-image-label"><span>PROJECT PORTFOLIO</span><strong>In progress</strong><span>Check back soon for real project updates.</span></div></div></div></section><ContactPanel /><CtaBand /></>
}

function About() {
  const values = [['Quality', 'Careful workmanship and attention to the agreed scope.'], ['Integrity', 'Straightforward conversations and honest expectations.'], ['Safety', 'Safe working practices matter at every project stage.'], ['Reliability', 'Consistent coordination and responsible execution.'], ['Professionalism', 'Respect for your time, property and requirements.'], ['Client satisfaction', 'A collaborative approach shaped around your needs.']]
  return <><PageIntro label="About JS Construction" title={<>Built on clear<br /><span>intentions.</span></>} detail="A construction and contracting partner in KR Puram, Bengaluru, focused on practical execution and work that lasts." /><section className="about-story section-pad"><div className="container about-story-grid"><div className="about-image"><img src={images.building} alt="Modern building structure with concrete and glass" /><span>BUILT AROUND YOUR PROJECT</span></div><div className="about-story-copy"><Eyebrow>Who we are</Eyebrow><h2>Construction with a thoughtful approach.</h2><p>{company.description}</p><p>We work to understand each client's priorities, align the scope and coordinate the work with care. Every project is different; our role is to bring clarity and commitment to the one in front of us.</p><div className="owner-note"><span className="owner-initial">{company.ownerName.charAt(0)}</span><span><strong>{company.ownerName}</strong><small>Owner · {company.name}</small></span></div></div></div></section><section className="mission-section"><div className="container mission-grid"><article><span className="mission-number">01</span><Eyebrow>Our mission</Eyebrow><h2>Make every build<br />mean something.</h2><p>{company.mission}</p></article><article><span className="mission-number">02</span><Eyebrow>Our vision</Eyebrow><h2>Build trust that<br />stands with it.</h2><p>{company.vision}</p></article></div></section><section className="values-section section-pad"><div className="container"><SectionHeading eyebrow="What we stand for" title="Values behind the work." /><div className="values-grid">{values.map(([title, detail], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section><section className="company-info"><div className="container company-info-inner"><div><Eyebrow light>Company details</Eyebrow><h2>The essentials.</h2></div><dl><div><dt>Business name</dt><dd>{company.name}</dd></div><div><dt>Business type</dt><dd>Construction & contracting</dd></div><div><dt>GSTIN</dt><dd>{company.gstNumber}</dd></div><div><dt>Location</dt><dd>{company.address}</dd></div><div><dt>Owner</dt><dd>{company.ownerName}</dd></div><div><dt>Established</dt><dd>{company.established}</dd></div></dl></div></section><CtaBand /></>
}

function Services() {
  return <><PageIntro label="Our services" title={<>The right work,<br /><span>done with care.</span></>} detail="Professional construction and contracting services tailored to the needs and scope of your project." /><section className="services-page section-pad"><div className="container"><div className="services-page-note"><p>From individual trade work to broader construction scopes, we coordinate around your requirements and discuss the right approach before work begins.</p><span>11 SERVICE AREAS</span></div><ServiceGrid /></div></section><div className="service-image-break"><img src={images.structure} alt="Contemporary structure showing architectural construction" /><div><span>Built on the details.</span><p>Let's talk through what your project needs.</p><Link className="text-link text-link-light" to="/contact">Plan your project <ArrowUpRight size={16} /></Link></div></div><CtaBand /></>
}

function Projects() {
  return <><PageIntro label="Projects" title={<>Work worth<br /><span>showing.</span></>} detail="A considered project gallery is coming soon. We will only share real work, with the right context and permission." /><section className="projects-page section-pad"><div className="container"><div className="projects-empty"><div className="projects-empty-image"><img src={images.site} alt="Active construction site with scaffolding and building materials" /><div className="empty-image-tag"><span>PORTFOLIO</span><span>01 / COMING SOON</span></div></div><div className="projects-empty-copy"><Eyebrow>Real work. Real details.</Eyebrow><h2>Our project stories<br />are taking shape.</h2><p>We’re building a portfolio that reflects the work accurately. Until then, tell us about your project and we’ll be happy to discuss the scope and share relevant examples directly.</p><Link className="button button-dark" to="/contact">Talk about a project <ArrowUpRight size={16} /></Link></div></div><div className="projects-footnote"><span><Check size={15} /> No invented projects or client claims</span><span>Portfolio updates will appear here</span></div></div></section><CtaBand /></>
}

function QuoteForm() {
  const [status, setStatus] = useState('')
  const [values, setValues] = useState({ name: '', phone: '', email: '', companyName: '', projectType: '', location: '', budget: '', message: '' })
  const update = event => setValues({ ...values, [event.target.name]: event.target.value })
  const submit = event => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    const message = `Hello, I would like to request a construction quote.\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email || 'Not provided'}\nCompany: ${values.companyName || 'Not provided'}\nProject: ${values.projectType || 'Not specified'}\nLocation: ${values.location || 'Not specified'}\nEstimated budget: ${values.budget || 'Not provided'}\nDetails: ${values.message}`
    setStatus('Your enquiry is ready. Continue in WhatsApp to send it to our team.')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }
  return <form className="quote-form" onSubmit={submit}><div className="form-heading"><span>01 — PROJECT ENQUIRY</span><h2>Tell us what<br />you have in mind.</h2><p>Share a few details and we’ll take it from there.</p></div><div className="form-grid">
    <label>Your name <input name="name" autoComplete="name" required value={values.name} onChange={update} placeholder="Full name" /></label>
    <label>Phone number <input name="phone" type="tel" autoComplete="tel" required pattern="[+0-9() .-]{7,20}" value={values.phone} onChange={update} placeholder="Your contact number" /></label>
    <label>Email address <input name="email" type="email" autoComplete="email" value={values.email} onChange={update} placeholder="you@example.com" /></label>
    <label>Company <input name="companyName" autoComplete="organization" value={values.companyName} onChange={update} placeholder="Optional" /></label>
    <label>Project type <select name="projectType" value={values.projectType} onChange={update}><option value="">Select a service</option>{services.map(item => <option key={item.title}>{item.title}</option>)}</select></label>
    <label>Project location <input name="location" value={values.location} onChange={update} placeholder="City or area" /></label>
    <label className="form-wide">Estimated budget <input name="budget" value={values.budget} onChange={update} placeholder="Optional" /></label>
    <label className="form-wide">Project details <textarea name="message" required minLength="10" rows="4" value={values.message} onChange={update} placeholder="A short description of the work you need" /></label>
  </div><div className="form-submit-row"><button className="button button-accent" type="submit">Continue to WhatsApp <Send size={16} /></button><span><ShieldCheck size={15} /> Your details open in a WhatsApp message.</span></div>{status && <p className="form-status" role="status">{status}</p>}</form>
}

function ContactPanel() {
  return <section className="contact-page section-pad reveal" id="contact"><div className="container contact-layout"><aside className="contact-aside"><Eyebrow>Start a conversation</Eyebrow><h2>Tell us what<br />you’re building.</h2><p>Share your requirements and we’ll get in touch to discuss the next steps.</p><div className="contact-details"><a href={`tel:${company.phone}`}><span><Phone size={18} /></span><small>Call us</small><strong>{company.phone}</strong></a><a href={whatsappUrl()} target="_blank" rel="noreferrer"><span><MessageCircle size={18} /></span><small>WhatsApp</small><strong>Message our team</strong></a><a href={`mailto:${company.email}`}><span><Mail size={18} /></span><small>Email</small><strong>{company.email}</strong></a><div><span><MapPin size={18} /></span><small>Based in</small><strong>{company.address}</strong></div></div></aside><QuoteForm /></div></section>
}

function Contact() {
  return <><PageIntro label="Contact" title={<>Let's talk<br /><span>construction.</span></>} detail="Have a project in mind? Reach out directly or send us a few details so we can get the conversation started." /><section className="contact-page section-pad"><div className="container contact-layout"><aside className="contact-aside"><Eyebrow>Contact information</Eyebrow><h2>We’re here to<br />hear about it.</h2><p>Tell us where you are in the process and what you need. We’ll get back to you to understand the next steps.</p><div className="contact-details"><a href={`tel:${company.phone}`}><span><Phone size={18} /></span><small>Call us</small><strong>{company.phone}</strong></a><a href={whatsappUrl()} target="_blank" rel="noreferrer"><span><MessageCircle size={18} /></span><small>WhatsApp</small><strong>Start a conversation</strong></a><a href={`mailto:${company.email}`}><span><Mail size={18} /></span><small>Email</small><strong>{company.email}</strong></a><div><span><MapPin size={18} /></span><small>Based in</small><strong>{company.address}</strong></div><div><span><Clock3 size={18} /></span><small>Business hours</small><strong>{company.businessHours}</strong></div></div></aside><QuoteForm /></div></section><section className="map-band"><div className="map-pattern"><MapPin size={26} /></div><div className="map-band-copy"><span>LOCALLY BASED · OPEN TO PROJECT DISCUSSIONS</span><strong>KR Puram, Bengaluru</strong></div><a href="https://maps.google.com/?q=KR+Puram+Bengaluru" target="_blank" rel="noreferrer" className="text-link">Open map <ArrowUpRight size={15} /></a></section></>
}

export default function App() {
  useEffect(() => {
    document.title = `${company.name} | Construction & Civil Contracting`
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <><Header /><main><Home /></main><Footer /><FloatingContact /></>
}