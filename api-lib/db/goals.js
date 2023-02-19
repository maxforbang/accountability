import {ObjectId} from "mongodb";
import {dbProjectionUsers} from "@/api-lib/db/user";

export async function findGoalsByAccountabilityId(db, accountabilityId) {

	return db
		.collection('accountability').aggregate([
			{$match: {_id: new ObjectId(accountabilityId)}},
			{
				$lookup: {
					from: 'goals',
					localField: 'goals',
					foreignField: '_id',
					as: 'array_objects'
				}
			},
		]).project({array_objects: 1}).toArray()
		.then((mongoResult) => mongoResult[0].array_objects || null);
}

export async function updateGoalById(db, id, data) {
	return db
		.collection('goals')
		.findOneAndUpdate(
			{ _id: new ObjectId(id) },
			{ $set: data },
			{ returnDocument: 'after'}
		)
		.then(({ value }) => value);
}