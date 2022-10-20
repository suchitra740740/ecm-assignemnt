import { getMedia } from "controller/media";
import { Request, Response, Router, NextFunction } from "express";
import Logger from "../logger";
import page404 from "./404";
import expressAsyncHandler from 'express-async-handler';
const router = Router();

router.get(`/health`, async (req: Request, res: Response) => {
  Logger.info("This is health api");
  res.customSuccess(200, "Hello");
});

router.get('/media',
  [

  ],
  expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    Logger.info(`get media`, {
      context: res.locals.context,
    });
    const response = await getMedia();
    res.customSuccess(200, 'get media', response);
  }));
router.use(page404);

export default router;
