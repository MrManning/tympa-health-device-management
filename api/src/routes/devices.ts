import express, { Request, Response, NextFunction } from "express";
import {db} from '../db/setup'

const router = express.Router();

router.get('/devices', async function(req: Request, res: Response, next: NextFunction) {
  await db.query("SELECT * FROM tbl_device").then((devices) => res.send(devices));
});

export default router;
