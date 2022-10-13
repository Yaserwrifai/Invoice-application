import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	//console.log('process.env.MONGO_URI===>', process.env.MONGO_URI)
	const client = await MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return client;
}
