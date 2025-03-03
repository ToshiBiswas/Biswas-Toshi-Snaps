import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const {TAGS_PATH} = process.env;

function readExpenseFile() {
  return JSON.parse(fs.readFileSync(TAGS_PATH , "utf8"))
}

function isString(input) {
  return typeof input === "string" && input.trim().length > 0;
}

router.get("/", (req, res) => {
  const expenses = readExpenseFile();
  const allTags = new Set();
  res.status(200).json(expenses);
});


export default router;
