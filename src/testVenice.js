import { venice, VENICE_MODEL } from "./veniceClient.js";

const completion = await venice.chat.completions.create({
  model: VENICE_MODEL,
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(completion.choices[0].message.content);
