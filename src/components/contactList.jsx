import style from "./contact-list.module.css";

const ContactList = ()=>{

    return (
        <>
            <div className={style.listContainer}>
                <p>Name</p>
                <p>Email</p>
                <p>Number</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </>
    )
}
export default ContactList;