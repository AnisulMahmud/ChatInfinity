import React from "react";

const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-50">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-200"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-50">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-200"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
