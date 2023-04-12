import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dbClient = await clientPromise;
    const db = dbClient.db("notes-share");
    const queryObjectId = new ObjectId(req.body._id);
    const result = await db
      .collection("notes")
      .deleteOne({ _id: queryObjectId });
    // console.log(result);
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({});
  }
}
