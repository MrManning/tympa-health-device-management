import { Request, Response } from "express";
import { db } from "../db/setup";

// const router = express.Router();

// router.get(
//   "/devices",
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const devices = await db.query("SELECT * FROM devices");
//       console.log(devices);
//       res.send(devices);
//     } finally {
//       // db.end();
//     }
//   }
// );

const getDevices = async (req: Request, res: Response) => {
  console.log("reached here");
  db.connect();
  const devices = await db.query("SELECT * FROM devices");
  console.log("In the API: ", devices);
  res.status(200).send(devices);
  // db.end();
};

export { getDevices };
// export default router;
