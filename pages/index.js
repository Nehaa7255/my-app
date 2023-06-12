export default function Home() {
//we cannot use our variable in react
//we have to use react variable  i.e useState
//useState -> reat -> virtual dom ->real dom



  //Plane javascript
let b="Neha";
//let a=new Date().toLocaleTimeString();

//useState
const[count,setCount]=useState(1);
setInterval(()=>{
setCount(count+1);
},1000);


  return(
    <div>
    {<h1>{b}</h1> }
    <h1>{a}</h1>
      <h1>Hello</h1> 
      <h1>{count}</h1>
    </div>
  );
  // <div>Hello World!</div>;
  }   

  
  //HTML/CSS/JAVASCRIPT -> JSX Elements