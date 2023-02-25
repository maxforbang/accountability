import {ObjectId} from "mongodb";
import {dbProjectionUsers} from "@/api-lib/db/user";

export async function findAccountabilityById(db, accountabilityId) {
	return db
		.collection('accountability')
		.findOne({ _id: new ObjectId(accountabilityId) })
		.then((accountability) => accountability || null);
}


// Create goals, a new accountability, and update the user's weekly to match the new one
// db.users.updateOne({name: 'Max'},
// 	{
// 		$set: {
// 			weekly: db.accountability.insertOne({
// 				user_id: db.users.findOne({name: 'Max'}, {_id: 1}),
// 				goals: AWAIT db.goals.insertMany([
// 					{
// 						goal: "Strukter Site MVP",
// 						description: "",
// 						completed: false
// 					},
// 					{
// 						goal: "Grind 75 1 hr/day",
// 						description: "",
// 						completed: false
// 					},
// 					{
// 						goal: "Avengers - Self-Managed Task Lists",
// 						description: "",
// 						completed: false
// 					}
// 				]).insertedIds
// 			}).insertedId
// 		}
// 	});