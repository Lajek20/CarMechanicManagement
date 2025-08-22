import { isCompositeComponent } from "react-dom/test-utils";
import Footer from "./Forside/Footer";
import Header from "./Forside/Header";
import Login from "./Forside/Login";
import UnderHeader from "./Forside/UnderHeader";


export default function Home() {
  return (
  <div>
    <Login />
    <Header />
    <UnderHeader/>
    <Footer/>
  </div>)
}