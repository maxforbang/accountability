import { auths, validateBody } from '@/api-lib/middlewares';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';
import {ObjectId} from "mongodb";

const handler = nc(ncOpts);

handler.use(...auths);


handler.patch(async (req, res) => {
  const { id, goal, completed } = req.body;

  if (!id) {
    return res.status(400).send('User ID field is required');
  }

  const objectId = new ObjectId(id);
  const filter = { _id: objectId };
  const update = {
    $set: {
      'goals.$[elem].goal': goal,
      'goals.$[elem].completed': completed,
    },
  };
  const options = { arrayFilters: [{ 'elem._id': objectId }] };

  const result = await updateOne('users', filter, update, options);
  return res.status(200).json(result);
});

export default handler;
