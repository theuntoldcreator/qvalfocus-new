import React from "react";

export const ApplicationCard = ({ application, onSelect, isSelected }: any) => {
  return (
    <div
      onClick={() => onSelect(application)}
      className={`p-4 border rounded-md cursor-pointer ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
    >
      <p className="font-semibold">{application.first_name} {application.last_name}</p>
      <p className="text-sm text-gray-600">{application.jobs?.title}</p>
    </div>
  );
};