import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

export default function TaskColumn({ category, tasks, setTasks }) {
  const { setNodeRef } = useDroppable({ id: category });

  return (
    <div
      ref={setNodeRef}
      className=" bg-blue-50  p-4 rounded-lg shadow-md  min-h-[300px]"
    >
      <h3 className="text-2xl font-semibold mb-4">{category}</h3>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}
