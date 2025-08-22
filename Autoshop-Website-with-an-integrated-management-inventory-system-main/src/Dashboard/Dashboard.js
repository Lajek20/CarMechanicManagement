import { useState } from "react/cjs/react.development";
import "./Dashboard.css";
import DashboardButtons from "./DashboardButtons.js";
import RimTable from "./Inventory/RimTable";
import TierTable from "./Inventory/TierTable";
import ShelfTable from "./Inventory/ShelfTable";
import UserTableRender from "./User/UserTableRender";


export default function Dashboard() {
    const [tier, setTier] = useState(false);
    const [rim, setRim] = useState(false);
    const [Shelf, setShelves] = useState(false);
    const [User, setUsers] = useState(false);
    // axios get for getting latest date
    console.log("isAdmin", localStorage.getItem("isAdmin"));
    return (
        <div id="Dashboard">

            <div id="SidebarMenu">
                <nav class="sidebar">
                    <div class="logo2"><img src="Group.svg"></img></div>
                </nav>


                <a>
                    <span class="icon"><ion-icon name="home-outline">
                    </ion-icon></span>
                    <span class="title">Hjem</span>
                </a>

                <a href="#" onClick={() => { setTier(true); setRim(false); setShelves(false); setUsers(false);}}>
                    <span class="icon"></span>
                    <span class="title">Dæk</span>
                </a>

                <a href="#" onClick={() => { setRim(true); setTier(false); setShelves(false); setUsers(false);}}>
                    <span class="icon"></span>
                    <span class="title">Fælge</span>
                </a>
{/*
                    <a href="#" onClick={() => { setShelves(true); setRim(false); setTier(false); setUsers(false);}}>
                        <span class="icon"></span>
                        <span class="title">Hylder</span>
                    </a> */}


               {localStorage.getItem("isAdmin") === "true"? <a href="#" onClick={() => { setUsers(true); setShelves(false); setRim(false); setTier(false); }}>
                    <span class="icon"></span>
                    <span class="title">Brugeradministration</span>
                </a> : null}

                <a href="#" onClick={() => {
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("username");
            localStorage.removeItem("isAdmin");
            window.location.pathname = "/";
            }}>
                    <span class="icon"></span>
                    <span class="title">Log Ud</span>
                </a>
            </div>

            <div id="TableButtonWrapper">

                {tier ? <TierTable/>: null}

                {rim ? <RimTable/> : null}

                {Shelf ? <ShelfTable/> : null}

                {User ? <UserTableRender/> : null}

            </div>
        </div>


    );
}

