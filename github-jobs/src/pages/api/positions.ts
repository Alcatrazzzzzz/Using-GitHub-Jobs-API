import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getPositionById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await axios(
    `https://jobs.github.com/positions.json?description=${req.query.description}&location=${req.query.location}&full_time=false&page=${req.query.page}`
  );
  res.send(data.data);
}
