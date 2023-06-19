import express from "express";

const app = express();

app.use(function setHeaderMiddleWare(request, response, next) {
  console.log("called: setHeaderMiddleware");

  response.setHeader("X-Custom-Header", "1234");
  
  next();
});

