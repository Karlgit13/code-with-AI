import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function main() {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." }],
        });

        console.log(completion.choices[0].message.content);
    } catch (error) {
        if (error instanceof OpenAI.RateLimitError) {
            console.error("API-anropskvoten har överskridits. Försök igen senare.");
            // Logik för att hantera ratelimit, till exempel vänta och försöka igen
        } else {
            console.error("Ett oväntat fel inträffade:", error.message);
        }
    }
}

main();
