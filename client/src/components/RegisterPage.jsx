import {useState} from "react";
import {Link, redirect} from 'react-router-dom';



export default function RegisterPage(){
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [email, setUserEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const home_url = '/';
    const serverPort = 'http://localhost:5001/users/register';
    const [user, setUser] = useState('');

    const validatePassword = (password) => {
        const lengthCheck = password.length >= 6 && password.length <= 12;
        const upperCaseCheck = /[A-Z]/.test(password);
        const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return lengthCheck && upperCaseCheck && specialCharCheck;
    };


    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (!validatePassword(newPassword)) {
            setErrorMessage('Password must be 6-12 characters long, contain at least one uppercase letter, and one special character.');
        } else {
            setErrorMessage('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword !== password) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validatePassword(password) && password === confirmPassword) {
            setSuccessMessage('Password is valid and passwords match!')
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
            setSuccess(true);

            //Post to /register backend
            const response = await fetch(serverPort, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    firstName,
                    lastName,
                    password
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const userPayload = await response.json();
            console.log(userPayload);
            sessionStorage.setItem('username', JSON.stringify(userPayload.username));
            //made sure to save id to session storage it only saved the username before
            sessionStorage.setItem("id",JSON.stringify(userPayload.userid));
            setUser(sessionStorage.getItem('username'));
            return redirect(home_url);

        } else {
            alert('Please ensure the passwords meet the criteria and match.');
        }
    }
    const handleCancel = ()=>{
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setConfirmPassword('');
        return redirect('home_url');
    }

    return(
        <>
            {success ? (
                <section>
                    <h1>{user} Your Account has been Created!<br/>
                        Please click the link below to sign in.</h1>
                    <Link to={'/'}>Sign in</Link>
                </section>
            ) : (<div className={'border-4 bg-green-800 flex flex-col p-4' +
                                ' items-center align-middle justify-items-center mt-64'}>
                <header className={''}>
                    <h1 className={'text-4xl text-blue-400'}>Register</h1>
                </header>
                <section className={'mt-6'}>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div>
                            <div>
                                <input
                                    placeholder={'username'}
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete={'off'}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder={'email'}
                                    type="text"
                                    id='email'
                                    value={email}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder={'first name'}
                                    type="text"
                                    id='firstname'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder={'last name'}
                                    type="text"
                                    id='lastname'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                placeholder={'password'}
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div>
                            <input
                                placeholder={'confirm password'}
                                type={'password'}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </div>
                        <div>
                            {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
                            {successMessage && <div style={{color: 'green'}}>{successMessage}</div>}
                        </div>
                        <div className={'login-button-div'}>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                        <aside className={'register_already'}>
                            <div className={'inner_register'}>
                                <h3>Already Registered?</h3>
                                <Link to={home_url}>Sign in</Link>
                            </div>

                        </aside>

                    </form>
                </section>
            </div>)}


        </>

    );

}
