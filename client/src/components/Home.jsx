import '../App.css';
import CardGrid from "./CardGrid.jsx";
import AcademicCapIcon from "../Icons.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {peopleList} from '../people.js';
import websiteLogo from '../assets/websitelogo.jpg';
import { loadUsers } from "../LoadUsers.jsx";
import {BriefcaseIcon} from "@heroicons/react/16/solid/index.js";
import UserSettingsModal from "../components-sub/UserSettingsModal.jsx";
import Button from "@mui/material/Button";

export default function Home() {


    const [user , setUser] = useState('');
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [profileAddress, setProfileAddress] = useState('');
    const [id, setId] = useState('');
    const [isUserSettings, setIsUserSettings] = useState(false);
    const idCheck = () =>{
        if(sessionStorage.getItem('userid') !== undefined || ""){
            setId(sessionStorage.getItem('userid'));
        }
    }

    useEffect(() => {
       idCheck();
       if(id !== null || ''){
            fetch(`http://localhost:5001/users/users/${id}`)
                .then(res =>{
                    if(!res.ok){
                        throw new Error("New Error");
                    }
                    return res.json();
                })
                .then(data =>{
                   setProfileAddress(`/user/${data.firstname}_${data.lastname}`)
                })
                .catch((error) =>{ console.error(error)});
        }

    }, [id]);


       useEffect(() => {
            const postUsers = async () =>{
               for(const person of peopleList){
                   try{
                       await loadUsers(person);
                   }catch(error){
                       console.error('Failed ot load user: ', error);
                   }
               }
           }
           postUsers().catch(error =>{console.log(error)});
    }, []);

    useEffect(() => {
        if(sessionStorage.getItem('userid') !== null){
             setUser(sessionStorage.getItem('username'));
             setUserLoggedIn(true);
        }
    }, []);

    const handleUserSettings = ()=>{
        setIsUserSettings(!isUserSettings);
    }
    const handleClose = ()=>{
        setIsUserSettings(false);
    }


    return(
        <div className={'flex flex-col m-32'}>
            {isUserSettings && <UserSettingsModal onClose={handleClose}/>}

            <header className={'flex flex-1 h-32 w-full'}>
                <div className="relative flex flex-row w-full h-auto p-2 m-1 rounded-xl align-top">
                    <div className={'flex flex-row h-16 w-32 '}>
                        <Link className={'mr-4 mt-1'} to={'/login'}>
                            <AcademicCapIcon className="absolute top-0 right-0"/>
                        </Link>
                        <div>
                            {(user !== "") && <h6 className={'mt-1'}>Logged In: {user}</h6>}
                        </div>
                    </div>
                    {userLoggedIn && <div className={'flex flex-row space-x-3 w-64 h-8 m-0 ml-12 p-1 rounded-md drop-shadow-lg hover:drop-shadow-sm'}>
                        <Link className={'bg-green-800 hover:b-green-400 rounded-md p-1 m-1 w-24 h-8'} to={profileAddress}>My Profile</Link>
                       <Button className={'text-black'} onClick={handleUserSettings}><BriefcaseIcon/></Button>

                    </div>}
                </div>
                <div className={"flex flex-col items-center logodiv"} style={{ background: 'var(--Primary-Background)'}}>
                    <img
                        src={websiteLogo}
                        alt="Website Logo"
                        className="w-32 rounded-lg"
                        style={{ paddingBottom: '5px' }}
                    />
                    <h1 className="text-4xl text-white font-bold text-center mb-8 relative" style={{
                        textShadow: `
                  2px 4px 0 #000, 
                  -2px -2px 0 #000, 
                  2px -2px 0 #000, 
                  -2px 2px 0 #000
                `
                    }}>

                        <span className="relative z-10">Welcome to Capstone</span>
                        <span
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-5 transform scale-110"
                            aria-hidden="true"
                        ></span>
                    </h1>

                </div>

            </header>
            <section className={'grid grid-cols-[1fr, 1fr, 1fr]'}>
                <div className={'flex flex-col border'}></div>
                <div className={'flex flex-col justify-center items-center'}>
                    <CardGrid/>
                </div>
                <hr/>
                <div className={''}>
                    <h1>CapStone Project CMSC495<br/>
                        Contributors @Angelo @Dalton @Devon @Devon @William @Anthony @Alan
                    </h1>
                </div>
            </section>
        </div>
    );

}
