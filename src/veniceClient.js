import "dotenv/config";
import OpenAI from "openai";

const { VENICE_API_KEY, VENICE_BASE_URL } = process.env;

if (!VENICE_API_KEY) {
  throw new Error("VENICE_API_KEY is not set. Copy .env.example to .env and fill it in.");
}

export const venice = new OpenAI({
  apiKey: VENICE_API_KEY,
  baseURL: VENICE_BASE_URL || "https://api.venice.ai/api/v1",
});

export const VENICE_MODEL = process.env.VENICE_MODEL || "venice-uncensored";
