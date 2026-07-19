import '../App.css';
import {
  googleCalendarUrl,
  icsUrl,
  outlookCalendarUrl,
  whatsappGroupUrl,
} from '../event2027Config';

function HomePage() {
  return (
    <div className='app-container'>
      <header>
        <a href='/#/'>
          <img
            src='/tampereen-kevatpaivat-2026.png'
            alt='Tampereen Kevätpäivät™ logo'
            className='header-logo'
          />
        </a>
        <div className='header-content'>
          <h1>Tampereen Kevätpäivät™</h1>
          <p className='date'>15.5.2027</p>
        </div>
      </header>

      <nav className='site-nav'>
        <ul className='nav-links'>
          <li>
            <a href='/#/2026'>2026</a>
          </li>
          <li>
            <a href='/#/2025'>2025</a>
          </li>
        </ul>
      </nav>

      <main>
        <section className='intro save-the-date'>
          <h3 className='save-label'>SAVE THE DATE</h3>
          <h2 className='next-date'>15.5.2027</h2>
          <p>
            Tampereen Kevätpäivät™ on tekosyy tavata vanhoja ja uusia ystäviä,
            sekä nauttia maailman saunapääkaupungin keväästä hyvässä seurassa.
            Tule, ja tuo ystäväsikin.
          </p>
          <p>
            Tarkempi ohjelma julkaistaan myöhemmin — merkitse lauantai
            15.5.2027 kalenteriisi jo nyt.
          </p>
          <div className='registration-button-container'>
            <a
              href={googleCalendarUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='registration-button'
            >
              Google Kalenteri
            </a>
          </div>
          <div className='registration-button-container'>
            <a
              href={outlookCalendarUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='registration-button'
            >
              Outlook
            </a>
          </div>
          <div className='registration-button-container'>
            <a href={icsUrl} download className='registration-button'>
              Apple / iCal (.ics)
            </a>
          </div>
        </section>

        <section className='bring-section whatsapp-section'>
          <h2>WhatsApp-ryhmä</h2>
          <div className='bring-card whatsapp-card'>
            <p className='whatsapp-intro'>
              Liity Tampereen Kevätpäivät™ -WhatsApp-ryhmään ja pysy ajan tasalla
              tapahtumasta.
            </p>
            <div className='registration-button-container'>
              <a
                href={whatsappGroupUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='registration-button'
              >
                Liity WhatsApp-ryhmään
              </a>
            </div>
            <div className='whatsapp-qr'>
              <img
                src='/whatsapp-qr-code.png'
                alt='WhatsApp-ryhmän QR-koodi'
                width={280}
                height={280}
              />
              <p>Skannaa QR-koodi WhatsApp-kameralla liittyäksesi ryhmään.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className='footer-content'>
          <img
            src='/tampereen-kevatpaivat-2026.png'
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
