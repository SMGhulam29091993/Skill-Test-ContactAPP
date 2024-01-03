import { createContext, useContext, useState } from "react";


export const contactContext = createContext();

export const useCustomContextHook = ()=>{
    const value = useContext(contactContext);
    return value;
};

export const ContactProvider = ({children})=>{

    const [users,setUsers] = useState([]);
    const [newContact,setNewContact] = useState({
        name : "", email : "", number : ""
    });
    

    return (
        <>
            <contactContext.Provider>
                {children}
            </contactContext.Provider>
        </>
    )
}