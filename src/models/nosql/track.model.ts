import { Schema, model, Types } from 'mongoose';
import mongooseDelete from 'mongoose-delete';

// 1. Create an interface representing a document in MongoDB.
interface ITrack {
  name: string;
  album: string;
  cover: string;
  artist: {
    name: string;
    nickname: string;
    nationality: string;
  };
  duration: {
    start: number;
    end: number;
  };
  mediaId: {
    type: Types.ObjectId;
  };
}

// 2. Create a Schema corresponding to the document interface.
const trackSchema = new Schema(
  {
    name: {
      required: true,
      trim: true,
      type: String,
    },
    album: {
      required: true,
      trim: true,
      type: String,
    },
    cover: {
      required: true,
      trim: true,
      type: String,
      validate: (req: boolean) => true,
      message: 'ERROR_URL',
    },
    artist: {
      name: { type: String },
      nickname: { type: String },
      nationality: { type: String },
    },
    duration: {
      start: { type: Number },
      end: { type: Number },
    },
    mediaId: {
      type: Types.ObjectId,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    versionKey: false,
  }
);

trackSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

// 3. Create a Model.
export const Track = model<ITrack>('Track', trackSchema);
