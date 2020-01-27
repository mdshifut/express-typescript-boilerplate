import { Document, model, Schema } from "mongoose";

export interface IProfile extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const profileSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

export default model<IProfile>("Profile", profileSchema);
