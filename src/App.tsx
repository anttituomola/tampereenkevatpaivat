import './App.css';

function App() {
  return (
    <div className='app-container'>
      <header>
        <h1>Tampereen Kevätpäivät™</h1>
        <p className='date'>10.5.2025</p>
      </header>

      <main>
        <section className='intro'>
          <div className='logo-container'>
            <img
              src='/tampereen-kevatpaivat-2025.png'
              alt='Tampereen Kevätpäivät™ 2025 logo'
              className='event-logo'
            />
          </div>
          <h2>Tervetuloa!</h2>
          <p>
            Tampereen Kevätpäivät™ on tekosyy tavata ystäviä ja uusia ystäviä,
            sekä nauttia Maailman Saunapääkaupungin keväästä hyvässä seurassa.
            Tule, ja tuo ystäväsikin.
          </p>
        </section>

        <section className='schedule'>
          <h2>Aikataulu</h2>

          <div className='event-card'>
            <div className='event-time'>9:30</div>
            <div className='event-content'>
              <h3>Kokoontuminen: Raholan Kympin lähtöpaikka</h3>
              <div className='info-item'>
                <span className='icon'>🕒</span>
                <p>Klo 9:30</p>
              </div>
              <p className='location'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Tuomarinkatu+7+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Tesoman jäähallin parkkipaikka (Tuomarinkatu 7, Tampere)
                </a>
              </p>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>10:00</div>
            <div className='event-content'>
              <h3>Raholan Kymppi -juoksukilpailu</h3>
              <div className='info-item'>
                <span className='icon'>🕒</span>
                <p>Klo 10:00</p>
              </div>
              <div className='info-item'>
                <span className='icon'>🏃</span>
                <p>Ilmoittautuminen 5.5.2025 asti, tai paikan päällä.</p>
              </div>
              <div className='info-item'>
                <span className='icon'>💰</span>
                <p>Hinta: 15€ ennakkoon, 20€ paikan päällä.</p>
              </div>
              <div className='info-item'>
                <span className='icon'>🔗</span>
                <p>
                  <a
                    href='http://www.teamrahola.fi/p/kiihkeaa-kisatunnelmaa-ja-liikunnan.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Raholan Kymppi
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='directions-card'>
            <div className='directions-icon'>🚌</div>
            <div className='directions-content'>
              <p>Tesomalta keskustaan</p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Tuomarinkatu+7+Tampere&destination=Nalkalankatu+11+Tampere&travelmode=transit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Reittiohjeet tähän siirtymään
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>13:00</div>
            <div className='event-content'>
              <h3>Saunalautta</h3>
              <div className='info-item'>
                <span className='icon'>🕒</span>
                <p>Klo 13:00 - 15:00</p>
              </div>
              <p className='location'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Nalkalankatu+11+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lähtö: Nalkalankatu 11, ravintola Kuuman läheltä
                </a>
              </p>
              <div className='info-item'>
                <span className='icon'>💰</span>
                <p>Hinta: ~25€/henkilö.</p>
              </div>
              <div className='info-item'>
                <span className='icon'>⚠️</span>
                <p>Vaatii ennakkoilmoittautumisen.</p>
              </div>
              <div className='info-item'>
                <span className='icon'>👥</span>
                <p>Osallistujamäärä rajoitettu 12 henkilöön.</p>
              </div>
              <div className='info-item'>
                <span className='icon'>🍽️</span>
                <p>
                  Kevyt lounas tarjolla. Grilli käytössä, voit tuoda omia
                  grillattavia.
                </p>
              </div>
              <div className='info-item'>
                <span className='icon'>🔗</span>
                <p>
                  <a
                    href='https://www.huvilalautta.fi/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    HuviLautta
                  </a>
                </p>
              </div>
              <div className='registration-button-container'>
                <a
                  href='https://docs.google.com/forms/d/e/1FAIpQLSeFw7-EoftX6Z-qYOesI_jg7gYEmYrS3ep168KwgRMvbuLKlw/viewform?usp=header'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='registration-button'
                >
                  Ilmoittaudu
                </a>
              </div>
            </div>
          </div>

          <div className='directions-card'>
            <div className='directions-icon'>🚌</div>
            <div className='directions-content'>
              <p>Laukonsillalta minigolfiin</p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Nalkalankatu+11+Tampere&destination=Koulukatu+28+Tampere&travelmode=transit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Reittiohjeet tähän siirtymään
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>16:00</div>
            <div className='event-content'>
              <h3>Minigolf-turnaus</h3>
              <div className='info-item'>
                <span className='icon'>🕒</span>
                <p>Klo 16:00</p>
              </div>
              <p className='location'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Koulukatu+28+Eteläpuisto+33200+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Koulukadun Minigolf, Koulukatu 28, Eteläpuisto, 33200 Tampere
                </a>
              </p>
              <div className='info-item'>
                <span className='icon'>💰</span>
                <p>Hinta: ~10€/henkilö.</p>
              </div>
              <div className='info-item'>
                <span className='icon'>🔗</span>
                <p>
                  <a
                    href='https://koulukadunminigolf.fi/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Koulukadun Minigolf
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='directions-card'>
            <div className='directions-icon'>🚌</div>
            <div className='directions-content'>
              <p>Minigolfista Goforelle</p>
              <div className='directions-link'>
                <a
                  href='https://www.google.com/maps/dir/?api=1&origin=Koulukatu+28+Tampere&destination=Peltokatu+34+Tampere&travelmode=transit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Reittiohjeet tähän siirtymään
                </a>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>18:30</div>
            <div className='event-content'>
              <h3>Grillijuhlat ja näköalasauna</h3>
              <div className='info-item'>
                <span className='icon'>🕒</span>
                <p>Klo 18:30 - 23:00</p>
              </div>
              <p className='location'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Peltokatu+34+33100+Tampere'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Goforen pääkonttori, GO21, Peltokatu 34, 33100 Tampere
                </a>
              </p>
              <div className='info-item'>
                <span className='icon'>🏢</span>
                <p>Gofore, A-torni, 4. kerros (rautatieaseman vieressä)</p>
              </div>
              <div className='info-item'>
                <span className='icon'>💰</span>
                <p>Hinta: 0€</p>
              </div>
              <div className='info-item'>
                <span className='icon'>🍽️</span>
                <p>
                  Salaattibuffet tarjolla. Grilli käytössä, tuo omat proteiinit
                  grillattavaksi.
                </p>
              </div>
            </div>
          </div>

          <div className='event-card'>
            <div className='event-time'>23:00→</div>
            <div className='event-content'>
              <h3>Jatkot</h3>
              <div className='info-item'>
                <span className='icon'>🕒</span>
                <p>Klo 23:00 alkaen</p>
              </div>
              <div className='info-item'>
                <span className='icon'>🎉</span>
                <p>Vapaasti valitussa lokaatiossa niille, jotka jaksavat!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='info'>
          <div className='info-card'>
            <h3>Yleistä tietoa</h3>
            <div className='info-item'>
              <span className='icon'>💵</span>
              <p>
                Tapahtumat toimivat pääosin omakustanneperiaatteella. Tulet
                mihin pääset ja maksat itsesi sisään.
              </p>
            </div>
            <div className='info-item'>
              <span className='icon'>📝</span>
              <p>
                Poikkeuksena saunalautta, joka vaatii ennakkoilmoittautumisen.
              </p>
            </div>
            <div className='info-item'>
              <span className='icon'>🍺</span>
              <p>
                Jokainen huolehtii omista juomistaan tapahtuman aikana. Muille
                kannattaa tarjota omiaan, koska se on erinomainen tapa tutustua
                uusiin ihmisiin!
              </p>
            </div>
          </div>

          <div className='info-card'>
            <h3>Järjestäjä</h3>
            <div className='info-item'>
              <span className='icon'>👤</span>
              <p>Antti Tuomola</p>
            </div>
            <div className='info-item'>
              <span className='icon'>✉️</span>
              <p>
                <a href='mailto:antti@anttituomola.fi'>antti@anttituomola.fi</a>
              </p>
            </div>
            <div className='info-item'>
              <span className='icon'>📞</span>
              <p>
                <a href='tel:+358456798818'>+358 45 679 8818</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Tampereen Kevätpäivät™</p>
      </footer>
    </div>
  );
}

export default App;
