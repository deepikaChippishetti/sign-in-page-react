const person = {
    firstName: 'Enter first name',
    lastName:'Enter last name' ,
    emailId:"e.g jhon.smith@org.name",
    phoneNumber:"+91"
    };
export default function Details(){
    return (
        <> 
        <label>First Name</label>
        <input type="text" placeholder={person.firstName} ></input>
        <label>Last Name</label>
        <input type="text" placeholder={person.lastName}></input><br></br>
        <label>Email</label>
        <input type="text" placeholder={person.emailId}></input>
        <label>Phone Number</label>
        <input type="text" placeholder={person.phoneNumber}></input>
        </>
    );
}
