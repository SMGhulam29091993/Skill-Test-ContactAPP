import ContactList from "./contactList"
import style from "./contact.module.css";
import AddContact from "./add-contact";
import UpdateContact from "./update-contact";

import { useCustomContextHook } from "../Context";

const ContactManager = ()=>{
    const {users,showAddForm,showUpdateForm,handleAddSubmit} = useCustomContextHook();

    return (
        <>
            <main>
                <button className={style.btn} onClick={handleAddSubmit}>{showAddForm?"Back":"Add Contact"}</button>
                {showAddForm?(<AddContact/>)
                :showUpdateForm?(<UpdateContact/>)
                :(<div className={style.contactManager}>
                    <h1>Contact Manager</h1>
                    <div className={style.contactDetail}>
                    {users.map((user,i)=>(
                        <ContactList key={i} user={user}/>
                    ))}
                    </div>
                    
                    
                </div>)}
                
            </main>
        </>
    )
};

export default ContactManager;
