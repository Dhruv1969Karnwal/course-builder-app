const mongoose = require('mongoose');

// Set the strictQuery option before connecting to MongoDB
mongoose.set('strictQuery', false);

const connectToMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL);
    // console.log(connection);
    console.log(`Connected to MongoDB with ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectToMongoDB,
};
