/* eslint-disable no-undef */
import { useEffect, useRef } from "react";

function RefFrom() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    useEffect( () => {
        nameRef.current.focus();
    },[])

    const showHandaleClick = (e) => {
        e.preventDefault();
        console.log(passRef.current.value);
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }
    return (
        <div>
            <form onSubmit={showHandaleClick}>
                <input ref={nameRef} type="text" name="name" /> <br /> <br />
                <input ref={emailRef} type="email" defaultValue={'xyz@gmail.com'} name="email" id=""/> <br /> <br />
                <input ref={passRef} type="password" name="password" id="" required/> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default RefFrom;