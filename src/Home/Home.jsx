import { Link } from "react-router-dom";
import AddACoffee from "./AddACoffee/AddACoffee";


const Home = () => {
    
    
    return (
        <div>
           
            <button className="btn btn-accent"> <Link to='/coffee'>All Coffee</Link></button>
            
            <AddACoffee></AddACoffee>
        </div>
    );
};

export default Home;