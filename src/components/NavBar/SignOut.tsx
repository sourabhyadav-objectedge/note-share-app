import {signOut } from 'next-auth/react'
const SignOut=()=>
{
    
    const signOutHandler:()=>void = async()=>{
        await signOut({callbackUrl:process.env.VERCEL});
    }
    return <div onClick={signOutHandler}><svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Log Out</title><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>Sign out</div>
}
export default SignOut;