
import { useCustomContextHook } from "../Context";
import style from "./contactForm.module.css";

const AddContact = ()=>{
    const {newContact,setNewContact,addContact} = useCustomContextHook()
    return (
        <>
            <div className={style.inputContainer}>
                <form onSubmit={addContact}>
                    <div className={style.inputFields}>
                        <label>Name : </label>
                        <input name="Name" placeholder="Name" 
                            value={newContact.name} 
                            onChange={(e)=>setNewContact({...newContact, name:e.target.value})}/>
                    </div>
                    <div className={style.inputFields}>
                        <label>Email : </label>
                        <input name="Email" placeholder="Email"
                            value={newContact.email} 
                            onChange={(e)=>setNewContact({...newContact,email:e.target.value})}/>
                    </div>
                    <div className={style.inputFields}>
                        <label>Number : </label>
                        <input name="Number" placeholder="Number" value={newContact.phone}
                            onChange={(e)=>{setNewContact({...newContact,phone : e.target.value})}}/>
                    </div>
                    
                    <button type="submit" className={style.btn}>Add Contact</button>
                </form>
            </div>

        </>
    )
};

export default AddContact;