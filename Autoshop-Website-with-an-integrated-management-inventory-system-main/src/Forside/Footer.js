import "./Footer.css";
export default function Footer() {
  return (

    <div id="Footer">


      <div class="details-box">
        <center>
          <h4>Åbningstider</h4>
          <p>Alle hverdage: {'\n'}08:00 - 17:00</p>
          <p>Lørdag: {'\n'}08:00 - 14:00</p>
          <p>Søndag og helligdage: {'\n'}Lukket</p>
        </center>
      </div>

      <div class="details-box">
        <center>
          <h4>Kontakt Os</h4>
          <p>ZN Autocenter ApS</p>
          <p>Smedeland 1 C</p>
          <p>2600 Glostrup</p>
          <p>CVR 32311563</p>
          <p>Tlf: 32137175</p>
          <p>Email: info@znautocenter.dk</p>
          <p>Website: www.znautocenter.dk</p>
        </center>
      </div>

      <div id="Map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.668474800289!2d12.384712415825279!3d55.677364980533206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465250c81482a8c3%3A0xd925dd79131adc91!2sSmedeland%201C%2C%202600%20Glostrup!5e0!3m2!1sda!2sdk!4v1634906726704!5m2!1sda!2sdk"></iframe>
      </div>

      <div class="break"></div>

      <div class="text-container">
        <center><p>Vi er en del af den frie værkstedskæde Teknicar</p></center>
        <center><p>I forbindelse med klager eller tvist, henvises til ankenævnet for biler - www.bilklage.dk</p>
        </center>
      </div>


    </div>


  );
}


