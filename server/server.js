import { Express } from "express";
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
    const response = await openai.createCompletion({});
  } catch (error) {}
});
