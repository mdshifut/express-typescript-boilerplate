import config from "config";
import mongoose from "mongoose";
import Profile, { IProfile } from "./Profile";

describe("Profile model", () => {
  beforeAll(async () => {
    await mongoose.connect(config.get("DB"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Profile.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should throw validation error", () => {
    const profile = new Profile();

    expect(profile.validate).toThrow();
  });

  it("should save a profile", async () => {
    const profile: IProfile = new Profile({
      firstName: "Test first name",
      lastName: "Test last name",
      email: "test@email.com",
      phone: "312 2233 2323"
    });
    const spy = jest.spyOn(profile, "save");

    await profile.save();

    expect(spy).toHaveBeenCalled();
    expect(profile).toMatchObject({
      firstName: expect.any(String),
      lastName: expect.any(String),
      email: expect.any(String),
      phone: expect.any(String)
    });

    expect(profile.email).toBe("test@email.com");
  });
});
