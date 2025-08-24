import React from "react";

export const ApplicationDetail = ({ application }: any) => {
  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-xl font-bold">{application.first_name} {application.last_name}</h3>
      <p><strong>Email:</strong> {application.email}</p>
      <p><strong>Applying for:</strong> {application.jobs?.title}</p>
    </div>
  );
};