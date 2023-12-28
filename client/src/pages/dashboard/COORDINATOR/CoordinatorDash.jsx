import React from "react";
import styles from "../student/styles.module.css";
import Header from "../../../components/ELEMENTS/Header/Header";
import CoordinatorLayout from "../../../layout/coordinator/layout";
import ReusableTable from "../../../components/ELEMENTS/Table/Table";

const CoordinatorDash = () => {
  const tableData = [
    {
      Name: "Alice",
      Company: "Company A",
      Field: "IT",
      Phone: "123-456-7890",
      Email: "alice@example.com",
      ActiveIntern: "Inactive", // Using a string to represent the status instead of a boolean
    },
    {
      Name: "Bob",
      Company: "Company B",
      Field: "Marketing",
      Phone: "987-654-3210",
      Email: "bob@example.com",
      ActiveIntern: "Active",
    },
    {
      Name: "Charlie",
      Company: "Company C",
      Field: "Finance",
      Phone: "111-222-3333",
      Email: "charlie@example.com",
      ActiveIntern: "Inactive",
    },
    {
      Name: "David",
      Company: "Company D",
      Field: "Sales",
      Phone: "444-555-6666",
      Email: "david@example.com",
      ActiveIntern: "Active",
    },
    {
      Name: "David",
      Company: "Company D",
      Field: "Sales",
      Phone: "444-555-6666",
      Email: "david@example.com",
      ActiveIntern: "Active",
    },
    {
      Name: "David",
      Company: "Company D",
      Field: "Sales",
      Phone: "444-555-6666",
      Email: "david@example.com",
      ActiveIntern: "Active",
    },
    // Add more objects as needed
  ];

  const tableColumns = [
    "Name",
    "Company",
    "Field",
    "Phone",
    "Email",
    "ActiveIntern",
  ];

  return (
    <CoordinatorLayout>
      <div className="grid grid-cols-5 p-5 gap-y-16">
        <div className="col-span-5 lg:col-span-3 flex flex-col gap-3">
          <Header
            text={"Overview"}
            fontSize={"20px"}
            fontWeight={"900"}
            color={"#003976"}
          />
          <Header
            text={"Supervisor"}
            fontSize={"16px"}
            fontWeight={"900"}
            color={"#003976"}
          />
          <ReusableTable data={tableData} columns={tableColumns} />
        </div>
        <div className="col-span-5 lg:col-span-2">
          <section className={styles.calendar}></section>
        </div>
        <div className="col-span-5">
          <Header
            text={"Internships"}
            fontSize={"16px"}
            fontWeight={"900"}
            color={"#003976"}
          />
          <ReusableTable data={tableData} columns={tableColumns} />
        </div>
        <div className="col-span-5">
          <Header
            text={"Students"}
            fontSize={"16px"}
            fontWeight={"900"}
            color={"#003976"}
          />
          <ReusableTable data={tableData} columns={tableColumns} />
        </div>
      </div>
    </CoordinatorLayout>
  );
};

export default CoordinatorDash;
