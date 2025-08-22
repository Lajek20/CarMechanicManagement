import Footer from "../Forside/Footer.js";
import Header from "../Forside/Header.js";
import "./ViTilbyder.css";
export default function ViTilbyder() {
  return (
    <div>      <Header />

      <div class="container">
        <div class="info">

          <div class="column">
            <div class="vi_tilbyder_header">

              <h1 class="vi_tilbyder_title">Autoværksted</h1>
              <p class="vi_tilbyder_paragraph"> Renovering af gearkasseog renovering af motor </p>

            </div>
            <h2>Salg og montering af</h2>
            <ul id="vi_tilbyder_ul">
              <li >  Aircondition</li>
              <li >  Audiomontering</li>
              <li >  Autoalarmer</li>
              <li >  Autofilm</li>
              <li >  Autoglas</li>
              <li >  Autokølere</li>
              <li >  Autostereo</li>
              <li >  Dækafbalancering</li>
              <li >  Dækmontering</li>
              <li >  Elanlæg</li>
              <li >  Elektronik</li>
              <li >  Elruder</li>
              <li >  GPS tyverisikring (satelitovervågning)</li>
              <li >  Klargøring til syn</li>
              <li >  Klimaanlæg</li>
              <li >  Lakskader</li>
              <li >  Mobiltelefon</li>
              <li >  Motorstyring</li>
              <li >  Navigationsanlæg</li>
              <li >  Tuning</li>
            </ul>
          </div>
          <div id="services" class="column">
            <h2>Services</h2>
            <ul id="vi_tilbyder_ul">
              <li>  2-hjulsudmåling</li>
              <li>  4 gas måling</li>
              <li>  4-hjulsudmåling</li>
              <li>  Autohjælp</li>
              <li>  Autolakering</li>
              <li>  Autoopretning</li>
              <li>  Autopolstring</li>
              <li>  Autotransport</li>
              <li>  Bilpleje</li>
              <li>  Bremseprøvestand</li>
              <li>  Centrallås</li>
              <li>  Fejlkodelæsning</li>
              <li>  Motorprøvestand</li>
              <li>  Olieskift</li>
              <li>  Rustbeskyttelse</li>
              <li>  Serviceeftersyn</li>
              <li>  Skadeservice</li>
              <li>  Speciel indretning</li>
              <li>  Undervognsbehandling</li>
              <li>  Værkstedsbil /lånebil</li>
            </ul>
          </div>
        </div>
        <div class="info">
          <div class="column">
            <h2>Reparation af</h2>
            <ul id="vi_tilbyder_ul">
              <li>  Biler</li>
              <li>  Elbiler</li>
              <li>  Lastbiler</li>
              <li>  Dæk og fælge</li>
            </ul>
          </div>
          <div class="column">
            <h2>Faciliteter</h2>
            <ul id="vi_tilbyder_ul">
              <li>  Dækhotel</li>
              <li>  Skadecenter</li>
              <li>  Ventestue</li>
            </ul>
          </div>
        </div>
        <div class="info">
          <div class="column">
            <h2>Salg af</h2>
            <ul id="vi_tilbyder_ul">
              <li>  Biler</li>
              <li>  Dæk og fælge</li>
            </ul>
          </div>
          <div class="column">
            <h2>Udlejning</h2>
            <ul id="vi_tilbyder_ul">
              <li>  Bil</li>
              <li>  Varebil</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}



