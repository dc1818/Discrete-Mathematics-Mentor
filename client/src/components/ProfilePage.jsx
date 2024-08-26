import '../App.css';
import {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import {peopleList} from "../people.js";
import {PencilIcon} from "@heroicons/react/16/solid/index.js";
import BlogDataForm from "../components-sub/BlogDataForm.jsx";
import Blogs from "../components-sub/Blogs.jsx";
import ProjectList from "../components-sub/ProjectList.jsx";
import Qualifications from "../components-sub/Qualifications.jsx";




export default function ProfilePage(){

    const {URLName} = useParams();
    const fullName = "" + URLName.replaceAll("_", " ");
    let fName = fullName.split(" ")[0].toLowerCase();
    let lName = (fullName.indexOf(" ") !== -1 ? fullName.split(" ")[1].toUpperCase() : "");
    const [person, setPerson] = useState('');
    const [cert1, setCert1] = useState('');
    const [cert2, setCert2] = useState('');
    const [myPage, setMyPage] = useState(false);
    const [isBlogEdit, setIsEditBlog] = useState(false);






    const isMyProfile = ()=>{
        if(sessionStorage.getItem('userid') !== null){
            const userid = sessionStorage.getItem('userid');
            fetch(`http://localhost:5001/users/users/${userid}`)
                .then(response =>{
                    if(!response.ok){
                        throw new Error(`Ooops, something went wrong calling ${userid}`)
                    }
                    return response.json();
                })
                .then(data => {
                    const userLoggedIn = `${data.firstname}_${data.lastname}`;
                    if(userLoggedIn === URLName){
                        setMyPage(true);
                    }else{
                        setMyPage(false);
                    }
                })
                .catch((error) => { console.error(error)});
        }
    }

    useEffect(() => {
        isMyProfile();
    for(const p of peopleList){
        if(fullName === p.name){
            setPerson(p);
            setCert1(p.certifications[0]);
            setCert2(p.certifications[1]);
        }
        }
    },[fullName]);


    let image = "/" + person.propic;
    let tImage = "/twitter.png";
    let lImage = "/linkedin.png";
    let gImage = "/github.png";

    const handleBlogEdit = () =>{
        setIsEditBlog(!isBlogEdit);
    }

    return(
        <div className={'flex flex-col h-screen bg-gradient-to-br'}>

            <header>
                <div className={'absolute flex left-4 top-4 h-12 w-32 z-10 items-center align-middle p-4 m-2'}>
                    <Link to={'/'}> <span className={'text-blue-400 text-3xl'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-12">
                            <path fillRule="evenodd"
                            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                             clipRule="evenodd"/>
                            </svg>

                    </span></Link>
                </div>
                <div className={'flex flex-row w-full h-70 text-center items-center bg-black place-content-around'}>
                    <div className={'flex flex-col items-center'}>
                        <div className={'flex flex-row text-gray-200 font-mono content-around'}>
                        <h1 className={'text-5xl font-light tracking-tight'}>{fName}</h1>
                            <h2 className={'text-7xl font-extrabold leading-normal tracking-wide'}> {lName}</h2>
                        </div>
                        <div className={'flex flex-row place-content-between'}>
                            <div className={'border-2 border-gray-200 rounded w-auto h-auto'}><a href={person.twitterx}><img
                                src={tImage} alt={'X'} width="50px" height="50px"/></a></div>
                            <div className={'w-1/2'}></div>
                            <div className={'border-2 border-gray-200 rounded w-auto h-auto'}><a href={person.linkedin}><img
                                src={lImage} alt={'in'} width="50px" height="50px"/></a></div>
                            <div className={'w-1/2'}></div>
                            <div className={'border-2 border-gray-200 rounded w-50 h-50'}><a href={person.github}><img
                                src={gImage} alt={'git'} width="50px" height="50px"/></a></div>
                        </div>
                    </div>
                    <div className={'flex flex-row content-around'}>
                        <div className={'min-w-64 min-h-64 border bg-amber-200'}><img src={image} className={'text-5xl align-middle items-center mt-8'} alt={`${fName.substring(0,1).toUpperCase()} ${lName.substring(0,1)}`} style={{borderRadius: "50%"}}/></div>
                    </div>
                    <div className={'flex flex-col text-xl text-gray-200 font-mono'}>
                        <span>- {cert1}</span>
                        <span>- {cert2}</span>
                    </div>
                    <div className={'w-1/10'}></div>
                </div>
            </header>
            <div className={'flex flex-cols-3 w-full h-[500px] items-stretch text-2xl text-gray-200 text-center font-mono'}>
                <div
                    className={'flex flex-col border border-gray-200 rounded-3xl w-1/3 m-1 items-center place-content-evenly hover:text-yellow-300'}>
                        <div
                            className={'flex self-start content-around m-8 text-3xl font-black font-sans tracking-widest'}>Education
                        </div>
                    <div className={'flex content-around m-8 text-left'}>{person.education}</div>
                </div>
                <div
                    className={'flex flex-col border border-gray-200 rounded-3xl w-1/3 m-1 items-center place-content-evenly hover:text-yellow-300'}>
                    <div
                        className={'flex self-center content-around m-8 text-3xl font-black font-sans tracking-widest'}>Biography
                    </div>
                    <div className={'flex content-around m-8'}>{person.bio}</div>
                </div>
                <div
                    className={'flex flex-col border border-gray-200 rounded-3xl w-1/3 m-1 items-right place-content-evenly hover:text-yellow-300'}>
                    <div
                        className={'flex self-end content-around m-8 text-3xl font-black font-sans tracking-widest'}>Work
                        History
                    </div>
                    <div className={'flex content-around m-8 text-right'}>{person.workhistory}</div>
                </div>
            </div>
                <section data-id={'blog section'} className={'grid grid-cols-3 gap-2 h-full'}>
                    <div  className={'border rounded-xl flex flex-col items-left align-top m-4 p-4 min-w-[33%] bg-[linear-gradient(to_bottom,_darkslategray,_white)]'}>
                        <h1 className={'text-3xl text-amber-200'}>Qualifications</h1>
                        <Qualifications/>
                    </div>
                    <div className={'border rounded-xl flex flex-col items-center m-4 p-4 min-h-16 min-w-[33%] bg-[linear-gradient(to_bottom,_darkslategray,_white)] '}>
                        <div className={'flex flex-row p-1 m-1 mb-16 gap-4'}>
                            <h1 className={'text-3xl text-amber-200'}>
                                BLOG
                                <hr/>
                            </h1>
                            {myPage && <div className={'h-8 w-8 align-middle items-center'}><PencilIcon onClick={handleBlogEdit} className={'cursor-pointer'}/></div>}
                                       </div>
                        {isBlogEdit && <BlogDataForm />}
                        <div className={'m-4'}>
                            <Blogs/>
                        </div>
                    </div>
                    <div
                        className={'border rounded-xl flex flex-col items-center align-middle m-4 p-4 min-w-[33%] bg-[linear-gradient(to_bottom,_darkslategray,_white)] '}>
                        <h1 className={'text-3xl text-amber-200'}>GitHub Projects</h1>
                        <div className={'flex flex-col'}>
                            <ProjectList/>
                        </div>
                    </div>
                </section>
        </div>
    );


}