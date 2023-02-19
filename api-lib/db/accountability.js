import {ObjectId} from "mongodb";
import {dbProjectionUsers} from "@/api-lib/db/user";

export async function findAccountabilityById(db, accountabilityId) {
	return db
		.collection('accountability')
		.findOne({ _id: new ObjectId(accountabilityId) })
		.then((accountability) => accountability || null);
}