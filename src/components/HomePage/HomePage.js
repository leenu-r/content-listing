import "./HomePage.css";
import {Link} from 'react-router-dom';
const HomePage = () => {
  return (
    <>
      <h1>Movie Listing - Categories</h1>
      <p>Select category from the below list:</p>

      <ul>
        <li><Link to='/romanticcomedy'>Romantic Comedy</Link></li>
        {/* <li>Romantic Comedy</li> */}
      </ul>
    </>
  );
};
export default HomePage;
