import './style.css'

const SHOWS = [
  // Uncomment and edit when you have dates:
  // {
  //   iso: '2026-10-04',
  //   date: 'Oct 04',
  //   year: '2026',
  //   city: 'Chicago, IL',
  //   venue: 'Empty Bottle',
  //   href: '#',
  // },
  // {
  //   iso: '2026-10-11',
  //   date: 'Oct 11',
  //   year: '2026',
  //   city: 'Detroit, MI',
  //   venue: 'El Club',
  //   href: '#',
  // },
  // {
  //   iso: '2026-10-18',
  //   date: 'Oct 18',
  //   year: '2026',
  //   city: 'Toronto, ON',
  //   venue: 'The Garrison',
  //   href: '#',
  // },
  // {
  //   iso: '2026-11-02',
  //   date: 'Nov 02',
  //   year: '2026',
  //   city: 'Brooklyn, NY',
  //   venue: 'Baby’s All Right',
  //   href: '#',
  // },
  // {
  //   iso: '2026-11-09',
  //   date: 'Nov 09',
  //   year: '2026',
  //   city: 'Philadelphia, PA',
  //   venue: 'Johnny Brenda’s',
  //   href: '#',
  // },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/sweetiesband/' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/2FSa6XZPWe1MqPRXotMjge' },
  { label: 'YouTube', href: 'https://www.youtube.com/@sweeetiesband' },
  { label: 'YouTube Music', href: 'https://music.youtube.com/@sweeetiesband' },
]

document.querySelector('#app').innerHTML = `
  <div class="noise" aria-hidden="true"></div>

  <header class="site-header" data-header>
    <a class="logo" href="#top">The Sweeties</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
      <span class="nav-toggle__label">Menu</span>
      <span class="nav-toggle__bars" aria-hidden="true"></span>
    </button>
    <nav id="site-nav" class="site-nav" data-nav>
      <a href="#listen">Music</a>
      <a href="#shows">Shows</a>
      <a href="#about">About</a>
      <a href="#connect">Connect</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-label="The Sweeties">
      <div class="hero__media">
        <img
          class="hero__image"
          src="/images/Sweeties-Spotify-Cover.jpg"
          alt="The Sweeties performing under stage lights"
          width="2400"
          height="1600"
          fetchpriority="high"
        />
        <div class="hero__scrim" aria-hidden="true"></div>
      </div>
      <div class="hero__content">
        <h1 class="hero__brand">The Sweeties</h1>
        <p class="hero__headline">Feedback, melody, and late-night static.</p>
        <p class="hero__lede">Indie / alternative rock from the Midwest.</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#listen">Listen Now</a>
        </div>
      </div>
      <a class="hero__scroll" href="#listen" aria-label="Scroll to latest release">
        <span>Scroll</span>
      </a>
    </section>

    <section id="listen" class="section release" data-reveal>
      <div class="section__head">
        <p class="eyebrow">Stream our Latest Release</p>
        <h2>Western Pines</h2>
        <p class="section__lede">Year for the pines.</p>
      </div>
      <div class="release__layout">
        <figure class="release__cover">
          <img
            src="/images/WesternPines.png"
            alt="Cover art for Static Between Stations"
            width="1200"
            height="1200"
            loading="lazy"
          />
        </figure>
        <div class="release__meta">
          <dl class="release__facts">
            <div>
              <dt>Released</dt>
              <dd>March 8, 2026</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>Digital</dd>
            </div>
            <div>
              <dt>Label</dt>
              <dd>Independent</dd>
            </div>
          </dl>
          <ol class="tracklist">
            <li><span>01</span> Western Pines</li>
            <li><span>02</span> Mystery Girl</li>
            <li><span>03</span> Nathan On The Couch</li>
          </ol>
          <div class="release__links">
            <a href="https://open.spotify.com/artist/2FSa6XZPWe1MqPRXotMjge" rel="noopener noreferrer" target="_blank">Spotify</a>
            <a href="https://music.apple.com/us/artist/the-sweeties/1792546727" rel="noopener noreferrer" target="_blank">Apple Music</a>
            <a href="https://music.youtube.com/@sweeetiesband" rel="noopener noreferrer" target="_blank">YouTube Music</a>
          </div>
        </div>
      </div>
    </section>

    <section id="shows" class="section shows" data-reveal>
      <div class="section__head">
        <p class="eyebrow">On the Road</p>
        <h2>Upcoming Shows</h2>
        <p class="section__lede">${
          SHOWS.length
            ? 'Small rooms, hot amps. Grab tickets before they go.'
            : 'No shows announced yet, check back soon!'
        }</p>
      </div>
      ${
        SHOWS.length
          ? `<ul class="show-list">
        ${SHOWS.map(
          (show) => `
          <li class="show-list__item">
            <time datetime="${show.iso}">
              <span class="show-list__date">${show.date}</span>
              <span class="show-list__year">${show.year}</span>
            </time>
            <div class="show-list__where">
              <span class="show-list__city">${show.city}</span>
              <span class="show-list__venue">${show.venue}</span>
            </div>
            <a class="show-list__tickets" href="${show.href}">Tickets</a>
          </li>
        `,
        ).join('')}
      </ul>`
          : ''
      }
    </section>

    <section id="about" class="section about" data-reveal>
      <div class="about__copy">
        <p class="eyebrow">The Band</p>
        <h2>The Sweeties</h2>
        <p>
          The Sweeties are here to party! Based out of Madison and Milwaukee, 
          the band is comprised of Tanner Sweet (lead guitarist), Tristan Vue 
          (rhythm guitarist), Zachary Fernandez (bassist), and Everett Benzel 
          (drums). Current college students with dreams of hitting the big stages!
        </p>
      </div>
      <figure class="about__media">
        <img
          src="/images/puddlerslive.jpg"
          alt="Close-up of a guitar and microphone on a dimly lit stage"
          width="1600"
          height="1067"
          loading="lazy"
        />
      </figure>
    </section>

    <section id="connect" class="section connect" data-reveal>
      <div class="section__head">
        <p class="eyebrow">Connect With Us</p>
        <h2>Find The Sweeties</h2>
        <p class="section__lede">New releases, show times, booking, and fun clips!</p>
      </div>
      <ul class="social-list">
        ${SOCIALS.map(
          (s) => `
          <li>
            <a href="${s.href}" rel="noopener noreferrer" target="_blank">${s.label}</a>
          </li>
        `,
        ).join('')}
      </ul>
      <a class="connect__mail" href="mailto:officialsweetiesband@gmail.com">officialsweetiesband@gmail.com</a>
    </section>
  </main>

  <footer class="site-footer">
    <p class="site-footer__brand">The Sweeties</p>
    <p class="site-footer__copy">© ${new Date().getFullYear()} The Sweeties. All rights reserved.</p>
  </footer>
`

const header = document.querySelector('[data-header]')
const nav = document.querySelector('[data-nav]')
const navToggle = document.querySelector('[data-nav-toggle]')

navToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open')
  navToggle.setAttribute('aria-expanded', String(open))
})

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
    navToggle?.setAttribute('aria-expanded', 'false')
  })
})

const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 40)
}

window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

const revealEls = document.querySelectorAll('[data-reveal]')
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  revealEls.forEach((el) => observer.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'))
}

requestAnimationFrame(() => {
  document.body.classList.add('is-ready')
})
