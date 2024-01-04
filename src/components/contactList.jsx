import { useCustomContextHook } from "../Context";
import style from "./contact-list.module.css";

const ContactList = ({user})=>{
    const {handleUpdateSubmit, Delete} = useCustomContextHook();

    return (
        <>
            <div className={style.listMain}>
                <div className={style.listContainer}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button className={style.btn} onClick={()=>handleUpdateSubmit(user)}>Edit</button>
                    <button  className={style.del}onClick={()=>Delete(user.id)}>Delete</button>
                </div>
            </div>
            
        </>
    )
}
export default ContactList;