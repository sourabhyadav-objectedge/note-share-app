import {useSession} from 'next-auth/react'
import {useSelector,useDispatch} from 'react-redux'
import CrudCard from "@/components/AllNotes/CrudCard"
import styles from "@/styles/allNotes.module.scss"
import { useEffect } from 'react'
import { fetchMyNotes} from '@/store/myNotesSlice'
export default function MyNotes()
{
    const {data:session,status}=useSession()
    const state=useSelector((s:any)=>s.myNotes);
    const dispatch=useDispatch<any>();
    useEffect(()=>{
        if(status==='authenticated'){
            dispatch(fetchMyNotes({author:session?.user?.name}));
        }
    },[status]);
    
    let key=0
    if(status==='loading'||state.loading)
        return <h2 style={{textAlign:"center"}}>Loading...</h2>
    
    if(status==='authenticated')
        return<>
                <h2 style={{textAlign:"center"}}>Notes by {session?.user?.name}</h2>
                <hr/>
                <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        {state.notes.map((e:any)=><CrudCard  key={key++}author={e.author}  text={e.note}/>)}
                    </div>
                </div>
            </>
    else return <h2 style={{textAlign:"center"}}>You need to be logged in to view/delete/edit your own notes</h2>
}