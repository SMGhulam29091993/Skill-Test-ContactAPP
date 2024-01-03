import { useCustomContextHook } from "../Context";
import style from "./contact-list.module.css";

const ContactList = ({user})=>{
    const {handleUpdateSubmit} = useCustomContextHook();

    return (
        <>
            <div className={style.listContainer}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button className={style.btn} onClick={()=>handleUpdateSubmit(user)}>Edit</button>
                <button>Delete</button>
            </div>
        </>
    )
}
export default ContactList;