import {getMongoDb} from "@/api-lib/mongodb";
import {findOtherUsers, findUserById} from "@/api-lib/db";
import nc from "next-connect";
import {ncOpts} from "@/api-lib/nc";
import {findAccountabilityById} from "@/api-lib/db/accountability";

const handler = nc(ncOpts);

handler.get(async (req, res) => {
	const db = await getMongoDb();
	const accountability = await findAccountabilityById(db, req.query.id);
	res.json({ accountability });
});

export default handler;
