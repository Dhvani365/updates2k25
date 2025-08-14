import mongoose, { ConnectionStates } from "mongoose";

const connection = {
  isConnected: 0 as ConnectionStates,
};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI!);
    connection.isConnected = connect.connections[0].readyState;
    console.log("CONNECT TO DB");
  } catch (error) {
    console.log("ERROR IN CONNECTION IN DATABSE");
    process.exit(1);
  }
}

export default connectDB;
