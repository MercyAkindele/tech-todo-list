import { useParams } from "react-router-dom";
import TodoList from "./TodoList";

export default function Practice() {
  const { jobId } = useParams();

  return <TodoList jobId={jobId} eventType="premade" />;
}
