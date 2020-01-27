import { Request, Response } from "express";
import { IProfile } from "../models/Profile";
import { create } from "../services/profile";

interface ICreateProfileReq extends Request {
  locals: {
    validateValue: IProfile;
  };
}

export const createProfile = async (
  req: ICreateProfileReq,
  res: Response
): Promise<any> => {
  const { validateValue } = req.locals;

  await create(validateValue);

  res.status(201).json({ message: "Profile created successfully." });
  return;
};
