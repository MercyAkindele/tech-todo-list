import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom"
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const premadeTodos = require("../preMadeTodoList.json")

export async function loader({ params }) {
  const jobId = params.jobId;
  return premadeTodos[jobId] ? premadeTodos[jobId].todos : [];
}

function TodoList() {

  const { jobId } = useParams();
  
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-12 border-light rounded">
          <div className="border-bottom border-secondary-subtle">
            <h3 className="py-2">Name of Job type</h3>
          </div>
          <div className="border-bottom border-secondary-subtle">
            <h3 className="pt-2">Latest Job Activity</h3>
            <ul className="pb-2">
              <li>Application submitted</li>
            </ul>
          </div>
          <div>
            <h3 className="pt-2">Activity checklist</h3>
            <h4 className="pt-2">LinkedIn</h4>
            <ul>
              <li ></li>
              <li ></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h4 className="pt-2">Follow up</h4>
            <ul>
              <li>phone call with recruiter</li>
              <li>email recruiter</li>
              <li>text recruiter</li>
            </ul>
          </div>
          <div>
            <h4 className="pt-2">Additional resources</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h4>What Tech Interview Prep Needs to be Done?</h4>
            <TodoForm jobId={jobId} />

          </div>

        </div>
      </div>
    </div>
  );
}

export default TodoList;
