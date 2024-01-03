import style from "./contactForm.module.css";

const UpdateContact = ()=>{

    return (
        <>
            <div className={style.inputContainer}>
                <form >
                    <div className={style.inputFields}>
                        <label>Name : </label>
                        <input name="Name" placeholder="Name"/>
                    </div>
                    <div className={style.inputFields}>
                        <label>Email : </label>
                        <input name="Email" placeholder="Email"/>
                    </div>
                    <div className={style.inputFields}>
                        <label>Number : </label>
                        <input name="Number" placeholder="Number"/>
                    </div>
                    
                    <button type="submit" className={style.btn}>Update Contact</button>
                </form>
            </div>

        </>
    )
};

export default UpdateContact;