

import kontakt from "../Kontakt/Kontakt";
import ViTilbyder from "../ViTilbyder/ViTilbyder";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Header(){
  return (
  
    <div id="header">
      
      
      <div id="Navigation">
        <div id="logo"><img src="zn-autocenter-logo.png"></img></div>
        <nav>
          <ul id="forside_ul">
            <li id="forside_il"><Link to="/">FORSIDE</Link></li>
            <li id="forside_il"><Link to="/ViTilbyder"> VI TILBYDER</Link> </li>
            <li id="forside_il"><a href="https://booking.au2booking.dk/workshop/9f4d42beac6a470fba9c2e2a0580edf5/welcome">BOOK TID</a></li>
            <li id="forside_il"><Link to="/Kontakt"> KONTAKT</Link> </li>

          </ul>
        </nav>
      </div>

    </div>
  );
}


function Home() {
  
  return <h2>ViTilbyder</h2>;
  
}





