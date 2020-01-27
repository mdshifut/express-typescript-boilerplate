import { ValidationResult } from "@hapi/joi";
import createError from "http-errors";
import { NextFunction, Request, Response } from "express";
import _ from "lodash";

// Type for validator function
type IValidator = (validateObj: any) => ValidationResult;

// Type for validate function
type IValidate = (
  validator: IValidator
) => (req: Request, res: Response, next: NextFunction) => void;

const validate: IValidate = validator => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = validator(req.body);

    if (error) {
      next(createError(400, error.details[0].message));
      return;
    }
    _.set(req, "locals.validateValue", value);
    next();
    return;
  };
};

export default validate;
