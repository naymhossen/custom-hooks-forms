import UseInputState from "./UseInputState";

const HookForm = () => {
  // const [name, handleNameChange] = UseInputState("Rajoni Kanto");

  // const nameState = UseInputState("Rajoni Kanto");
  const emailState = UseInputState("Rajoni@Kanto.com");


  const showHandaleClick = (e) => {
    console.log("object", emailState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={showHandaleClick}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> <br /> <br /> */}
        <input {...emailState} type="email" name="email" id="" /> <br /> <br />
        <input type="password" name="password" id="" /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
