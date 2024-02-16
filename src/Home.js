import { useState } from "react";

const Home = () => {
    // let name = "Muhammad";
  
    // this will not change the name because its not reactive
    // we need to use a hook(useState)
    // const handleClick = () => {
    //    name = "Salihu";
    //    console.log(name);
    // }
   
    // Now this is  reactive
    const [name, setName] = useState('Muhammad');
    const [age, setAge] = useState(28);

    const handleClick = () => {
        setName('Salihu');
        if(age > 25) { setAge(30);}
        else {setAge(38);}
    }

    


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
     );
}
 
export default Home;