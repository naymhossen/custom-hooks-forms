import "./App.css";
import MainForm from "./Components/AllFroms/MainForm";
import Grandpa from "./Components/FamilyForm/Grandpa";
// import ReusableForm from "./Components/AllFroms/ReusableForm";
// import HookForm from './Components/Hooks/HookForm'
// import RefFrom from './Components/AllFroms/RefFrom'
// import StateFullFrom from './Components/AllFroms/StateFullFrom'

function App() {
  // const handaleSignup = (data) => {
  //   console.log("sign up data", data);
  // };

  // const handleUpdate = (data) => {
  //   console.log("profile update", data);
  // };

  return (
    <>
      <MainForm></MainForm>
      <Grandpa></Grandpa>
      {/* <StateFullFrom></StateFullFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"formTitle"} showHandaleClick={handaleSignup}>
        <div>
          <h2>Sing Up</h2>
          <p>Pleace sign up right now</p>
        </div>
      </ReusableForm>
      
      <ReusableForm
        formTitle={"Profile Update"}
        showHandaleClick={handleUpdate}
        submitBtnText="Update"
      >
        <div>
          <h2>Update Now </h2>
          <p>Pleace update right now your profile</p>
        </div>
      </ReusableForm> */}
      {/* <ReusableForm formTitle={'Profile Delite'} submitBtnText='Delite'></ReusableForm> */}
    </>
  );
}

export default App;
