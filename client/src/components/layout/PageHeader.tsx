import React from "react";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
};

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
};