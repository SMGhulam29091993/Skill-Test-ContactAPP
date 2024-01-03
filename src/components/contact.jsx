import ContactList from "./contactList"
import style from "./contact.module.css";
import AddContact from "./add-contact";
import UpdateContact from "./update-contact";

const ContactManager = ()=>{

    return (
        <>
            <main>
                <UpdateContact/><AddContact/>
                <div className={style.contactManager}>
                    <h1>Contact Manager</h1>
                    <ContactList/>
                </div>
            </main>
        </>
    )
};

export default ContactManager;
