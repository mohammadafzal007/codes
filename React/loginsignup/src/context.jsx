import {createContext,useState} from 'react';


export const AuthContext=createContext();
export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("usersdemo");
    const[authuser,setauthuser]=useState(initialAuthUser?JSON.parse(initialAuthUser):undefined)
    return (
        <>
        <AuthContext.Provider value={{authuser,setauthuser}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}


