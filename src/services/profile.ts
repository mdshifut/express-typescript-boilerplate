import Profile, { IProfile } from "../models/Profile";

export const create = async (value: IProfile): Promise<any> => {
  const profile = new Profile(value);

  await profile.save();

  return;
};
