import _ from "lodash";
import request, { Response } from "supertest";

import app from "../app";
import Profile from "../models/Profile";

interface IProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

const testProfile: IProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "test@email.com",
  phone: "896 7454 6546"
};

describe("Profile route => api/profile", () => {
  beforeAll(async () => {
    await Profile.deleteMany({});
  });

  afterAll(async () => {
    app.close();
  });

  describe("POST /create-profile", () => {
    const exec = (value: IProfile): Promise<Response> => {
      return request(app)
        .post("/api/profile/create-profile")
        .send(value);
    };

    it("should return error if data is not provide", async () => {
      const { status } = await exec({});

      expect(status).toBe(400);
    });

    /**
     * ================ firstName ==================
     */
    describe("firstName", () => {
      it("should return error if firstName is not provided", async () => {
        const { status, body } = await exec(_.omit(testProfile, ["firstName"]));

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/firstName/);
      });

      it("should return error if firstName length less than 3 characters", async () => {
        const { status, body } = await exec({
          ...testProfile,
          firstName: "te"
        });

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/firstName/);
        expect(body.error.message).toMatch(/3/);
      });

      it("should return error if firstName length greater than 20 characters", async () => {
        const { status, body } = await exec({
          ...testProfile,
          firstName: "testgreaterthantwientycharceters"
        });

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/firstName/);
        expect(body.error.message).toMatch(/20/);
      });
    }); // firstName

    /**
     * ================ lastName ==================
     */
    describe("lastName", () => {
      it("should return error if lastName is not provided", async () => {
        const { status, body } = await exec(_.omit(testProfile, ["lastName"]));

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/lastName/);
      });

      it("should return error if lastName length less than 3 characters", async () => {
        const { status, body } = await exec({
          ...testProfile,
          lastName: "te"
        });

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/lastName/);
        expect(body.error.message).toMatch(/3/);
      });

      it("should return error if lastName length greater than 20 characters", async () => {
        const { status, body } = await exec({
          ...testProfile,
          lastName: "testgreaterthantwientycharceters"
        });

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/lastName/);
        expect(body.error.message).toMatch(/20/);
      });
    }); // lastName

    /**
     * ================ email ==================
     */
    describe("email", () => {
      it("should return error if email is not provided", async () => {
        const { status, body } = await exec(_.omit(testProfile, ["email"]));

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/email/);
      });

      it("should return error if email is not a valid email", async () => {
        const { status, body } = await exec({
          ...testProfile,
          email: "invalidEmail"
        });

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/email/);
        expect(body.error.message).toMatch(/invalid/);
      });
    }); // email

    /**
     * ================ phone ==================
     */
    describe("phone", () => {
      it("should return error if phone is not provided", async () => {
        const { status, body } = await exec(_.omit(testProfile, ["phone"]));

        expect(status).toBe(400);
        expect(body.error.message).toMatch(/phone/);
      });
    }); // phone

    it("should create profile and return success message if all data is valid", async () => {
      const { status, body } = await exec(testProfile);

      const profile = await Profile.findOne({ email: testProfile.email });

      expect(status).toBe(201);
      expect(body.message).toMatch(/successfully/);
      expect(profile).toMatchObject(testProfile);
    });
  });
});
