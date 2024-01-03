import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const contactContext = createContext();

export const useCustomContextHook = ()=>{
    const value = useContext(contactContext);
    return value;
};

export const ContactProvider = ({children})=>{

    // to show the addContact Form
    const [showAddForm, setShowAddForm] = useState(false);
    const handleAddSubmit  = (e)=>{
        e.preventDefault();
        setShowAddForm(!showAddForm);
        setShowUpdateForm(false);
    }

    // to show update contact form
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateDetails,setUpdateDetails] = useState({})
    const handleUpdateSubmit  = (user)=>{
        // e.preventDefault();
        setShowUpdateForm(true);
        setShowAddForm(false);
        setUpdateDetails(user)
    };
   
    const updateUser = async (id,newName,newEmail, newPhone)=>{
        const Update = {name:newName, email : newEmail, phone : newPhone}
        try{
            await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, Update);
            const updateContact = users.map(user=>
                user.id === id?{...user, ...Update}:user
            );
            setUsers(updateContact);            
        }catch(error){
            console.log("Error in updating the contact : ",error);
        }

    }


    // to fetch the users and show it in the list 
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                console.log(response.data)
                setUsers(response.data)
            }catch(error){
                console.log("Error in fetching user data : ",error)
            }
        };
        fetchUsers()
       
    },[]);


    // adding newContact
    const [newContact,setNewContact] = useState({
        name : "", email : "", phone : ""
    });

    const addContact = async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newContact);
            setUsers([...users, response.data])
            setNewContact({ name : "", email : "", phone : ""})
;        }catch(error){
            console.log("Error in adding contact : ", error);
        }
    }

    const contactContextValue = {
        users,showAddForm,showUpdateForm,newContact,updateDetails,
        setNewContact,handleUpdateSubmit,handleAddSubmit,addContact,updateUser,setShowUpdateForm
    }
    return (
        <>
            <contactContext.Provider value={contactContextValue}>
                {children}
            </contactContext.Provider>
        </>
    )
}