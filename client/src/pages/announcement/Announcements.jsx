import React, { useState } from "react";
import { Modal, TextField, Button, Typography } from "@mui/material";
import { RiPencilLine } from "react-icons/ri";
import CoordinatorLayout from "../../layout/coordinator/layout";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { RiMoreFill } from "react-icons/ri"; // Assuming you have imported the three-dot icon
import { useFormik } from "formik";
import * as Yup from "yup";

const AnnouncementPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Date is required"),
    author: Yup.string().required("Author is required"),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      author: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here, for example, submit data or close the modal
      console.log(values);
      handleModalClose(); // Close the modal after form submission (you can replace this with your logic)
      resetForm(); // Reset form values after submission
    },
  });

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [announcements, setAnnouncements] = useState([
    {
      date: "January 1, 2024",
      time: "10:00 AM",
      name: "John Doe",
      title: "New Announcement 1",
      description: "Description of the announcement 1...",
    },
    {
      date: "February 15, 2024",
      time: "2:30 PM",
      name: "Jane Smith",
      title: "New Announcement 2",
      description: "Description of the announcement 2...",
    },
    {
      date: "March 5, 2024",
      time: "11:45 AM",
      name: "Alice Johnson",
      title: "New Announcement 3",
      description: "Description of the announcement 3...",
    },
    {
      date: "April 20, 2024",
      time: "9:00 AM",
      name: "Bob Brown",
      title: "New Announcement 4",
      description: "Description of the announcement 4...",
    },
    {
      date: "May 10, 2024",
      time: "3:15 PM",
      name: "Emily Davis",
      title: "New Announcement 5",
      description: "Description of the announcement 5...",
    },
  ]);

  const AnnouncementCard = ({ date, time, name, title, description }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex gap-x-3">
        {/* Left section */}
        <div className="flex flex-col mr-4">
          <p className="text-gray-500">{date}</p>
          <p className="text-gray-500">{time}</p>
          <p>{name}</p>
        </div>
        <div className="w-[1px] bg-[#C3C4C3]"></div>
        {/* Right section */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-lg font-semibold text-[#003976] mb-2">{title}</h2>
          <p className="text-[#003976]">{description}</p>
        </div>
        <div>
          <IconButton onClick={handleClick}>
            <RiMoreFill />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}>
            {/* Menu items */}
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </div>
      </div>
    );
  };

  return (
    <CoordinatorLayout>
      <div className="flex flex-col h-screen">
        {/* Top Section */}
        <div className="p-4 flex items-start">
          <button
            className="bg-[#FCB131] text-003976 rounded-full py-3 px-4 flex items-center"
            onClick={handleModalOpen}>
            <RiPencilLine className="mr-1" />
            Add Announcement
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex-1 flex flex-col overflow-auto p-5">
          <h1 className="text-[#003976] font-bold text-3xl my-5">
            Announcments
          </h1>
          {announcements.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              date={announcement.date}
              time={announcement.time}
              name={announcement.name}
              title={announcement.title}
              description={announcement.description}
            />
          ))}
        </div>

        {/* Modal */}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          className="flex items-center justify-center">
          <div className="bg-white p-4 h-[50vh] w-[60vh]">
            <div className="p-4 h-full w-full flex flex-col items-start justify-center">
              <h1 className="text-[#003976] font-bold text-3xl my-5">
                Add Announcments
              </h1>

              <form onSubmit={formik.handleSubmit} className="flex gap-5">
                <div className="bg-[#E5EBF1] px-10 flex-1 py-5">
                  <div className="flex flex-col gap-2">
                    <TextField
                      label="Title"
                      className="bg-white"
                      {...formik.getFieldProps("title")}
                      error={formik.touched.title && formik.errors.title}
                      helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                      label="Date"
                      className="bg-white"
                      {...formik.getFieldProps("date")}
                      error={formik.touched.date && formik.errors.date}
                      helperText={formik.touched.date && formik.errors.date}
                    />
                    <TextField
                      label="Author"
                      className="bg-white"
                      {...formik.getFieldProps("author")}
                      error={formik.touched.author && formik.errors.author}
                      helperText={formik.touched.author && formik.errors.author}
                    />
                  </div>
                </div>
                <div className="bg-[#E5EBF1] px-10 flex-1 py-5">
                  <TextField
                    label="Description"
                    className="bg-white"
                    multiline
                    rows={6}
                    {...formik.getFieldProps("description")}
                    error={
                      formik.touched.description && formik.errors.description
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </div>
              </form>
              <button
                className="bg-[#003976] text-white mt-5 px-8 py-3 rounded-full"
                type="submit">
                Post Announcement
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </CoordinatorLayout>
  );
};

export default AnnouncementPage;
