import {findOtherUsers, findUserById} from '@/api-lib/db';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  if (req.query.id == "undefined") {
    res.json([])
    return;
  }

  const db = await getMongoDb();
  const peers = await findOtherUsers(db, req.query.id);
  res.json({ peers });
});

export default handler;
