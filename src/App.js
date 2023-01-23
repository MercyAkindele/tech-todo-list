import "./App.css";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li className="d-flex col-lg-2 col-sm-3 text-align-center text-bg-light border-light p-2 m-2 rounded">
            <Link to="/new-tech-list">Create an Interview Prep List</Link>
          </li>          
          <li className="d-flex col-lg-1 col-md-2 col-sm-2 text-align-center text-bg-light border-light p-2 m-2 rounded">
            <Link to="/jobtype/fullStackEngineer">Full Stack </Link>
          </li>
          <li className="d-flex col-lg-1 col-md-2 col-sm-2 text-bg-light border-light p-2 m-2 rounded">
            <Link to="/jobtype/frontEndEngineer">Front End </Link>
          </li>
          <li className="d-flex col-lg-1 col-md-2 col-sm-2 text-bg-light border-light p-2 m-2 rounded">
            <Link to="/jobtype/backEndEngineer">Back End</Link>
          </li>
          <li className="d-flex col-lg-1 col-md-2 col-sm-2 text-bg-light border-light p-2 m-2 rounded">
            <Link to="/jobtype/uiUx">UI/UX</Link>
          </li>
          <li className="d-flex col-lg-1 col-md-2 col-sm-2 text-bg-light border-light p-2 m-2 rounded">
            <Link to="/jobtype/dataAnalyst">Data Analyst</Link>
          </li>
        </ul>
        
      </nav>
      <Outlet />
    </>
  );
}

export default App;
