import "dotenv/config";
import cors from "cors";
import express from "express";
import tagsRoute from "./routes/tags.js";
import photosRoute from "./routes/photos.js";

const app = express();
app.use(cors());

const { PORT } = process.env;
const { BACKEND_URL } = process.env;

app.use(express.json());
app.use("/tags", tagsRoute);
app.use("/photos", photosRoute);

app.get("/", (req, res) => {
  res.send("<h1>HELLO pair programming</h1>");
});

app.listen(PORT, () => {
  console.log(`app running at ${BACKEND_URL}:${PORT}`);
});
