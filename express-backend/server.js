const express = require('express');
require('dotenv').config();
const { OpenAI } = require('openai');

const app = express();
const port = 3001;

app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate-exercise', async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Skapa en JavaScript-övning för att öva på metoden " + req.body.method,
            temperature: 0.7,
            max_tokens: 150,
        });
        res.json({ exercise: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/verify-exercise', async (req, res) => {
    // Här skulle din logik för att verifiera övningarna komma in
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
