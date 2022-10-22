import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IStorage {
  url: string;
  filename: string;
}

// 2. Create a Schema corresponding to the document interface.
const storageSchema = new Schema(
  {
    url: {
      required: true,
      trim: true,
      type: String,
    },

    filename: {
      required: true,
      trim: true,
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false,
  }
);

// 3. Create a Model.
export const Storage = model<IStorage>('Storage', storageSchema);
