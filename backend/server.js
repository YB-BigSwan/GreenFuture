
const { config: dotenvConfig } = require('dotenv');
const sql = require('mssql');
const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = process.env.DB_CLIENT_ID; // Replace with your actual client ID
const client = new OAuth2Client(CLIENT_ID);

dotenvConfig();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    server: process.env.DB_SERVER || '',
    database: process.env.DB_DATABASE || '',
    options: {
        encrypt: true,
    },
};

// Function to verify JWT token signature
async function verifyTokenSignature(token) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        return payload;
    } catch (error) {
        console.error('Token verification error:', error);
        throw new Error('Invalid token signature');
    }
}

// Middleware to protect endpoints
async function protectEndpoint(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
        return; // This just exits the function early.
    }

    try {
        // Verify token signature
        await verifyTokenSignature(token);
        // Custom validation logic here

        // If token is valid, proceed to next middleware
        next();
    } catch (error) {
        console.error('Error:', error.message);
        res.status(401).json({ message: 'Unauthorized' });
        return; // This just exits the function early.
    }
}

(async () => {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to the database.');
    } catch (err) {
        console.error('Database connection failed:', err);
    }

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    // Example protected endpoint
    app.get('/api/protected', protectEndpoint, (req, res) => {
        res.json({ message: 'You accessed the protected endpoint' });
    });

    // Route for verifying JWT token
    app.post('/api/verify-token', async (req, res) => {
        const { token } = req.body;
        try {
            const decodedToken = await verifyTokenSignature(token);
            // If verification is successful, send back the decoded token
            res.json(decodedToken);
        } catch (error) {
            console.error('Error verifying token:', error.message);
            res.status(401).json({ message: 'Unauthorized' });
        }
    });

})();

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
        const id = req.params.id;
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
        const id = req.params.id;
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
        const id = req.params.id;
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
        const id = req.params.id;
        const result = await sql.query`SELECT * FROM Event WHERE id = ${id}`;
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
app.get('/api/event/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await sql.query`SELECT * FROM Event WHERE id = ${id}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
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
        const id = req.params.id;
        const result = await sql.query`DELETE FROM Event WHERE id = ${id}`;
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Event deleted successfully." });
        } else {
            res.status(404).send({ message: "Event not found." });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Retrieve all petitions
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
        const id = req.params.id;
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
        const id = req.params.id;
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

// Retrieve all petitions
app.get('/api/workshop', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Workshop`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.get('/api/workshop/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await sql.query`SELECT * FROM Workshop WHERE id = ${id}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).send({ message: "Event not found." });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Retrieve all petitions
app.get('/api/volunteer', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Volunteer`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.get('/api/volunteer/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await sql.query`SELECT * FROM Volunteer WHERE id = ${id}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).send({ message: "Event not found." });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
