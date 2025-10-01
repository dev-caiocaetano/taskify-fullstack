import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: false },
  emailVerified: { type: Boolean, default: false, required: false },
  emailVerificationToken: { type: String, required: false },
  emailVerificationTokenExpires: { type: Date, required: false },
  passwordResetVerificationToken: { type: String, required: false },
  passwordResetVerificationTokenExpires: { type: Date, required: false },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
