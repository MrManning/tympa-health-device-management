import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET home page. */
router.get('/devices', function(req: Request, res: Response, next: NextFunction) {
  // res.render('index', { title: 'Express' });
  res.send("hi");
});

export default router;
