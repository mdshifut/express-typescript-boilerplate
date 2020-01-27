import cors, { CorsOptions } from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
// import cookieParser from "cookie-parser"

interface IResponseAccess extends Response {
  append(field: string, value?: string[] | string | boolean): this;
}

export default (app: Application) => {
  app.use((req: Request, res: IResponseAccess, next: NextFunction) => {
    res.append("Access-Control-Allow-Credentials", true);
    next();
  });

  const whitelist = ["http://localhost:3000", "http://localhost:5000"];
  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      if (
        (origin && whitelist.indexOf(origin) !== -1) ||
        process.env.NODE_ENV !== "production"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };
  app.use(cors(corsOptions));
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true
    })
  );
};
