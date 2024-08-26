import {Link} from "react-router-dom";


export default function ProjectList(){

    const githubProjects = [
        "https://github.com/user/project-alpha",
        "https://github.com/user/project-beta",
        "https://github.com/user/project-gamma",
        "https://github.com/user/project-delta",
        "https://github.com/user/project-epsilon"
    ];

    return(
        <ul className={'flex flex-col gap-16 mt-16 text-3xl text-blue-400'}>
            {githubProjects.map((project, index)=>(
                <li className={'border rounded-md bg-[linear-gradient(to_bottom,_darkslategray,_black)]'} key={index}>
                    <Link to={''}>{project}</Link>
                </li>
            ))}
        </ul>
    );


}