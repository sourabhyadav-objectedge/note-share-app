import {useSession} from 'next-auth/react'
import {useSelector,useDispatch} from 'react-redux'
import CrudCard from "@/components/CrudCard"
import styles from "@/styles/allNotes.module.scss"
import { useEffect } from 'react'
import { fetchMyNotes, myNotesActions} from '@/store/myNotesSlice'
import { crudCardActions } from '@/store/crudCardSlice'

export default function MyNotes()
{
    const {data:session,status}=useSession()
    const state=useSelector((s:any)=>s.myNotes);
    const deleted=useSelector((s:any)=>s.crudCard.deleted);
    const updated=useSelector((s:any)=>s.crudCard.updated);

    const dispatch=useDispatch<any>();
    useEffect(()=>{
        if(status==='authenticated'){
            dispatch(fetchMyNotes({author:session?.user?.name}));
            dispatch(crudCardActions.setDeleted(false));
            dispatch(crudCardActions.setUpdated(false));
        }
    },[status,deleted,updated]);
    let key=0;
    
    if(status==='loading'||state.loading)
        return <h2 style={{textAlign:"center"}}>Loading...</h2>;
    if(state.error)
        return <h2 style={{textAlign:"center"}}>An error occured while fetching your notes</h2>;
    if(status==='authenticated')
        return<>
                <h2 style={{textAlign:"center"}}>Notes by {session?.user?.name}</h2>
                <hr/>
                <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        {state.notes.map((e:any)=><CrudCard  key={key++}author={e.author} id={e._id} text={e.note}/>)}
                        {state.notes.length==0&&<h2 style={{textAlign:"center"}}>No notes found</h2>}
                    </div>
                </div>
                
            </>
    else return <h2 style={{textAlign:"center"}}>You need to be logged in to view/delete/edit your own notes</h2>
}