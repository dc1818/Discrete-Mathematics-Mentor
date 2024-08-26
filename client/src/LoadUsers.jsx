

const serverPort = 'http://localhost:5001/users';


   export const checkUser = (firstName, lastName) =>{

        return fetch(`${serverPort}/checkUser`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
            }),
        }).then(response =>{
            if(!response.ok){
                throw new Error("There is an issue connecting to the server...");
            }
            return response.json();

        })
           .then(data => data.exists)
           .catch(err =>{ console.error(err) });
    }


    export const loadUsers = async (user) => {

        const [firstName, lastName] = user.name.split(" ");


        //checking if user exists, if they do, return else load the user
        let userExists = await checkUser(firstName, lastName);

        if (!userExists) {

            const userName = `${firstName}${Math.floor(Math.random() * 100)}`;
            const userEmail = `${firstName}${lastName.substring(0, 1)}@gmail.com`;

            fetch(`http://localhost:5001/users/loadusers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    username: userName,
                    password: '1',
                    email: userEmail,
                    state: '0'
                })

            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Something went wrong with the response from the server");
                    }
                    console.log(`User ${user.name} loaded successfully`);
                    return response.json();
                })
                .then(data =>{console.log(data)})
                .catch(err => {
                    console.error(err)
                });
        }
    }





