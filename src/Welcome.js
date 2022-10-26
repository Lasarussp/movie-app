import { Counter } from './Counter';

function Welcome(props) {
  // const name = "Lasarus";
  // console.log(props.name)
  return (
    <div>
      <img className="profile-pic" src={props.pic} alt={props.name} />
      <h1>Hello,{props.name} 🎊🎊🎉 </h1>
      <Counter />
    </div>
  );
}
