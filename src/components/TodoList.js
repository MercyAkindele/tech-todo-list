import "../App.css";
import { useParams } from "react-router-dom"
import TodoForm from "./TodoForm";


const premadeTodos = require("../preMadeTodoList.json")

export async function loader({ params }) {
  const jobId = params.jobId;
  return premadeTodos[jobId] ? premadeTodos[jobId].todos : [];
}

function TodoList() {

  const { jobId } = useParams();
  const jobName = premadeTodos[jobId]?premadeTodos[jobId].name:null;

  return (
    <div className="container">
      <div className="row">
        <div className="list-layout col col-lg-12 text-bg-light border-light p-4 rounded">
          <div className="border-bottom border-secondary-subtle">
            <h3 className="py-2">{jobName}</h3>
          </div>
          <div className="border-bottom border-secondary-subtle">
            <h3 className="py-2">Latest Job Activity</h3>
            <ul>
              <li>Application submitted</li>
            </ul>
          </div>
          <div>
            <h4 className="py-2">What Tech Interview Prep Needs to be Done?</h4>
            <TodoForm jobId={jobId} />

          </div>

        </div>
      </div>
    </div>
  );
}

export default TodoList;
