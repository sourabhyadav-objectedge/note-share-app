import Card from "@/components/AllNotes/Card";
import styles from "@/styles/allNotes.module.scss";
import { GetServerSideProps, NextPage } from 'next';
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { allNotesActions } from "@/store/allNotesSlice";
import {useDispatch,useSelector} from 'react-redux';
import { ReduxStateType } from "@/store";
interface Props {
    notes:{author:string,note:string}[],
    error:boolean
};
const  AllNotes:NextPage<Props>=(props)=>
{
    const dispatch=useDispatch();
    const state=useSelector((s:ReduxStateType)=>s.allNotes);
    dispatch(allNotesActions.setNotes(props.notes));
    dispatch(allNotesActions.setError(props.error));
    let key=0;
    if(!state.error)
        return<>
                <h2 style={{textAlign:"center"}}>Notes across all users</h2>
                <hr/>
                <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        {props.notes.map((e:typeof props.notes[number])=><Card  key={key++}author={e.author}  text={e.note}/>)}
                    </div>
                </div>
            </>
    else 
        return <h1 style={{marginTop:"2rem",textAlign:"center"}}>An error occured on the server.</h1>

}
const getServerSideProps:GetServerSideProps=async ()=>{
    try{
        const dbClient=await clientPromise;
        const db = dbClient.db('notes-share');
        const tempResult=await db.collection('notes').find({}).toArray();
        const result=tempResult.map((e:{author:string,note:string,_id:ObjectId})=>({author:e.author,note:e.note}))
        //console.log(result);
        return {
            props:{
                notes:result,
                error:false,
                
            }
        }
        
    }
    catch(err){
        console.log(err);
        return {
            props:{
                notes:[],
                error:true
            }
            
        }
        
    }
    
}
export default AllNotes;
export {getServerSideProps};