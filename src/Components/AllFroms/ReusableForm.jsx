

/* eslint-disable react/prop-types */
const ReusableForm = ({showHandaleClick, submitBtnText = 'Submit', children}) => {


    const handleLocalSubmoit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        showHandaleClick(data);
    }
 


  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmoit}>
        <input type="text" name="name" placeholder="Type your name" /> <br />
        <input type="email" name="email" placeholder="Your email" /> <br />
        <input type="password" name="password" placeholder="Your password" /> <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
