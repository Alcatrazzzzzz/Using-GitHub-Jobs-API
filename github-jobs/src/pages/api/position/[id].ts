import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getPositionById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await axios(
    `https://jobs.github.com/positions/${req.query.id}.json`
  );
  res.send(data.data);
}
