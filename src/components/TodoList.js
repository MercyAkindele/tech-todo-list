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
    <div>
      <h1>What Tech Interview Prep Needs to be Done?</h1>
      <TodoForm jobId={jobId} />
    </div>
  );
}

export default TodoList;
