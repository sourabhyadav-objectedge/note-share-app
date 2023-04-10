import { useRouter } from "next/router";
import { GetServerSideProps,GetServerSidePropsContext,NextPage } from "next";
import styles from "@/styles/allNotes.module.scss";
import Card from '@/components/AllNotes/Card';
import clientPromise from '@/lib/mongodb';
import {ObjectId} from 'mongodb'
import { error } from "console";
interface Props {
    note:string,
    author:string,
    error:boolean
}

const Note:NextPage<Props>=(props)=>{
    const router=useRouter();
    if(props.error)
        return <h1 style={{textAlign:"center"}}>404 Not Found</h1>
    return<>
                <h2 style={{textAlign:"center"}}>Notes across all users</h2>
                <hr/>
                <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        <Card author={props?.author}  text={props?.note}/>
                    </div>
                </div>
            </>
}
const  getServerSideProps:GetServerSideProps=async(context:GetServerSidePropsContext)=>{
    let noteId=context.params?.noteId?.toString();
    console.log(noteId);
        
    try{
        if(noteId?.length!=12&&noteId?.length!=24)
            throw new Error("noteId is not of proper length");
        const dbClient=await clientPromise;
        const db = dbClient.db('notes-share');
        const queryObjectId=new ObjectId(noteId);
        const result=await db.collection('notes').find({_id:queryObjectId}).toArray();
        if(result.length==0)
            throw new Error("No result found");
        return {
            props:{
                note:result[0].note,
                author:result[0].author

            }
        } 
    }
    catch(err){
        console.log(err);
        return {
            props:{
                note:"",
                author:"",
                error:true
            }
        }
        
    }
    
}
export {getServerSideProps};
export default Note;