const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3001;

app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
    // Logiken här skulle behöva anpassas baserat på övningstyp och vad som ska verifieras
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
