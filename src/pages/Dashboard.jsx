import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import TaskBoard from "../components/Taskboard";
import { authContext } from "../AuthProvider/AuthProvider";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(authContext);

  // Fetch tasks from backend
  useEffect(() => {
    if (user?.email) {
      const fetchTasks = async () => {
        const { data } = await axiosPublic.get(`/task/${user?.email}`);
        setTasks(data);
      };
      fetchTasks();
    }
  }, [user]);

  // Handle new task submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = "To-Do"; // Default category
    const timestamp = new Date();

    const taskData = {
      title,
      description,
      category,
      timestamp,
      email: user?.email,
    };

    try {
      const { data } = await axiosPublic.post("/tasks", taskData);
      if (data.insertedId) {
        toast.success("Task added successfully");
        setTasks((prev) => [...prev, { ...taskData, _id: data.insertedId }]);
      }
      form.reset();
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  return (
    <div
      className="flex flex-col w-11/12 mx-auto items-center mt-20 bg-cover bg-center min-h-screen p-10"
      style={{ backgroundImage: "url('/image.png')" }} // Make sure the image is in the public folder
    >
      {/* Task Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 border p-6 rounded-lg shadow-lg w-full max-w-3xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Add a New Task
        </h2>

        {/* Form in Horizontal Layout */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            required
            maxLength={50}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="description"
            placeholder="Task Description (optional)"
            maxLength={200}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="btn bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Add Task
          </button>
        </div>
      </form>

      {/* Task Board */}
      <TaskBoard
        tasks={tasks.filter((task) => task.email === user?.email)}
        setTasks={setTasks}
      />
    </div>
  );
}
