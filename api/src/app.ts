import express, { Express, Request, Response, NextFunction } from "express";
import { join } from "path";
import { HttpError } from "http-errors";
import { getDevices } from "./routes/devices";
import { createDatabase } from "./db/setup";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

createDatabase();

// API routes
app.use("/devices", getDevices);

// React routes
app.use(express.static(join(__dirname, "client")));
app.use("/", express.static(join(__dirname, "client")));
app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  return res.status(statusCode).json({ message: err.message });
});

export default app;
