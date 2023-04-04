import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from '@/lib/mongodb';
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    try{
        const dbClient=await clientPromise;
        const db = dbClient.db('notes-share');
        const result=await db.collection('notes').insertOne(req.body);
        res.status(200).json({});
    }
    catch(err){
        console.log(err);
        res.status(500).json({});
    }
}