import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

export default (req: Request, res: Response, next: NextFunction) =>
  next(
    createError(
      404,
      "The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again."
    )
  );
