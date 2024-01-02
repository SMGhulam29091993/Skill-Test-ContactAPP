import ContactList from "./contactList"
import style from "./contact.module.css";


const ContactManager = ()=>{

    return (
        <>
            <main>
                <div className={style.contactManager}>
                    <h1>Contact Manager</h1>
                    <ContactList/>
                </div>
            </main>
        </>
    )
};

export default ContactManager;
