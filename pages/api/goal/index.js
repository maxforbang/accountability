import {getMongoDb} from "@/api-lib/mongodb";
import nc from "next-connect";
import {ncOpts} from "@/api-lib/nc";
import {updateGoalById} from "@/api-lib/db/goals";

const handler = nc(ncOpts);

handler.get(async (req, res) => {
	res.json({'status': 'get'})
})

handler.post(async (req, res) => {
	if (!req.body) {
		req.status(401).end();
		return;
	}

	const db = await getMongoDb();
	const goal = await updateGoalById(db, req.query.id, req.body);
	res.json({ goal });
});
export default handler;
