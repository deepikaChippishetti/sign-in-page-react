import "./App.css";
import Details from "./Details";
import { Action } from "./data";
const button = {
  cancel: "Cancel",
  create: "Create User",
};
export default function App() {
  return (
    <div id="sign-in-page" data-testid="div">
      <h1>Sign-in user</h1>
      <p>Please fill the below details</p>
      <>
        <Details />
        <br></br>
        <div id="action">
          <Action btn={button.cancel} />
          <Action btn={button.create}/>
        </div>
      </>
    </div>
  );
}
