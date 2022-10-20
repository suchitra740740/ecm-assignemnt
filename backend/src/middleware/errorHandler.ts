import { Request, Response, NextFunction } from "express";

import Logger from "logger";

import { CustomError } from "../utils/response/custom-error/CustomError";

function removeStackTrace(err: CustomError) {
  const errorResponse = err.JSON;
  delete errorResponse.stack;
  delete errorResponse.errorRaw;
  return errorResponse;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Logger.error("ALL ERROR", { error: err.JSON ?? err.message, errObject: err, context: res.locals.context });
  if (err instanceof CustomError) {
    return res
      .status(err.HttpStatusCode)
      .json({ ...removeStackTrace(err), requestId: req.headers.zRequestId })
      ;
  }

  const internalServerError = new CustomError(500, "Raw", "Internal server error", ["Internal server error"], err);
  return res
    .status(internalServerError.HttpStatusCode)
    .json({ ...removeStackTrace(internalServerError), requestId: req.headers.zRequestId })
    ;
};
