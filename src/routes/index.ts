import { Router } from "express";
import path from "path";

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '../../../pubic/index.html'));
});

export default router;
