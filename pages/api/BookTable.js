import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://SalmaQassem:Salma499@cluster0.xeioklz.mongodb.net/FeaneDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    const bookingCollection = db.collection("Bookings");
    const result = await bookingCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Your booking has been confirmed." });
  }
}

export default handler;
