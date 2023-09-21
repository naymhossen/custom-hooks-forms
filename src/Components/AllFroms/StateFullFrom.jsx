import { useState } from "react";

const StateFullFrom = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState('naym');
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 8 ){
        setError('password must be 8 characters')
    }else{
        setError('')
        console.log(name, email, password);
    }
  };
  const nameChanged = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={nameChanged} type="text" name="name" /> <br /> <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" /> <br /> <br />
        <input onChange={passwordChange} type="password" name="password" id="" required/> <br />
        <input type="submit" value="submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StateFullFrom;
