//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  //const names = ["vijay","vinay","lasarus","ravi"];
  const users = [
    {name:"bala" ,
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4blN7jswbF3rCl7S2baUBCwvNtHZJ7JaWw&usqp=CAU", },
    {name:"vijay", 
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9ldBnL7ntmA7xWSAjs0IEkG4F7Xlkmtj5w&usqp=CAU", },
    {name:"Lasarus", 
    pic:"https://wallpaperaccess.com/full/2213424.jpg",}
  ];
  return (
    <div className="App">
  {/*  {users.map((usr) =>
    <Welcome name={usr.name} pic={usr.pic} /> )} */}

    <AddColor />
    </div>
  );
};

function Msg (props) {
  // const name = "Lasarus";
  // console.log(props.name)
   return(
    <div> 
     <h1>Hello,{props.name} 🎊🎊🎉 </h1>
    </div> 
   );
 }


function AddColor() {
  const [color,setColor] = useState("plum");

  const styles = {
    background: color,
    fontSize:"20px"
  };
  return(
    <div> 
      <input 
      style = {styles} 
      type="text" 
      onChange={(event)=> setColor(event.target.value)}
      placeholder="Enter a color"
      value={color}
       />
    </div>
  );
}


function Counter() {
 // let like = 10;
 // const [state,setState] = useState(InitialValue);
 //camelCase = onclick => onClick
 const [like,setLike] = useState(0);
 const [disLike,setDisLike] = useState(0);
  return (
     <div>
      <button onClick={() =>{ setLike(like + 1)}}>👍 {like}</button>
      <button onClick={() =>{ setDisLike(disLike + 1)}}>👎 {disLike}</button>
     </div>
  )
}


function Welcome (props) {
  // const name = "Lasarus";
  // console.log(props.name)
   return(
    <div> 
     <img className ="profile-pic" src={props.pic} alt={props.name} />
     <h1>Hello,{props.name} 🎊🎊🎉 </h1>
     <Counter />
    </div> 
   )
 }






export default App;
