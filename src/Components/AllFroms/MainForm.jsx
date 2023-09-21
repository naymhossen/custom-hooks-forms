const MainForm = () => {

    const showHandaleClick = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            {/* <form onSubmit={showHandaleClick}>
                <input type="text" name="name" /> <br /> <br />
                <input type="email" name="email" id=""/> <br />
                <input type="submit" value="submit" />
            </form> */}
        </div>
    );
};

export default MainForm;