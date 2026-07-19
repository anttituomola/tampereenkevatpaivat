import '../App.css';
import { type ReactNode, useState } from 'react';

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

function EventPage2026() {
  const galleryImages = [
    'melojat-soutukeskuksella.jpeg',
    'kajakkia-kantamassa.jpeg',
    'melojat-pyhajarvella.jpeg',
    'melontaselfie.jpeg',
    'meloja-vaaleanpunaisessa-kajakissa.jpeg',
    'meloja-vihreassa-kajakissa.jpeg',
    'kajakit-rannalla.jpeg',
    'kajakit-rivissa-rannassa.jpeg',
    'viikinsaaren-nauhakoristeet.jpeg',
    'vesibussi-tammerkoski-laiturissa.jpeg',
    'porukkaa-viikinsaaren-saunalla.jpeg',
    'lattiacurling-crazylla.jpeg',
    'lattiacurling-kivet.jpeg',
    'hengailua-goforen-loungessa.jpeg',
    'ruokasuunnitelma-taululla.jpeg',
    'ruoanlaitto-goforen-keittiolla.jpeg',
    'grillausta-goforen-terassilla.jpeg',
    'savua-terassilla.jpeg',
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;

    const newIndex =
      (selectedImage + direction + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateImage(1);
    } else if (e.key === 'ArrowLeft') {
      navigateImage(-1);
    }
  };

  return (
    <div className='app-container' tabIndex={0} onKeyDown={handleKeyDown}>
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
            <a href='/#/'>Etusivu</a>
          </li>
          <li>
            <a href='/#/2025'>2025</a>
          </li>
        </ul>
      </nav>

      <section className='gallery-section'>
        <h2>Kuvia Tapahtumasta</h2>
        <div className='image-gallery'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='gallery-item'
              onClick={() => openLightbox(index)}
            >
              <img src={`/2026/${image}`} alt={`Tapahtumakuva ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <div
        className={`lightbox-overlay ${selectedImage !== null ? 'active' : ''}`}
        onClick={closeLightbox}
      >
        <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
          {selectedImage !== null && (
            <>
              <img
                src={`/2026/${galleryImages[selectedImage]}`}
                alt={`Tapahtumakuva ${selectedImage + 1}`}
                className='lightbox-image'
              />
              <button className='lightbox-close' onClick={closeLightbox}>
                ×
              </button>
              <div className='lightbox-nav'>
                <button onClick={() => navigateImage(-1)}>←</button>
                <button onClick={() => navigateImage(1)}>→</button>
              </div>
            </>
          )}
        </div>
      </div>

      <main>
        <section className='intro'>
          <h2>Näin meni 2026</h2>
          <p>
            Tampereen Kevätpäivät™ 2026 koottiin lauantaina 18.7.2026. Päivään
            mahtui melontaa Pyhäjärvellä, saunomista Viikinsaaressa,
            lattiacurlingia Viihdekeskus Crazyllä sekä yhteistä ruoanlaittoa
            Goforella. Tässä päivän ohjelma sellaisena kuin se oli.
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
                    <InfoLine marker='€'>31,50 € / kajakki.</InfoLine>
                    <InfoLine marker='→'>
                      Noin 1,5 km keskustasta; lähin bussipysäkki on
                      15B-linjalla. Pyydä tarvittaessa parkkilupa paikan
                      päältä.
                    </InfoLine>
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
                Saunomista ja kevyttä syötävää.
              </InfoLine>
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
              <p>Siirtymä Crazylle (n. klo 15:30–15:45)</p>
              <p className='directions-note'>
                Laukontorilta kävely on lyhyt ja kätevin. Soutukeskuksesta
                kävely, pyörä tai muu kevyt liikkuminen.
              </p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Laukontori+Tampere&destination=Puutarhakatu+21+Tampere&travelmode=walking'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kävelyreitti Laukontorilta
                </a>
              </div>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Hatanpäänkatu+6+Tampere&destination=Puutarhakatu+21+Tampere&travelmode=walking'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kävelyreitti soutukeskuksesta
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>15:45</div>
            <div className='event-content'>
              <h3>
                <a
                  href='https://www.viihdekeskuscrazy.fi/curling/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lattiacurling
                </a>{' '}
                — Viihdekeskus Crazy
              </h3>
              <InfoLine marker='⛈'>
                Korvasi ukkosen vuoksi perutun T3Park-vesipuiston.
              </InfoLine>
              <InfoLine marker='🕒'>Klo 15:45–17:00</InfoLine>
              <LocationLine>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Puutarhakatu+21+33210+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Viihdekeskus Crazy, Puutarhakatu 21, 33210 Tampere
                </a>
              </LocationLine>
              <InfoLine marker='🥌'>
                Kaksi rataa samassa huoneessa, yhdelle radalle mahtuu 6
                henkilöä.
              </InfoLine>
            </div>
          </div>

          <div className='directions-card'>
            <div className='directions-content'>
              <p>Siirtymä: Crazyltä Goforelle (klo 17:00 jälkeen)</p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Puutarhakatu+21+Tampere&destination=Peltokatu+34+Tampere&travelmode=walking'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kävelyreitti Goforelle
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>17:15</div>
            <div className='event-content'>
              <h3>Ruokaa ja sauna Goforella</h3>
              <InfoLine marker='🕒'>Klo 17:15 alkaen</InfoLine>
              <LocationLine>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Peltokatu+34+33100+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Goforen pääkonttori, Peltokatu 34, 33100 Tampere
                </a>
              </LocationLine>
              <InfoLine marker='◇'>
                A-torni, 4. kerros (rautatieaseman vieressä)
              </InfoLine>
              <InfoLine marker='◇'>
                Yhteistä ruoanlaittoa, saunomista ja grillausta.
              </InfoLine>
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

export default EventPage2026;
