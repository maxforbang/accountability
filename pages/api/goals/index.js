import {getMongoDb} from "@/api-lib/mongodb";
import nc from "next-connect";
import {ncOpts} from "@/api-lib/nc";
import {findGoalsByAccountabilityId} from "@/api-lib/db/goals";

const handler = nc(ncOpts);

handler.get(async (req, res) => {
	if (req.query.accountabilityId == 'undefined') {
		res.json([]);
		return;
	}

	const db = await getMongoDb();
	const goals = await findGoalsByAccountabilityId(db, req.query.accountabilityId);
	res.json({ goals });
});

export default handler;
