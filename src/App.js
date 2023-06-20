import "./App.css";
import { Button } from "./Button";
// import SignInForm from "./Details";
import { Header } from "./Header";
import InputForm from "./InputForm";

export default function App() {
  return (
    <>
      <Header />
      <InputForm
        type={"text"}
        placeholder={"Enter first name"}
        label={"First Name"}
      />
      <InputForm
        type={"text"}
        placeholder={"Enter last name"}
        label={"Last Name"}
      />
      <br />
      <br />
      <InputForm
        type={"email"}
        placeholder={"e.g jhon.smith@org.name"}
        label={"Email"}
      />
      <InputForm type={"tel"} placeholder={"+91"} label={"Phone Number"} />
      <div id="button">
        <Button name={"Cancel"} />
        <Button name={"Create User"} />
      </div>
    </>
  );
}
