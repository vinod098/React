import './App.css';


 // Props Concept.

const Person = (props) =>{
  return(
    <>
    <h1>name : {props.name}</h1>
    <h2>Last Name : {props.lastname}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

export default Person;