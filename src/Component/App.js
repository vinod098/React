
import './App.css';
import Person from './Person';
import Counter from './Counter';


const App = ()=> {
  const name= "Vinod";
  const isName = false;
  return (
    <div className="App">
      <p>Basic Concept</p>
      <h1>Hello {isName ? name : 'Guest'}</h1>
      {
        // if we want to show profile if user login else
        //  other things show then we can do like this 
        name?(
        <>
        {name}
        </>) : (<>
        <p>There is no name </p>
        </>)
      }

      <p>props is like a argument of a component</p>
      <Person name={'johny'} lastname ={'depp'} age={30} />
      <Person />
      <p>Hookks - useState , useEffect ;  Events</p>
      <p>State in react is a plain javascript objectused by react 
        to represent a piece of information about the component current situation
         - for Dynamic changes </p>
         <p>through useEffect we can call some code if something happens in UI</p>
      <Counter />
    </div>
  );
}

export default App;
