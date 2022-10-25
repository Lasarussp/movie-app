//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <Welcome 
     name="bala" 
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4blN7jswbF3rCl7S2baUBCwvNtHZJ7JaWw&usqp=CAU" 
     />
     <Welcome 
     name="vijay" 
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9ldBnL7ntmA7xWSAjs0IEkG4F7Xlkmtj5w&usqp=CAU" 
     />
     <Welcome 
     name="Lasarus" 
     pic="https://wallpaperaccess.com/full/2213424.jpg" 
     /> 
    </div>
  );
}


function Welcome (props) {
 // const name = "Lasarus";
  return(
   <div> 
    <img className ="profile-pic" 
    src={props.pic}
    alt={props.name} />
    <h1>Hello,{props.name} 🎊🎊🎉 </h1>
    <Counter />
   </div> 
  )
}

function Counter() {
 // let like = 10;
 // const [state,setState] = useState(InitialValue);
 // camelCase = onclick => onClick
 const [like,setLike] = useState(0);
 const [disLike,setDisLike] = useState(0);
  return (
     <div>
      <button onClick={() =>{ setLike(like + 1)}}>👍 {like}</button>
      <button onClick={() =>{ setDisLike(disLike + 1)}}>👎 {disLike}</button>
     </div>
  );
};

export default App;
