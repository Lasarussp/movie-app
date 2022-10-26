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

  const movieList =  [
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ];
  

  return (
    <div className="App">
  {/*  {users.map((usr) =>
    <Welcome name={usr.name} pic={usr.pic} /> )} */}

   {/*<AddColor /> */}
     <div className='movie-list-container'>
     {movieList.map((mv)=>(<Movie movie={mv} />))}
     </div>
    </div>
  );
};

function Movie({movie}) {
  return <div className='movie-container'>
       <img src={movie.poster} alt={movie.name} className="movie-poster" />
       <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
       {/* <Counter /> */}
       </div>
}
  










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
  const INITIAL_COLOR_LIST = ["pink","plum","purple"]
  const [colorList,setColorList] = useState(INITIAL_COLOR_LIST);
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
       {/*copy the colorlist & add color */}
       <button onClick={() => setColorList([...colorList,color])}>Add Color</button>
       {colorList.map((clr)=>(<ColorBox color={clr} />))}

  
    </div>
  );
}


function ColorBox ({ color }) {
  const styles = {
    background: color,
    height: "50px",
    width: "250px",
    marginTop: "10px",
  }
  return (<div style={styles}></div>)
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
