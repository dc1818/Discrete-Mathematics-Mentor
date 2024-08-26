import pool from "../db/index.js";
import express from "express";
const router = express.Router();

//to do for messages table creating, updating, searching, and deleting

router.post("/messages", (req, res) => {
  console.log("Adding message into table");
  const {userid, message} = req.body;
  const values = [userid, message];
  const query = `INSERT INTO MessageTable (userid, message) 
    SELECT u.userid, $2
    FROM UserTable u
    WHERE u.userid = $1
    RETURNING *`;

  pool.query(query, values)
  .then(result => {
    if (result.rows.length > 0) {
      console.log('Message added:', result.rows[0]);
      res.status(201).json(result.rows[0]);
    } else {
      console.log('Error username not found')
      res.status(500).json({ error: 'Error username not found' });
    }
  })
  .catch(error => {
    console.error('Error adding message', error.stack);
    res.status(500).json({ error: 'Error adding project' });
  });
});

router.put("messages/:id", async (req, res) => {
  console.log("Updating message in table");
  const messageid = parseInt(req.params.id);
  const {message} = req.body;

  if (isNaN(messageid)) {
    return res.status(500).json({ error: `Invalid message ID ${messageid}` });
  }

  try {
    let query = 'UPDATE MessageTable SET';
    const values = [];
    let paramIndex = 1;
        
    if (message) {
      console.log(`Retrieved Message: ${message}`);
      query += ` message = $${paramIndex}`;
      values.push(message);
      paramIndex += 1;
    }

    query += ` WHERE messageid = $${paramIndex + 1} RETURNING *`;
    values.push(messageid);

    console.log(query);
    console.log(values);

    const result = await pool.query(query, values);

    console.log("User Message updated.");
    res.status(201).json(result.rows[0]);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete("messages/:id", (req, res) => {
  console.log(`Request to delete message by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
      "DELETE FROM MessageTable WHERE messageid = $1", [id],
      (error, result) => {
          if (error) {
              res.status(500).json({ error: 'Error deleting message' });
              return;
          }
          res.status(204).send();
      }
  );
});

router.delete('/messages_delete_all', async (req, res) => {
  console.log("Request to delete all messages");
  try {
      await pool.query('DELETE FROM MessageTable');
      res.status(200).json({ message: 'All messages deleted successfully' });
  } catch (error) {
      console.error('Error deleting all messages:', error);
      res.status(500).json({ error: 'Error deleting all messages' });
  }
});


router.get("messages/:id", (req, res) => {
  console.log(`Request to get message by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM MessageTable WHERE userid = $1", [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.rows);
    },
  );
});

router.get("/messages", (req, res) => {
  console.log("Request to get list of all messages");
  pool.query("SELECT * FROM MessageTable ORDER BY userid ASC", (error, result) => {
      if (error) {
          res.status(500).json({ error: 'Error fetching messages' });
          return;
      }
      res.json(result.rows);
  });
});

export default router;
