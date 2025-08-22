import Emailform from "./Emailform.js";
import Footer from "../Forside/Footer.js";
import Header from "../Forside/Header.js";
import "./Kontakt.css";
export default function kontakt() {
  return (
    <div>

      <Header />
      <div class="top-side">
        <div class="info">
          <div>
            <div class="kontaktinfo">
              <h2>Kontakt Info</h2>
            </div>
            <address>
              <b>ZN Autocenter Aps</b>
              <p>Semdeland 1C </p>
              <p>2600 Glostrup </p>
              <p>CVR 32311563 </p>
            </address>


            <div id="telefon">
              <p>
                Telefon:
                <a href="tel: 32 13 71 75"> 32 13 71 75</a>
              </p>
              <p>
                E-mail:
                <a href="mailto:info@znautocenter.dk">  info@znautocenter.dk</a>
              </p>
            </div>

            <div class="column">
              <h2> Åbningstider </h2>

              <p> Mandag - Fredag: 08:00 - 17:00</p>
              <p>Lørdag: 10:00 - 14:00</p>
              <p>Søndag: Lukket</p>
              <p>Helligdage: Lukket</p>
            </div>
            <div class="column">
              <div id="Container">
                <Emailform />
              </div>
            </div>
          </div>
        </div>
        <div class="googlemaps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.668474800289!2d12.384712415825279!3d55.677364980533206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465250c81482a8c3%3A0xd925dd79131adc91!2sSmedeland%201C%2C%202600%20Glostrup!5e0!3m2!1sda!2sdk!4v1634906726704!5m2!1sda!2sdk"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
