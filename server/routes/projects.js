import pool from "../db/index.js";
import express from "express";
const router = express.Router();

//to do for project table creating, updating, searching, and deleting

router.post("/projects", (req, res) => {
  console.log("Adding project into table");
  const {username, projectname, projectdesc, projecturl, projectimg} = req.body;
  const values = [username, projectname, projectdesc, projecturl, projectimg];
  const query = `INSERT INTO ProjectTable (userid, projectname, projectdesc, projecturl, projectimg) 
    SELECT u.userid, $2, $3, $4, $5
    FROM UserTable u
    WHERE u.username = $1
    RETURNING *`;

  pool.query(query, values)
  .then(result => {
    if (result.rows.length > 0) {
      console.log('Project added:', result.rows[0]);
      res.status(201).json(result.rows[0]);
    } else {
      console.log('Error username not found')
      res.status(500).json({ error: 'Error username not found' });
    }
  })
  .catch(error => {
    console.error('Error adding project', error.stack);
    res.status(500).json({ error: 'Error adding project' });
  });
});

router.put("projects/:id", async (req, res) => {
  console.log("Updating project in table");
  const projectid = parseInt(req.params.id);
  const {projectname, projectdesc, projecturl, projectimg} = req.body;

  if (isNaN(projectid)) {
    return res.status(500).json({ error: `Invalid project ID ${projectid}` });
  }

  try {
    let query = 'UPDATE ProjectTable SET';
    const values = [];
    let paramIndex = 1;
        
    if (projectname) {
      console.log(`Retrieved Project Name: ${projectname}`);
      query += ` projectname = $${paramIndex}`;
      values.push(projectname);
      paramIndex += 1;
    }
    if (projectdesc) {
        console.log(`Retrieved Project Description: ${projectdesc}`);
        if (values.length > 0) {
            query += ',';
        }
        query += ` projectdesc = $${paramIndex}`;
        values.push(projectdesc);
        paramIndex += 1;
    }
    if (projecturl) {
      console.log(`Retrieved Project URL: ${projecturl}`);
      if (values.length > 0) {
          query += ',';
      }
      query += ` projecturl = $${paramIndex}`;
      values.push(projecturl);
      paramIndex += 1;
    }
    if (projectimg) {
      console.log(`Retrieved Project Image: ${projectimg}`);
      if (values.length > 0) {
          query += ',';
      }
      query += ` projectimg = $${paramIndex}`;
      values.push(projectimg);
      paramIndex += 1;
    }

    query += ` WHERE projectid = $${paramIndex + 1} RETURNING *`;
    values.push(projectid);

    console.log(query);
    console.log(values);

    const result = await pool.query(query, values);

    console.log("User Project updated.");
    res.status(201).json(result.rows[0]);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete("projects/:id", (req, res) => {
  console.log(`Request to delete project by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
      "DELETE FROM ProjectTable WHERE projectid = $1", [id],
      (error, result) => {
          if (error) {
              res.status(500).json({ error: 'Error deleting project' });
              return;
          }
          res.status(204).send();
      }
  );
});

router.delete('/projects_delete_all', async (req, res) => {
  console.log("Request to delete all users projects");
  try {
      await pool.query('DELETE FROM ProjectTable');
      res.status(200).json({ message: 'All projects deleted successfully' });
  } catch (error) {
      console.error('Error deleting all projects:', error);
      res.status(500).json({ error: 'Error deleting all projects' });
  }
});


router.get("projects/:id", (req, res) => {
  console.log(`Request to get project by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM ProjectTable WHERE userid = $1", [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.rows);
    },
  );
});

router.get("/projects", (req, res) => {
  console.log("Request to get list of all projects");
  pool.query("SELECT * FROM ProjectTable ORDER BY userid ASC", (error, result) => {
      if (error) {
          res.status(500).json({ error: 'Error fetching projects' });
          return;
      }
      res.json(result.rows);
  });
});

export default router;
