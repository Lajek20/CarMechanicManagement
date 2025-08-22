import "./Underheader.css";
import kontakt from "../Kontakt/Kontakt";
import {
    Link
  } from "react-router-dom";
export default function UnderHeader() {
    return (
        <div>
            <div id="header-image-menu">
                <img src="teknicar-daek-forside.png"></img>
            </div>
            <div id="background-underheader">
                <div id="Underheader">
                    <h3>Få et uforpligtende tilbud her - med 100% prisgaranti</h3>
                    <Link to="./Kontakt" id="underheader_linker"><button>FORSPØRG OM PRIS</button></Link> 
                </div>
            </div>
            <div id="Fordele">
                <h2>FORDELE MED ZN AUTOCENTER</h2>
            </div>
            <hr id="underheader-line_title"></hr>
            <div id="FordeleTekst">
                <p id="fordele-paragraph"> <center>Det bør være nemt, gennemskueligt og bekvemt, at få repareret sin bil. <br></br> Derfor kan vi tilbyde dig både en låne bil imens vores mekanikere reparerer og servicerer din bil. <br></br>Så kan du stadig også nå at komme på arbejde og hente dine børn fra børnehaven. </center></p>
            </div>
            <div class="column" >
                <div class="underheader-rows">
                    <img id="Main_Image" src="Tid.svg"></img>

                    <img id="Main_Image" src="Pris.svg"></img>

                    <img id="Main_Image" src="Service.svg"></img>
                </div>

                <div class="underheader-rows">
                    <h4 id="underheader-text">Spar tid <hr id="underheader-line"></hr></h4>
                    <h4 id="underheader-text">Gode priser <hr id="underheader-line"></hr></h4>
                    <h4 id="underheader-text"> Service i topklasse <hr id="underheader-line"></hr></h4>
                </div>

                <div class="underheader-rows">
                    <p id="underheader-text">123</p>
                    <p id="underheader-text">ddd</p>
                    <p id="underheader-text">dddddede</p>
                </div>

            </div>

            <div id="ViReparerAlleBiler">
                <div id="ViReparerAlleBiler2"><img src="fiat-periyodik-bakim-1.jpg"></img></div>

                <div id="ViReparerAlleBiler3">
                    <h2 id="under-header-h2">Vi reparerer alle biler</h2>
                    <hr id="underheader-line"></hr>
                    <p id="under-header-text">
                        ZN Autocenter er dit lokale Teknicar værksted i Glostrup.
                        Hos ZN Autocenter tilbyder vi reparation og service af alle biler, uanset mærke og årgang.
                        Hos os er kvaliteten i fokus. For at sikre den bedste kvalitet er vi løbende på efteruddannelse,
                        så vi kan reparere og servicere selv helt nye biler - også indenfor garanti perioden.

                        Ydermere vælger vi altid de bedste reservedele til din bil, så vi kan tilbyde dig 3 års garanti -
                        dette gælder naturligvis også på det udførte arbejde.
                        På værkstedet står vi klar til at hjælpe dig og din bil. Så kontakt os for et tilbud.
                    </p>
                </div>

                <div></div>

            </div>

            <div class="container">
                <div class="partners">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm text-center" id="partner">
                            <a href="https://www.resursbank.dk/" title="Resurs Bank" target="_blank" class="partner">
                                <img src="resursbank_logo.png?height=50" alt="Resurs Bank" class="img-fluid mh-100"></img>
                            </a>

                        </div>
                        <div class="col-sm text-center d-none d-sm-block" id="partner">
                            <a href="https://www.caccertificeret.dk/" title="CAC Certificeret Sort" target="_blank" class="partner">
                                <img src="cac_cert_logo-black.png?height=50" alt="CAC Certificeret Sort" class="img-fluid mh-100"></img>
                            </a>

                        </div>
                        <div class="col-sm text-center d-none d-sm-block" id="partner">
                            <a href="https://www.teknicar.dk/" title="Teknicar" target="_blank" class="partner">
                                <img src="teknicar-logo.png?height=50" alt="Teknicar" class="img-fluid mh-100"></img>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}