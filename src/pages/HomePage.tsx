import { type ReactNode } from 'react';
import '../App.css';
import {
  registrationDeadline,
  registrationForm,
  whatsappGroupUrl,
} from '../event2026Config';

function InfoLine({
  marker,
  children,
}: {
  marker?: string;
  children: ReactNode;
}) {
  return (
    <div className='info-item'>
      {marker && (
        <span className='info-marker' aria-hidden='true'>
          {marker}
        </span>
      )}
      <p>{children}</p>
    </div>
  );
}

function LocationLine({ children }: { children: ReactNode }) {
  return (
    <p className='location'>
      <span className='info-marker' aria-hidden='true'>
        📍
      </span>
      {children}
    </p>
  );
}

function RegistrationNote() {
  return (
    <InfoLine marker='📝'>
      Vaatii{' '}
      {registrationForm ? (
        <a
          href={registrationForm}
          target='_blank'
          rel='noopener noreferrer'
        >
          ilmoittautumisen
        </a>
      ) : (
        'ilmoittautumisen'
      )}
      .
    </InfoLine>
  );
}

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
          <p className='date'>18.7.2026</p>
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
          <h3 className='save-label'>Ilmoittautuminen auki!</h3>
          <h2 className='next-date'>18.7.2026</h2>
          <p>
            Tampereen Kevätpäivät™ on tekosyy tavata ystäviä ja uusia ystäviä,
            sekä nauttia maailman saunapääkaupungin keväästä hyvässä seurassa.
            Tule, ja tuo ystäväsikin.
          </p>
        </section>

        <section className='schedule'>
          <h2>Ohjelma</h2>

          <div className='schedule-fork'>
            <p className='schedule-fork-intro'>
              Ennen saunaa valitse <strong>joko</strong> melonta{' '}
              <strong>tai</strong> vesibussi saarelle. Molemmat reitit yhtyvät
              saunalla Viikinsaaressa.
            </p>

            <div className='schedule-fork-branches'>
              <div className='schedule-branch schedule-branch--paddle'>
                <div className='schedule-branch-header'>
                  <span className='schedule-branch-badge'>Linja A</span>
                  <h3>
                    <span className='info-marker' aria-hidden='true'>
                      🛶
                    </span>{' '}
                    Melonta
                  </h3>
                </div>
                <div className='event-card schedule-branch-event'>
                  <div className='event-time'>10:30</div>
                  <div className='event-content'>
                    <h3>Melonta Pyhäjärvellä</h3>
                    <InfoLine marker='🕒'>
                      Klo 10:30–12:00 (lähtö) ja 14:00–15:00 (paluu)
                    </InfoLine>
                    <LocationLine>
                      <a
                        href='https://www.google.com/maps/search/?api=1&query=Hatanpäänkatu+6+Tampere'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Tampereen soutukeskus, Hatanpäänkatu 6 (Tres Hombres
                        Adventure)
                      </a>
                    </LocationLine>
                    <InfoLine marker='🛶'>
                      Kajakki varusteineen noin neljäksi tunniksi — meno ja
                      paluu meloen. Lisäkajakkeja voi vuokrata tarpeen mukaan.
                    </InfoLine>
                    <InfoLine marker='€'>
                      31,50 € / kajakki.
                    </InfoLine>
                    <InfoLine marker='→'>
                      Noin 1,5 km keskustasta; lähin bussipysäkki on 15B-linjalla.
                      Pyydä tarvittaessa parkkilupa paikan päältä.
                    </InfoLine>
                    <RegistrationNote />
                  </div>
                </div>
              </div>

              <div
                className='schedule-fork-or'
                aria-label='Tai valitse toinen linja'
              >
                <span>TAI</span>
              </div>

              <div className='schedule-branch schedule-branch--ferry'>
                <div className='schedule-branch-header'>
                  <span className='schedule-branch-badge'>Linja B</span>
                  <h3>
                    <span className='info-marker' aria-hidden='true'>
                      ⛴
                    </span>{' '}
                    Vesibussi
                  </h3>
                </div>
                <div className='event-card schedule-branch-event'>
                  <div className='event-time'>→</div>
                  <div className='event-content'>
                    <h3>Suoraan saarelle Laukontorilta</h3>
                    <InfoLine marker='🕒'>
                      Saarelle ennen saunaa — esim. klo 11:00 tai 12:00 (laivat
                      tasatunnein).
                    </InfoLine>
                    <LocationLine>
                      <a
                        href='https://www.google.com/maps/search/?api=1&query=Laukontori+Tampere'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Laukontori, Tampere
                      </a>
                    </LocationLine>
                    <InfoLine marker='🎫'>
                      Osta meno-paluu-lippu itse{' '}
                      <a
                        href='https://www.hopealinjat.fi/palvelut/tampere-laukontori-viikinsaari/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Hopealinjoilta
                      </a>
                      . Paluu Viikinsaaresta puolen tunnin kohdalla (esim.
                      14:30).
                    </InfoLine>
                  </div>
                </div>
              </div>
            </div>

            <div className='schedule-fork-merge'>
              <span className='schedule-fork-merge-icon' aria-hidden='true'>
                ↓
              </span>
              <p>Yhteinen ohjelma jatkuu</p>
            </div>
          </div>

          <div className='event-card event-card--shared'>
            <div className='event-time'>12:00</div>
            <div className='event-content'>
              <h3>Sauna Viikinsaaressa</h3>
              <InfoLine marker='🕒'>Klo 12:00–14:00</InfoLine>
              <InfoLine marker='🍽'>
                Saunomista ja kevyttä syötävää. Tarkemmat tiedot myöhemmin.
              </InfoLine>
              <RegistrationNote />
            </div>
          </div>

          <div className='schedule-fork-return'>
            <h3 className='schedule-fork-return-title'>
              Paluu Laukontorille (n. klo 14–15)
            </h3>
            <div className='schedule-fork-return-branches'>
              <div className='schedule-return-path schedule-return-path--paddle'>
                <span className='schedule-return-label'>Linja A</span>
                <p>Paluu meloen soutukeskukseen klo 14–15.</p>
              </div>
              <div
                className='schedule-fork-or schedule-fork-or--compact'
                aria-hidden='true'
              >
                <span>TAI</span>
              </div>
              <div className='schedule-return-path schedule-return-path--ferry'>
                <span className='schedule-return-label'>Linja B</span>
                <p>
                  <a
                    href='https://www.hopealinjat.fi/palvelut/tampere-laukontori-viikinsaari/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Vesibussi Viikinsaaresta
                  </a>{' '}
                  (puolen tunnin kohdalla).
                </p>
              </div>
            </div>
          </div>

          <div className='directions-card'>
            <div className='directions-content'>
              <p>Siirtymä T3Parkiin (n. klo 15:30–16)</p>
              <p className='directions-note'>
                Laukontorilta kävely on lyhyt ja kätevin. Soutukeskuksesta kävely,
                pyörä tai muu kevyt liikkuminen.
              </p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Laukontori+Tampere&destination=Eteläpuisto+3+33200+Tampere&travelmode=walking'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kävelyreitti Laukontorilta
                </a>
              </div>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Hatanpäänkatu+6+Tampere&destination=Eteläpuisto+3+33200+Tampere&travelmode=walking'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kävelyreitti soutukeskuksesta
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>16:00</div>
            <div className='event-content'>
              <h3>
                <a
                  href='https://t3park.fi/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  T3Park
                </a>{' '}
                — kelluva vesipuisto
              </h3>
              <InfoLine marker='🕒'>Klo 16:00–17:00</InfoLine>
              <LocationLine>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Eteläpuisto+3+33200+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  T3Park Eteläpuisto, Eteläpuisto 3, 33200 Tampere
                </a>
              </LocationLine>
              <InfoLine marker='€'>14 € / henkilö</InfoLine>
              <InfoLine marker='🏊'>
                Tunnin sessio kelluvalla esteradalla. Varaan liput valmiiksi,
                joten muista ilmoittautua.
              </InfoLine>
              <InfoLine marker='◇'>
                Vaatii uimataidon. Pukukopit ja säilytyslokerot ovat paikan
                päällä.
              </InfoLine>
              <RegistrationNote />
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>17:30</div>
            <div className='event-content'>
              <h3>Pihapeliturnaus</h3>
              <InfoLine marker='🕒'>Klo 17:30–19:00</InfoLine>
              <LocationLine>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Eteläpuisto+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Eteläpuisto, Tampere
                </a>
              </LocationLine>
              <InfoLine marker='◇'>
                Petankia, mölkkyä ja muuta pihapeliä rennolla turnausotteella.
                Kaikki välineet löytyvät minulta, joten omia ei tarvitse tuoda.
              </InfoLine>
            </div>
          </div>

          <div className='directions-card'>
            <div className='directions-content'>
              <p>Siirtymä: Eteläpuistosta Goforelle (klo 19:30)</p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Eteläpuisto+3+Tampere&destination=Peltokatu+34+Tampere&travelmode=transit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Reittiohjeet Goforelle
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>19:30</div>
            <div className='event-content'>
              <h3>Sauna ja grilli, Gofore</h3>
              <InfoLine marker='🕒'>Klo 19:30 alkaen</InfoLine>
              <LocationLine>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Peltokatu+34+33100+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Goforen pääkonttori, Peltokatu 34, 33100 Tampere
                </a>
              </LocationLine>
              <InfoLine marker='◇'>A-torni, 4. kerros (rautatieaseman vieressä)</InfoLine>
              <InfoLine marker='◇'>
                Sauna lämpiää ja grilli on käytössä — tuo omat grillattavat.
              </InfoLine>
            </div>
          </div>
        </section>

        <section className='bring-section'>
          <h2>Ilmoittautuminen</h2>
          <div className='bring-card'>
            <InfoLine marker='📝'>
              Yksi lomake kattaa melonnan, saunan ja T3Parkin. Ilmoittaudu
              viimeistään {registrationDeadline}, niin osaan varata paikat ja
              T3Parkin liput valmiiksi.
            </InfoLine>
            {registrationForm ? (
              <div className='registration-button-container'>
                <a
                  href={registrationForm}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='registration-button'
                >
                  Ilmoittaudu
                </a>
              </div>
            ) : (
              <InfoLine marker='◇'>Lisään linkin lomakkeeseen pian.</InfoLine>
            )}
          </div>
        </section>

        <section className='bring-section'>
          <h2>Mitä ottaa mukaan?</h2>
          <div className='bring-card'>
            <InfoLine marker='🧖'>
              Pyyhe ja uimapuku saunoihin ja T3Parkiin
            </InfoLine>
            <InfoLine marker='👕'>Vaihtovaatteet melontaan ja ulkoiluun</InfoLine>
            <InfoLine marker='💧'>Vesipullo</InfoLine>
            <InfoLine marker='◇'>Omat juomat maun mukaan</InfoLine>
            <InfoLine marker='◇'>Grillattavaa Goforen illan grilliin</InfoLine>
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
