import classes from "@/styles/about.module.scss"
export default function About()
{
    return <div className={classes.container}>
    <h2 className={classes.heading}>About</h2>
    <hr/>
    <ul  className={classes.list}>
        <li>You can make notes and share them!</li>
        <li>You can see notes shared by others at one place</li>
        <li>You must be logged in to create a note</li>
        <li>You can view shared notes without logging in!</li>
        <li>All username and passwords are generated by us just like in Founders Network</li>
        <li>We believe in free Society hence here we post some username and passwords for you:</li>
        <br/>
        <br/>
        <table className={classes.tables}>
            <thead>
                <tr><th>Username</th><th>Password</th></tr>
            </thead>
            <tbody>
                    <tr><td>admin</td><td>admin@1234</td></tr>
                    <tr><td>sachin</td><td>sachin@1234</td></tr>
                    <tr><td>sourabh</td><td>sourabh@1234</td></tr>
                    <tr><td>other</td><td>passwords@1234</td></tr>
            </tbody>
        </table>
        <h2 className={classes.enjoy}>Enjoy!</h2>
        
    </ul>
    </div>
}