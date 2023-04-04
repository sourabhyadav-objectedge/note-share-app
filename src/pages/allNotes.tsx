import {useSession} from 'next-auth/react'
import Card from "@/components/AllNotes/Card"
import styles from "@/styles/allNotes.module.scss"
export default function AllNotes()
{
    
    const list:{note:string,author:string}[]=[
        {
            note:"Hi there was a technical error today in my work",
            author:"admin"
        },
        {
            note:"a random note",
            author:"sourabh"
        },
        {
            note:"another random note",
            author:"sachin"
        },
        {
            note:"This is a long note.This is a long note.This is a long note.This is a long note.This is a long note.This is a long note.This is a long note.This is a long note.This is a long note.This is a long note.",
            author:"sourabh"
        },
        {
            note:"Another note",
            author:"sourabh"

        },
        {
            note:"Another note",
            author:"sourabh"

        }     
    ]
    let key=0
    return<>
            <h2 style={{textAlign:"center"}}>Notes across all users</h2>
            <hr/>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    {list.map(e=><Card  key={key++}author={e.author}  text={e.note}/>)}
                </div>
            </div>
        </>

}