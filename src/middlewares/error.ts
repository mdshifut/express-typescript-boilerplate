import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import logger from "../logger/logger";

interface IError {
  message: string;
  type: string;
  status: number;
  details?: object;
  stack?: string;
}

export default (
  err: createError.HttpError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: IError;

  if (err instanceof createError.HttpError) {
    // If error generate by http-errors
    // handle http err
    error = {
      message: err.message,
      type: err.name,
      status: err.statusCode
    };

    // If error has details then attach it
    if (err.details) {
      error.details = err.details;
    }

    // If the server is running in development then log the error
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.NODE_ENV !== "test" &&
      err.stack
    ) {
      logger.error(err.stack);
    }
  } else {
    // If error is not generate by http error
    error = {
      message: "Internal server error.",
      status: 500,
      type: "InternalServerError"
    };

    if (err.stack) {
      logger.error(err.stack);
    }
  }

  // If the server is not running on production then send the error stack with the response
  if (process.env.NODE_ENV !== "production" && error.stack) {
    error.stack = err.stack;
  }

  return res.status(error.status).json({
    error
  });
};
