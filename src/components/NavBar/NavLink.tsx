import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
interface Props {
    href:string,
    title:string,
    children?:any,
    svg?:React.ReactNode

}
const NavBar:NextPage<Props>=(props)=>{

    const router=useRouter();
    return <div onClick={()=>{router.push(props.href)}}>{props.svg} {props.title}</div>;
}
export default  NavBar;