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

app.get('/api/event', async (req, res) => {
try {
    const result = await sql.query`SELECT * FROM Event`;
    res.json(result.recordset);
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

app.get('/api/videos', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Videos`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
        }
    });
