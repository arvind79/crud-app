import mongoose from "mongoose";



const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-rma6r8k-shard-00-00.dmclzeo.mongodb.net:27017,ac-rma6r8k-shard-00-01.dmclzeo.mongodb.net:27017,ac-rma6r8k-shard-00-02.dmclzeo.mongodb.net:27017/?ssl=true&replicaSet=atlas-3yfurd-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully ');
  } catch (error) {
    console.log('Error while connecting with the database: ', error);
  }
}

export default Connection;