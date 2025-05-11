import '../App.css';

function HomePage() {
  return (
    <div className='app-container'>
      <header>
        <a href='/#/'>
          <img
            src='/tampereen-kevatpaivat-2025-transparent.png'
            alt='Tampereen Kevätpäivät™ logo'
            className='header-logo'
          />
        </a>
        <div className='header-content'>
          <h1>Tampereen Kevätpäivät™</h1>
        </div>
      </header>

      <nav className='site-nav'>
        <ul className='nav-links'>
          <li>
            <a href='/#/2025'>2025</a>
          </li>
        </ul>
      </nav>

      <main>
        <section className='intro save-the-date'>
          <h3 className='save-label'>SAVE THE DATE</h3>
          <h2 className='next-date'>16.5.2026</h2>
          <p>
            Tampereen Kevätpäivät™ on tekosyy tavata ystäviä ja uusia ystäviä,
            sekä nauttia maailman saunapääkaupungin keväästä hyvässä seurassa.
            Tule, ja tuo ystäväsikin.
          </p>
        </section>
      </main>

      <footer>
        <div className='footer-content'>
          <img
            src='/tampereen-kevatpaivat-2025-icon.png'
            alt='Tampereen Kevätpäivät™ icon'
            className='footer-icon'
          />
          <p>&copy; {new Date().getFullYear()} Tampereen Kevätpäivät™</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
