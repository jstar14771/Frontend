import axios from "axios";
import { createContext } from "react";
import cookie from "js-cookie"
export const AuthCon=createContext(null)

export const EmpContext=(props)=>{

    const login=(lvalues)=>{
        axios.post("http://localhost:3001/auth/login",lvalues).then((res)=>{
            cookie.set("isLogin",true,{expires:3,path:"/"})
            cookie.set("role",res.data.user.role,{expires:3,path:"/"})
            alert(res.data.message)
        })
    }
    const logout=()=>{
        axios.post("http://localhost:3001/auth/logout",null,{
            withCredentials:true
        }).then((res)=>{
            const role=cookie.get("role")
            const isLogin=cookie.get("isLogin")
            if(role && isLogin) {
                cookie.remove("role",{path:"/"})
                cookie.remove("isLogin",{path:"/"})
            }
            alert(res.data.message)
        })
    }
    

    return(
        <AuthCon.Provider value={{login,logout}}>
            {props.children}
        </AuthCon.Provider>
    )
}