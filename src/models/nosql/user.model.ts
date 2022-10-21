import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  role: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema(
  {
    name: {
      required: true,
      trim: true,
      type: String,
    },
    age: {
      required: true,
      trim: true,
      type: Number,
    },
    email: {
      required: true,
      trim: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      trim: true,
      type: String,
    },
    role: {
      default: 'user',
      required: true,
      type: ['admin', 'user'],
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false,
  }
);

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);
