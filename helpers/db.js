import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log('use pre connection');
      return;
    }

    await mongoose.disconnect();

    console.log('dev disconnected');
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    const testProd = false;

    if (process.env.NODE_ENV === 'production' || testProd) {
      await mongoose.disconnect();
      console.log('disconnected');
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

export default { connect, disconnect };
