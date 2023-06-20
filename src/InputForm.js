export default function InputForm(props) {
  return (
    <>
      <label>{props.label}</label>
      <input placeholder={props.placeholder}></input>
    </>
  );
}
