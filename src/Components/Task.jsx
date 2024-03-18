// eslint-disable-next-line no-unused-vars
import React from "react";

export const Task = ({
  task,
  editTaskToggle,
  handleDelete,
  handleCompleted,
}) => {
  return (
    <>
      <div
        className={`${
          task.isCompleted ? "bg-gray-300" : "bg-white"
        } rounded-md pl-2 mb-3 transition ease-in-out delay-150 hover:-translate-y-1.5`}
      >
        <li className="flex items-center justify-center flex-row content-between ">
          {task.isCompleted ? (
            <>
              <span className=" flex-1 text-lg font-extrabold items-center tracking-widest line-through-thick">
                {task.input}
              </span>
              <button
                onClick={() => handleCompleted(task.id)}
                className="p-5 fa-regular fa-circle-check text-2xl font-bold bg-gray-200 h-1 flex items-center justify-center w-2 text-green-500"
              ></button>{" "}
            </>
          ) : (
            <>
              <span className=" flex-1 text-lg font-bold items-center tracking-widest">
                {task.input}
              </span>
              <button
                className="p-5 fa-regular fa-circle text-2xl bg-gray-200 h-1 flex items-center justify-center w-2"
                onClick={() => handleCompleted(task.id)}
              ></button>
            </>
          )}

          <button
            className="p-5 fa-solid fa-pen-to-square text-lg bg-blue-600 h-1 flex items-center justify-center w-2 hover:bg-blue-800"
            onClick={() => editTaskToggle(task.id)}
            disabled={task.isCompleted}
          ></button>
          <button
            className="p-5 fa-solid fa-trash bg-red-600 text-lg rounded-r-md h-1 flex items-center w-2 justify-center hover:bg-red-900"
            onClick={handleDelete}
          ></button>
        </li>
      </div>
    </>
  );
};
