//POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://rifaq:adminpassword@cluster0.zaqzu.mongodb.net/meetups?retryWrites=true&w=majority"
		);
		const db = client.db();
		const meetupCollections = db.collection("meetups");
		const result = await meetupCollections.insertOne(data);
		client.close();
		res.status(201).json({ message: "Meetup Inserted!" });
	}
}

export default handler;
