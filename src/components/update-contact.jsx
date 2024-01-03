import { useState } from "react";
import { useCustomContextHook } from "../Context";
import style from "./contactForm.module.css";

const UpdateContact = () => {
    const { updateDetails, updateUser,setShowUpdateForm} = useCustomContextHook();

    const [newName,setNewName] = useState("" );
    const [newEmail,setNewEmail] = useState("");
    const [newPhone,setNewPhone] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const updateName = newName || updateDetails.name
        const updateEmail = newEmail || updateDetails.email
        const updatePhone = newPhone || updateDetails.phone
        updateUser(updateDetails.id, updateName, updateEmail, updatePhone);
        setShowUpdateForm(false)
    }

    return (
        <div className={style.inputContainer}>
        <form onSubmit={handleSubmit}>
            <div className={style.inputFields}>
            <label>Name : </label>
            <input
                name="Name" placeholder={updateDetails.name}
                value={newName}
                onChange={(e)=>setNewName(e.target.value )}
            />
            </div>
            <div className={style.inputFields}>
            <label>Email : </label>
            <input
                name="Email" placeholder={updateDetails.email}
                value={newEmail}
                onChange={(e)=>setNewEmail(e.target.value )}
            />
            </div>
            <div className={style.inputFields}>
            <label>Number : </label>
            <input
                name="Number" placeholder={updateDetails.phone}
                value={newPhone}
                onChange={(e)=> setNewPhone(e.target.value )}
            />
            </div>
            <button type="submit" className={style.btn}>
            Update Contact
            </button>
        </form>
        </div>
    );
};

export default UpdateContact;
