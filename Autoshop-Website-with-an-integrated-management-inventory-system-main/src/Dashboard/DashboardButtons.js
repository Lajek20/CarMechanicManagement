import  "./DashboardButtons.css";
import AddButtonForm from "./AddButtonForm";
import SearchbarComponent from './SearchbarComponent';
export default function DashboardButtons() {
    return (
      <div id= "DashboardButtons">
        
         {/* <button type="submit" formmethod="post">Tilføj</button> */}
         <AddButtonForm/>
         <SearchbarComponent/>
         <button type="submit">Rediger</button>
         <button type="submit">Fjern</button>
      </div>
    )
   }

