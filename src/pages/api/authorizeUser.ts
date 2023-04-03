import { stat } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

const userLogins:{username:string,password:string}[]=[
    {
        username:"admin",
        password:"admin@1234"
    },
    {
        username:"sachin",
        password:"sachin@1234"
    },
    {
        username:"sourabh",
        password:"sourabh@1234"
    },
    {
        username:"other",
        password:"password@1234"
    }

]
type Data={status:number,message:string,username?:string};
export default function handler(req:NextApiRequest,res:NextApiResponse<Data>){
    try{
        const credential:{username:string,password:string}|undefined=
            userLogins.find(login=>login.username===req.body.username&&login.password===req.body.password);
        
        if(credential!==undefined)
        {
            res.status(200).json({status:200,message:"Successfully logged in",username:credential.username});    
        }
        else
        {
            res.status(401).json({status:401,message:"Bad login"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({status:500,message:"Internal Server error"});
    }
    
}