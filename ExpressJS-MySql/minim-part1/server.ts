import express from "express";
import type { Request, Response } from "express";

import dotenv from "dotenv";
import connect from "./config/sequelize.ts";

dotenv.config();

const app = express();

app.use((req: Request, res: Response) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;

connect();

app.listen(PORT, () => {
  console.log(`✅ Express server running on port ${PORT}`);
});
