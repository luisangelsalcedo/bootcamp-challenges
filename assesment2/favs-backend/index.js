import app from "./src/app.js";

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});

server.setTimeout(0);
