import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  const jasonResponseBody = JSON.stringify({ location: "Earth" });
  response.end(jasonResponseBody);
});

server.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});
