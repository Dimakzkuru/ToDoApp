// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import react, { useState, useRef, useEffect } from "react";
export const EditForm = ({ task, editTask, isFocused }) => {
  const [value, setValue] = useState(task.input);
  const inputRef = useRef(null);
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-3 mb-5"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder=""
        className="w-full rounded-md bg-white  text-md font-semibold flex-1 p-1 h-8 focus-within:bg-gray-300 "
        value={value}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="rounded-lg bg-green-600 h-7 transition ease-in-out delay-150  hover:-translate-y-0.5 flex px-2 font-semibold text-white justify-center align-center flex  "
      >
        Save Changes
      </button>
    </form>
  );
};
