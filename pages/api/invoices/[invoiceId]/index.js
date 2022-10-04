import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const { invoiceId } = req.query;
  console.log('invoiceId', invoiceId)
  const client = await MongoClient.connect('mongodb+srv://yaserwalid:lX2RkmcKUC3Sxlub@cluster0.z8tikhn.mongodb.net/invoices2?retryWrites=true&w=majority', { useNewUrlParser: true });
  console.log('client', client)


  const db = client.db();
  const collection = db.collection("allInvoices");

  if (req.method === "PUT") {
    await collection.updateOne(
      { _id: ObjectId(invoiceId) },
      {
        $set: {
          status: "paid",
        },
      }
    );

    res.status(200).json({ message: "Invoice paid" });
    client.close();
  }

  //   delete request
  if (req.method === "DELETE") {
    await collection.deleteOne({ _id: ObjectId(invoiceId) });

    res.status(200).json({ message: "Invoice deleted successfully" });
    client.close();
  }
}

export default handler;
