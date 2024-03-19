
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
 function handleClick(){
  alert('button 1 clicked');
 }

 const handleClick2 = () =>{
  alert('button 2 clicked');
 }

 const addToNum=(num) =>{
  alert(num+num);
 }
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>


      <Users></Users>


      <Team></Team>


      <Counter></Counter>


      {/* inline event handler in jsx */}
      <button onClick={handleClick}>Click Me</button>  {/* in react jsx */}
      {/* <button onclick="handleClick()">Click Me</button> --> in normal html*/ } 
    <button onClick={handleClick2}>Click Again</button>
    <button onClick={()=>{alert('button 3 clicked')}}>Click Once Again</button>
    <button onClick={()=>{addToNum(3)}}>Add</button>
    </>
  )
}

export default App
