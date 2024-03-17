// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { EditForm } from "./EditForm";
import { DeleteModal } from "./DeleteModal";

export function ToDoFormLocalStorage() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    const newTask = [
      ...tasks,
      { id: uuidv4(), input: task, isCompleted: false, isEditing: false },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  };
  const editTaskToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
    setIsInputFocused(true);
  };

  const editTask = (input, id) => {
    const newTask = tasks.map((task) => {
      return task.id === id
        ? { ...task, input, isEditing: !task.isEditing }
        : task;
    });
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
    setIsInputFocused((prev) => !prev);
  };
  const handleDelete = (taskId) => {
    setShowModal(true);
    setSelectedTaskId(taskId);
  };
  const toggleCompleted = (id) => {
    const newTask = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  return (
    <section className="m-auto sm:w-[80%] xl:w-[40%] bg-slate-900 drop-shadow-lg rounded-lg  mt-20 p-3 z-40">
      <div className="py-5 m-5 underline mb-5 text-slate-500">
        <h1 className="font-[Anton] text-bold text-5xl flex items-center justify-center  text-slate-100 w-25 tracking-widest">
          To Do List
        </h1>
      </div>
      <Form addTask={addTask} disabled={isInputFocused} />
      {tasks.map((task) => {
        return task.isEditing ? (
          <EditForm
            key={task.id}
            task={task}
            editTask={editTask}
            isFocused={isInputFocused}
          />
        ) : (
          <Task
            task={task}
            tasks={tasks}
            key={task.id}
            editTaskToggle={editTaskToggle}
            setTasks={setTasks}
            handleDelete={() => handleDelete(task.id)}
            handleCompleted={toggleCompleted}
          />
        );
      })}
      {showModal && (
        <DeleteModal
          tasks={tasks}
          setTasks={setTasks}
          task={tasks.find((task) => task.id === selectedTaskId)}
          key={selectedTaskId}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
}
