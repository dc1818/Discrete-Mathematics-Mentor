import pool from "../db/index.js";
import express from "express";
const router = express.Router();

//to do for user profile table creating, updating, searching, and deleting

router.post("/userprofile", (req, res) => {
  console.log("Adding userprofile into table");
  const {username, propic, bio, workhistory, education, linkedin, github, twitterx, certifications} = req.body;
  const values = [username, propic, bio, workhistory, education, linkedin, github, twitterx, certifications];
  const query = `INSERT INTO UserProfileTable (userid, propic, bio, workhistory, education, linkedin, github, twitterx, certifications) 
    SELECT u.userid, $2, $3, $4, $5, $6, $7, $8, $9
    FROM UserTable u
    WHERE u.username = $1
    RETURNING *`;

  pool.query(query, values)
  .then(result => {
    if (result.rows.length > 0) {
      console.log('User profile added:', result.rows[0]);
      res.status(201).json(result.rows[0]);
    } else {
      console.log('Error username not found')
      res.status(500).json({ error: 'Error username not found' });
    }
  })
  .catch(error => {
    console.error('Error adding user profile', error.stack);
    res.status(500).json({ error: 'Error adding user profile' });
  });
});

router.put("userprofile/:id", async (req, res) => {
  console.log("Updating userprofile in table");
  const profileid = parseInt(req.params.id);
  const {propic, bio, workhistory, education, linkedin, github, twitterx, certifications} = req.body;

  if (isNaN(profileid)) {
    return res.status(500).json({ error: `Invalid profile ID ${profileid}` });
  }

  try {
      let query = 'UPDATE UserProfileTable SET';
      const values = [];
      let paramIndex = 1;
          
      if (propic) {
        console.log(`Retrieved Profile Pic: ${propic}`);
        query += ` propic = $${paramIndex}`;
        values.push(propic);
        paramIndex += 1;
      }
      if (bio) {
          console.log(`Retrieved Bio: ${bio}`);
          if (values.length > 0) {
              query += ',';
          }
          query += ` lastname = $${paramIndex}`;
          values.push(bio);
          paramIndex += 1;
      }
      if (workhistory) {
        console.log(`Retrieved Work History: ${workhistory}`);
        if (values.length > 0) {
            query += ',';
        }
        query += ` lastname = $${paramIndex}`;
        values.push(workhistory);
        paramIndex += 1;
      }
      if (education) {
        console.log(`Retrieved Education: ${education}`);
        if (values.length > 0) {
            query += ',';
        }
        query += ` lastname = $${paramIndex}`;
        values.push(education);
        paramIndex += 1;
      }
      if (linkedin) {
        console.log(`Retrieved Linkedin: ${linkedin}`);
        if (values.length > 0) {
            query += ',';
        }
        query += ` lastname = $${paramIndex}`;
        values.push(linkedin);
        paramIndex += 1;
      }
      if (github) {
          console.log(`Retrieved Github: ${github}`);
        if (values.length > 0) {
          query += ',';
        }
        query += ` lastname = $${paramIndex}`;
        values.push(github);
        paramIndex += 1;
      }
      if (twitterx) {
        console.log(`Retrieved TwitterX: ${twitterx}`);
      if (values.length > 0) {
        query += ',';
      }
        query += ` lastname = $${paramIndex}`;
        values.push(twitterx);
        paramIndex += 1;
      }
      if (certifications) {
        console.log(`Retrieved Certifcations: ${certifications}`);
      if (values.length > 0) {
        query += ',';
      }
        query += ` lastname = $${paramIndex}`;
        values.push(certifications);
        paramIndex += 1;
      }

      query += ` WHERE userid = $${paramIndex + 1} RETURNING *`;
      values.push(profileid);

      console.log(query);
      console.log(values);

      const result = await pool.query(query, values);

      console.log("User Profile updated.");
      res.status(201).json(result.rows[0]);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete("userprofile/:id", (req, res) => {
  console.log(`Request to delete user profile by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
      "DELETE FROM UserProfileTable WHERE userid = $1", [id],
      (error, result) => {
          if (error) {
              res.status(500).json({ error: 'Error deleting user' });
              return;
          }
          res.status(204).send();
      }
  );
});

router.delete('/userprofile_delete_all', async (req, res) => {
  console.log("Request to delete all users profiles");
  try {
      await pool.query('DELETE FROM UserProfileTable');
      res.status(200).json({ message: 'All users deleted successfully' });
  } catch (error) {
      console.error('Error deleting all user profiles:', error);
      res.status(500).json({ error: 'Error deleting all user profiles' });
  }
});

router.get("userprofile/:id", (req, res) => {
  console.log(`Request to get user profile by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM UserProfileTable WHERE userid = $1", [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.rows);
    },
  );
});

router.get("/userprofiles", (req, res) => {
  console.log("Request to get list of all user profiles");
  pool.query("SELECT * FROM UserProfileTable ORDER BY userid ASC", (error, result) => {
      if (error) {
          res.status(500).json({ error: 'Error fetching projects' });
          return;
      }
      res.json(result.rows);
  });
});

export default router;
