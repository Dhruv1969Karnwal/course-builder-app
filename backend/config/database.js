import mongoose from "mongoose";


const connectToMongoDB = async () => {
  try {
    const {connection } = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB with ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export { connectToMongoDB };

