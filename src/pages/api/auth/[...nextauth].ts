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
               try{  
                    const credential:{username:string,password:string}|undefined=
                    userLogins.find(login=>login.username===credentials?.username&&login.password===credentials?.password);
                    if(credential!==undefined)
                    {
                        return {name:credentials?.username,id:"",email:""};
                    }
                    else return null;
                    
                }
                catch(err:any){
                    return null;
                }
            }
        })
    ]
});
