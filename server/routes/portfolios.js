import pool from "../db/index.js";
import express from "express";
const router = express.Router();

//to do for project table creating, updating, searching, and deleting

router.post("/portfolios", (req, res) => {
  console.log("Adding portfolio into table");
  const {username, image} = req.body;
  const values = [username, image];
  const query = `INSERT INTO PortfolioTable (userid, image) 
    SELECT u.userid, $2
    FROM UserTable u
    WHERE u.username = $1
    RETURNING *`;

  pool.query(query, values)
  .then(result => {
    if (result.rows.length > 0) {
      console.log('Portfolio added:', result.rows[0]);
      res.status(201).json(result.rows[0]);
    } else {
      console.log('Error username not found')
      res.status(500).json({ error: 'Error username not found' });
    }
  })
  .catch(error => {
    console.error('Error adding portfolio', error.stack);
    res.status(500).json({ error: 'Error adding portfolio' });
  });
});

router.put("portfolios/:id", async (req, res) => {
  console.log("Updating portfolio in table");
  const portfolioid = parseInt(req.params.id);
  const {image} = req.body;

  if (isNaN(portfolioid)) {
    return res.status(500).json({ error: `Invalid porfolio ID ${portfolioid}` });
  }

  try {
    let query = 'UPDATE PortfolioTable SET';
    const values = [];
    let paramIndex = 1;
        
    if (image) {
      console.log(`Retrieved Portfolio Pic: ${image}`);
      query += ` image = $${paramIndex}`;
      values.push(image);
      paramIndex += 1;
    }

    query += ` WHERE userid = $${paramIndex + 1} RETURNING *`;
    values.push(portfolioid);

    console.log(query);
    console.log(values);

    const result = await pool.query(query, values);

    console.log("User Portfolio updated.");
    res.status(201).json(result.rows[0]);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete("portfolios/:id", (req, res) => {
  console.log(`Request to delete portfolio by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
      "DELETE FROM ProjectTable WHERE userid = $1", [id],
      (error, result) => {
          if (error) {
              res.status(500).json({ error: 'Error deleting portfolio' });
              return;
          }
          res.status(204).send();
      }
  );
});

router.delete('/portfolios_delete_all', async (req, res) => {
  console.log("Request to delete all users portfolios");
  try {
      await pool.query('DELETE FROM ProjectTable');
      res.status(200).json({ message: 'All portfolios deleted successfully' });
  } catch (error) {
      console.error('Error deleting all portfolios:', error);
      res.status(500).json({ error: 'Error deleting all portfolios' });
  }
});


router.get("portfolios/:id", (req, res) => {
  console.log(`Request to get portfolio by id value: ${req.params.id}`);
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

router.get("/portfolios", (req, res) => {
  console.log("Request to get list of all portfolios");
  pool.query("SELECT * FROM ProjectTable ORDER BY userid ASC", (error, result) => {
      if (error) {
          res.status(500).json({ error: 'Error fetching portfolios' });
          return;
      }
      res.json(result.rows);
  });
});

export default router;
