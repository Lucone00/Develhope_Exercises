import express from "express";
import "express-async-errors";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
