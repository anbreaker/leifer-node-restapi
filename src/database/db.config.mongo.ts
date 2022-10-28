import 'dotenv/config';
import mongoose from 'mongoose';

const dbLink = process.env.MONGO_URI;

export const dbConnectionMongo = async () => {
  try {
    const db = await mongoose.connect(dbLink!);

    console.log(`MongoDb Conected on: ${db.connection.host}:${db.connection.port}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);

    process.exit(1);
  }
};
