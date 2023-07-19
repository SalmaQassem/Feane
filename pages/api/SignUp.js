import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://SalmaQassem:Salma499@cluster0.xeioklz.mongodb.net/FeaneDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    const usersCollection = db.collection("Users");
    const result = await usersCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "User has been added." });
  }
}

export default handler;
