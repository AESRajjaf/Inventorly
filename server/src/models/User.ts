import mongoose from "mongoose";
import bcrypt from "bcrypt";

interface UserModel {
  name: string;
  password: string;
  email: string;
  token?: string;
  confirmed?: boolean;
  admin?: boolean;
}

interface UserMethods {
  checkPassword: (passwordForm: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserModel, {}, UserMethods>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    token: {
      type: String,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function (passwordForm: string) {
  return await bcrypt.compare(passwordForm, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
