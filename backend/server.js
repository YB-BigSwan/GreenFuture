require('dotenv').config();

const sql = require('mssql');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
      encrypt: true,
    },
  };
  

sql.connect(dbConfig).then(() => {
  console.log('Connected to the database.');
}).catch(err => {
  console.error('Database connection failed:', err);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

// get videos
app.get('/api/videos', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Videos`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
        }
    });

// Get a single video by id
app.get('/api/videos/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await sql.query`SELECT * FROM Videos WHERE id = ${id}`;
      if (result.recordset.length > 0) {
          res.json(result.recordset[0]);
      } else {
          res.status(404).send({ message: "Video not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});


// Update a video by id
app.put('/api/videos/:id', async (req, res) => {
  try {
      const { embed_link, category, title, description } = req.body;
      const { id } = req.params;
      const result = await sql.query`UPDATE Videos SET embed_link = ${embed_link}, category = ${category}, title = ${title}, description = ${description} WHERE id = ${id}`;
      if (result.rowsAffected[0] > 0) {
          res.json({ message: "Video updated successfully." });
      } else {
          res.status(404).send({ message: "Video not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});

// Delete a video by id
app.delete('/api/videos/:id', async (req, res) => {
  try {
      const { id } = req.params; 
      const result = await sql.query`DELETE FROM Videos WHERE id = ${id}`;
      if (result.rowsAffected[0] > 0) {
          res.json({ message: "Video deleted successfully." });
      } else {
          res.status(404).send({ message: "Video not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});

// get event
app.get('/api/event', async (req, res) => {
  try {
      const result = await sql.query`SELECT * FROM Event`;
      res.json(result.recordset);
  } catch (err) {
      res.status(500).send({ message: err.message });
      }
  });

  // Get a single event by id
app.get('/api/event/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await sql.query`SELECT * FROM Events WHERE id = ${id}`;
      if (result.recordset.length > 0) {
          res.json(result.recordset[0]);
      } else {
          res.status(404).send({ message: "Event not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});


// Update an event by id
app.put('/api/event/:id', async (req, res) => {
  try {
      const { location_embed, title, description, date, time } = req.body;
      const { id } = req.params;
      const result = await sql.query`UPDATE Events SET location_embed = ${location_embed}, title = ${title}, description = ${description}, date = ${date}, time = ${time} WHERE id = ${id}`;
      if (result.rowsAffected[0] > 0) {
          res.json({ message: "Event updated successfully." });
      } else {
          res.status(404).send({ message: "Event not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});

// Delete an event by id
app.delete('/api/event/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await sql.query`DELETE FROM Events WHERE id = ${id}`;
      if (result.rowsAffected[0] > 0) {
          res.json({ message: "Event deleted successfully." });
      } else {
          res.status(404).send({ message: "Event not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});

app.get('/api/petition', async (req, res) => {
  try {
      const result = await sql.query`SELECT * FROM Petition`;
      res.json(result.recordset);
  } catch (err) {
      res.status(500).send({ message: err.message });
      }
  });
  

// Update a petition by id
app.put('/api/petition/:id', async (req, res) => {
  try {
      const { title, description, vote_count } = req.body;
      const { id } = req.params;
      const result = await sql.query`UPDATE Petitions SET title = ${title}, description = ${description}, vote_count = ${vote_count} WHERE id = ${id}`;
      if (result.rowsAffected[0] > 0) {
          res.json({ message: "Petition updated successfully." });
      } else {
          res.status(404).send({ message: "Petition not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});

// Delete a petition by id
app.delete('/api/petition/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await sql.query`DELETE FROM Petitions WHERE id = ${id}`;
      if (result.rowsAffected[0] > 0) {
          res.json({ message: "Petition deleted successfully." });
      } else {
          res.status(404).send({ message: "Petition not found." });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
});