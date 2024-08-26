import pool from "../db/index.js";
import express from "express";
import bcryptjs from 'bcryptjs';

const router = express.Router();
const bcrypt = bcryptjs;

    // Registering users
    router.post('/register', (req, res) => {
        const {username, email, password, firstName, lastName } = req.body;
        bcrypt.hash(password, 10)
            .then(hashedPassword => {
                return pool.query(
                    'INSERT INTO UserTable (username, email, password, firstname, lastname) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                    [username, email, hashedPassword, firstName, lastName]
                );
            })
            .then(result => {
                res.status(201).json(result.rows[0]);
            })
            .catch(error => {
                console.error("error registering user", error);
            });
    });

    router.post('/checkLogin', async (req, res) => {
        try{
            const { username, password } = req.body;
            const result = await pool.query('SELECT userid, password FROM userTable WHERE username = $1',[username]);
            if(result.rows.length > 0){
                const isValid = await bcrypt.compare(password, result.rows[0].password);
                if(isValid){
                  return res.status(200).json({ success: true, message: 'Login Success', userId: `${result.rows[0].userid}`});
                }
                return res.status(401).json({success: false, message: "username/password incorrect"});
            }
            if(result.rows.length === 0){
                return res.status(401).json({ success: false, message: `user: ${username} does not exist`});
            }
        }catch(error){
            console.error("Error logging in: ", error);
            return res.status(500).json({ success: false, message: "Server Error"});
        }

    });


    // Post a user (example endpoint)
    router.post("/loadusers", (req, res) => {
        const { username, firstName, lastName, password, email, state } = req.body;
        bcrypt.hash(password, 10)
            .then(hashedPassword =>{
                return pool.query(
                    'INSERT INTO UserTable (username, firstname, lastname, password, email, state) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                    [username, firstName, lastName, hashedPassword, email, state]
                );
            })
            .then( result =>{
                res.status(201).json(result.rows);
            })
            .catch(error =>{
                console.error(error);
                res.status(500).json({error: "Error registering user"});
            });
    });

    router.get('/id')


    router.post('/checkUser', async (req, res) => {
        const { firstName, lastName } = req.body;
        try {
            const user = await pool.query(
                'SELECT 1 FROM userTable WHERE firstname = $1 AND lastname = $2',
                [firstName, lastName]
            );

            if (user.rowCount > 0) {
                return res.json({ exists: true });
            }

            res.json({ exists: false });
        } catch (error) {
            console.error('Database query error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

// Update user information by id
router.put("/users/:id", async (req, res) => {
    console.log(`Request to update user: ${req.params.id}`);
    const id = parseInt(req.params.id);
    const {
        firstname, lastname, password, email, theme, state,
        propic, bio, workhistory, education, linkedin, github, twitterx, certifications
    } = req.body;

    console.log(github);

    if (isNaN(id)) {
        return res.status(500).json({ error: `Invalid user ID ${id}` });
    }

    try {
        let userQuery = 'UPDATE UserTable SET';
        const userValues = [];
        let paramIndex = 1;

        if (firstname) {
            console.log(`Retrieved first name: ${firstname}`);
            userQuery += ` firstname = $${paramIndex}`;
            userValues.push(firstname);
            paramIndex += 1;
        }
        if (lastname) {
            console.log(`Retrieved last name: ${lastname}`);
            if (userValues.length > 0) {
                userQuery += ',';
            }
            userQuery += ` lastname = $${paramIndex}`;
            userValues.push(lastname);
            paramIndex += 1;
        }
        if (email) {
            console.log(`Retrieved email: ${email}`);
            if (userValues.length > 0) {
                userQuery += ',';
            }
            userQuery += ` email = $${paramIndex}`;
            userValues.push(email);
            paramIndex += 1;
        }
        if (theme) {
            console.log(`Retrieved theme: ${theme}`);
            if (userValues.length > 0) {
                userQuery += ',';
            }
            userQuery += ` theme = $${paramIndex}`;
            userValues.push(theme);
            paramIndex += 1;
        }
        if (state) {
            console.log(`Retrieved state: ${state}`);
            if (userValues.length > 0) {
                userQuery += ',';
            }
            userQuery += ` state = $${paramIndex}`;
            userValues.push(state);
            paramIndex += 1;
        }
        if (password) {
            console.log(`Retrieved password: ${password}`);
            if (userValues.length > 0) {
                userQuery += ',';
            }
            userQuery += ` password = $${paramIndex}`;
            userValues.push(await bcrypt.hash(password, 10));
            paramIndex += 1;
        }

        userQuery += ` WHERE userid = $${paramIndex} RETURNING *`;
        userValues.push(id);

        console.log(userQuery);
        console.log(userValues);

        const userResult = await pool.query(userQuery, userValues);

        // Insert or update UserProfileTable
        const profileQuery = `
            INSERT INTO UserProfileTable (userid, propic, bio, workhistory, education, linkedin, github, twitterx, certifications)
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9
            )
            ON CONFLICT (userid) DO UPDATE SET
                propic = EXCLUDED.propic,
                bio = EXCLUDED.bio,
                workhistory = EXCLUDED.workhistory,
                education = EXCLUDED.education,
                linkedin = EXCLUDED.linkedin,
                github = EXCLUDED.github,
                twitterx = EXCLUDED.twitterx,
                certifications = EXCLUDED.certifications
            RETURNING *;
        `;

        const profileValues = [
            id,  // userid from the route parameter
            propic,  // shifted to the second position
            bio,
            workhistory,
            education,
            linkedin,
            github,
            twitterx,
            certifications
        ];

        console.log(profileQuery);
        console.log(profileValues);

        const profileResult = await pool.query(profileQuery, profileValues);

        res.status(201).json({
            user: userResult.rows[0],
            profile: profileResult.rows[0]
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete("/users/:id", (req, res) => {
    console.log(`Request to delete user by id value: ${req.params.id}`);
    const id = parseInt(req.params.id);
    pool.query(
        "DELETE FROM UserTable WHERE userid = $1", [id],
        (error, result) => {
            if (error) {
                res.status(500).json({ error: 'Error deleting user' });
                return;
            }
            res.status(204).send(); // No content
        }
    );
});


router.delete('/delete_all', async (req, res) => {
    console.log("Request to delete all users");
    try {
        await pool.query('DELETE FROM UserTable');
        res.status(200).json({ message: 'All users deleted successfully' });
    } catch (error) {
        console.error('Error deleting all users:', error);
        res.status(500).json({ error: 'Error deleting all users' });
    }
});

router.get("/users/:id", (req, res) => {
   const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM UserTable WHERE userid = $1", [id],
    (error, result) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({error: "internal error"});
      }
      if(result.rows.length === 0){
          return res.status(404).json({error: "user not found"});
      }
      res.send(result.rows[0]);
    },
  );
});

router.get("/users", (req, res) => {
    pool.query("SELECT * FROM UserTable ORDER BY userid ASC", (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching users' });
            return;
        }
        res.json(result.rows);
    });
});

export default router;
