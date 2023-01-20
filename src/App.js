import "./App.css";
import {Link, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/new-tech-list">Create an Interview Prep List</Link>
          </li>
          <li>
            <Link to="/jobtype/fullStackEngineer">Full Stack </Link>
          </li>
          <li>
            <Link to="/jobtype/frontEndEngineer">Front End </Link>
          </li>
          <li>
            <Link to="/jobtype/backEndEngineer">Back End</Link>
          </li>
          <li>
            <Link to="/jobtype/uiUx">UI/UX</Link>
          </li>
          <li>
            <Link to="/jobtype/dataAnalyst">Data Analyst</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
