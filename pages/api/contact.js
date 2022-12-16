import { MongoClient } from "mongodb";

async function handler(req, res) {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.pfrdntm.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({
        message: "Connection to database failed",
      });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
    } catch (err) {
      client.close();
      res.status(500).json({
        message: "Sending message failed",
      });
    }
    client.close();
    res.status(201).json({
      message: "success",
      data: newMessage,
    });
  }
}

export default handler;
