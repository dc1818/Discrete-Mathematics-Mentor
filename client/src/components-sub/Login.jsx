import "../App.css";
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Login() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const serverPort = 'http://localhost:5001';
        const [loggedIn, setLoggedIn] = useState(false);
        const [logInMessage, setLogInMessage] = useState("");
        const navigate = useNavigate();

        const handleMessage = (message)=>{
            setLogInMessage(message);
            setTimeout(()=>{
                setLogInMessage("");
            }, 2000);
        }


            const handleSubmit = (event) => {
                event.preventDefault();
                fetch(`${serverPort}/users/checkLogin`,
                    {
                            method: "POST",
                            headers: {
                                     'Content-Type' : 'application/json',
                                    },
                            body: JSON.stringify({
                                username: username,
                                password: password,
                            }),
                        }
                    )
                    .then(async response => {
                        if (!response.ok) {
                            throw new Error("There was a problem trying to log in.");
                        }
                        const data = await response.json();
                        setLoggedIn(data.success);
                        sessionStorage.setItem('userid', data.userId);

                        if(loggedIn){
                            sessionStorage.setItem("username", username);
                            setLogInMessage("Login Successful");
                            navigate('/');
                        }


                    })
                    .catch((error) =>{
                        handleMessage('Login Error', error);
                    });

            };

        const handleCancel = () => {
            setUsername('');
            setPassword('');
        };

        return (

            <div className={'flex flex-col m-auto text-center h-auto w-auto items-center align-middle mt-64 border' +
                            'back'}>
                <header className={'align-middle items-center m-2 br ' +
                    'w-64 p-2 border rounded-lg'}>
                    <h1 className={''}>
                        <span className={'text-red-400 shadow '}>Login</span>
                    </h1>
                </header>
                <section className={'login_section_1'}>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div>
                            <label className={'mr-2 p-1'} htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder={'username'}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className={'mr-2 p-1'} htmlFor="password">Password:</label>
                            <input
                                placeholder={'password'}
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={'login-button-div'}>
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                        <div>
                            <Link className={'hover:text-blue-400'} to={'/RegisterPage'}>Register</Link>
                        </div>
                    </form>
                    <div>
                        <h1 className={'text-3xl p-2 m-2'}>{logInMessage}</h1>

                    </div>
                </section>
            </div>


        );

}