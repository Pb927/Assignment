import React from "react";

const SaveButton = ({ onSave }) => {
  return (
    <button
      type="button"
      className="bg-slate-500 rounded-xl text-white py-1 px-10 md:px-6 lg:px-8 xl:px-10 text-xl font-medium hover:bg-black shadow-xl"
      onClick={onSave}
    >
      Save
    </button>
  );
};

export default SaveButton;

