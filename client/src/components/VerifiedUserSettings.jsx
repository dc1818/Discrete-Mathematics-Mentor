import '../App.css';
import {useEffect, useState} from "react";
import UserSettingsModal from '../components-sub/UserSettingsModal.jsx';
import NavBar from '../components-sub/NavBar.jsx';



export default function VerifiedUserSettings(){




    return(
        <>
            <NavBar/>
                <UserSettingsModal/>
            <div></div>


        </>


    );

}