// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import react, { useState } from "react";

export const Form = ({ addTask, disabled }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex items-center justify-center mb-10"
    >
      <fieldset
        disabled={disabled}
        className="flex items-center w-full justify-center"
      >
        <input
          type="text"
          placeholder="Write a task here"
          className="w-6/12 rounded-md bg-white  text-lg font-bold  p-2 h-10 mr-10 "
          value={value}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="rounded-lg bg-green-600 transition ease-in-out delay-150  hover:-translate-y-0.5 px-2 font-sans font-semibold text-white h-11 "
        >
          Add Task
        </button>
      </fieldset>
    </form>
  );
};
