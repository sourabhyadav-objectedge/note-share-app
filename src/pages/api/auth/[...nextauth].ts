import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import axios from "axios";
export default NextAuth({
    session:{
        strategy:"jwt"
    },
    secret:process.env.JWT_SECRET,
    providers:[
        CredentialsProvider({
            name:"user and pass",
            credentials:{
                username:{label:"Username",type:"text",placeholder:"Username"},
                password:{label:"Password",type:"password",placeholder:"Password"}
                
            },
            async authorize(credentials)
            {   
               try{            
                    const response= await axios.post(`${process.env.VERCEL}api/authorizeUser`,{username:credentials?.username,password:credentials?.password});
                    return {name:response.data.username,id:"",email:""};
                }
                catch(err:any){
                    return null;
                }
            }
        })
    ]
});
