import MainPage from "./MainPage";
import "./Login.css";
import { HiPhone, HiOutlineMail } from "react-icons/hi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login() {
  return (
    <div id="TopHeader">

      <div id="Login">
          <ul id="ul_loginInfo">
            <li><HiPhone id="phone_img" /> 32137175</li>
            <li> <HiOutlineMail id="mail_img" /><a href="mailto:info@znautocenter.dk">info@znautocenter.dk</a></li>
          </ul>
        <Link to="/MainPage" id="loginForside"><button id="loginButton">Login</button></Link>
      </div>


    </div>
  );
}



function Home() {
  return <h2>MainPage</h2>;
}


