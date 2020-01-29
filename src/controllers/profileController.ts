import { Request, Response } from "express";
import { IProfile } from "../models/Profile";
import { create } from "../services/profile";

interface ICreateProfileReq extends Request {
  locals: {
    validateValue: object;
  };
}

export const createProfile = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { validateValue } = req.locals;
  if (validateValue) {
    await create(validateValue);
  }

  res.status(201).json({ message: "Profile created successfully." });
  return;
};
