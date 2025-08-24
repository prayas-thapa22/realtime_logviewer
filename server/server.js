import { WebSocketServer } from "ws";

const PORT = 8080;

//quotes from twin peaks
const quotes = [
  "The owls are not what they seem.",
  "Damn fine cup of coffee!",
  "Every day, once a day, give yourself a present.",
  "That gum you like is going to come back in style.",
  "I’ll see you again in 25 years.",
  "Fire walk with me",
  "Through the darkness of future past, the magician longs to see.",
  "Where we're from, the birds sing a pretty song and there's always music in the air.",
  "How’s Annie?",
  "I only have time for coffee.",
  "That’s a lot of pie for a deputy.",
  "Sometimes my arms bend back.",
  "We live inside a dream.",
  "It is happening again.",
  "I have no idea where this will lead us, but I have a definite feeling it will be a place both wonderful and strange.",
  "There's a sort of evil out there. Something very, very strange in these old woods.",
  "Every day, once a day, give yourself a present. Don't plan it. Don't wait for it. Just let it happen naturally.",
  "Black as midnight on a moonless night.",
  "This must be where pies go when they die."

];
//defining each warning level
const levels = ["INFO", "WARN", "ERROR"];

//start WebSocket server
const wss = new WebSocketServer({ port: PORT }, () => {
  console.log(`Web Socket starting.`);
});
//client connected sucessfully
wss.on("connection", (ws) => {
  console.log("Client connected");
//creating the log
  const interval = setInterval(() => {
    const log = {
      level: levels[Math.floor(Math.random() * levels.length)],
      message: quotes[Math.floor(Math.random() * quotes.length)],
      timestamp: new Date().toISOString()
    };
//sending it out
    ws.send(JSON.stringify(log));
  }, 1000);
//closing the connection
  ws.on("close", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});
