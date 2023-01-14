import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express(); //initialise express application

// middle wares
app.use(cors()); //allow to make cross origin requests to allow servers to be called from front-end
app.use(express.json()); //allow us to send json from front-end to back-end

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from Codex",
  });
}); //dummy root route

app.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    res.status(200).send({ bot: response.data.choices[0].text }); //send response to front-end
  } catch (error) {
    console.log(error);
    res.status(500).send(error || "Something went wring");
  }
});

//make sure that server listens to new requests

app.listen(5005, () =>
  console.log("AI server is running on port http://localhost:5005")
);
