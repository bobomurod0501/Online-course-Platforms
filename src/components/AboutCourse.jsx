import React, { useState } from "react";
import { Box } from "@mui/material/";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CodeIcon from "@mui/icons-material/Code";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PersonIcon from "@mui/icons-material/Person";
import Modal from "@mui/material/Modal";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
// import Button from "@mui/material/Button";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const fetchData = async () => {
  return await axios.get("http://localhost:3000/courses");
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: 7,
};

function AboutCourse() {
  // const [openSnackbar, setOpenSnackbar] = useState(false);

  // const handleClick = () => {
  //   setOpenSnackbar(true);
  // };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

    const [state1, setState] = useState({
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal } = state1;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const param = useParams();

  const [openLoading, setOpenLoading] = useState(false);
  const handleCloseLoading = () => {
    setOpenLoading(false);
  };
  const handleOpenLoading = () => {
    setOpenLoading(true);
  };

  const { isLoading, isError, error, data } = useQuery("course", fetchData);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  const filteredData = data?.data.filter((el) => el.id == param.courseId);

  const validate = Yup.object({
    fName: Yup.string()
      .min(1, "Must be 1 characters or more")
      .required("Name is required"),
    lName: Yup.string()
      .min(1, "Must be 1 characters or more")
      .required("Last name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.number()
      .typeError("Enter valid phone number")
      .min(6, "Must be 6 characters or more")
      .required("Phone number is required"),
    password: Yup.number()
      .min(6, "Must be 6 characters or more")
      .required("Password is required"),
    age: Yup.number().typeError("Enter your age").required("Age is required"),
    gender: Yup.string()
      .min(1, "Must be 1 characters or more")
      .required("Gender is required"),
  });

  const loadingPage = () => {
    setOpenLoading(true);
    setTimeout(() => {
      setOpenLoading(false);
      handleClickSnackbar();
    }, 2000);
  };

  return (
    <div className="component">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="This Snackbar will be dismissed in 5 seconds."
        severity="success"
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          severity="success"
          onChange={handleCloseSnackbar}
          variant="filled"
          sx={{ width: "100%" }}
        >
         Congratulations! You are enrolled the course
        </Alert>
      </Snackbar>
      <div>
        <Button onClick={handleOpenLoading}>Show backdrop</Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openLoading}
          onClick={handleCloseLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div className="headerAboutCourse">
        <img className="teacherImg" src={filteredData[0].tImage} alt="" />
        <div>
          <h1 className="heroTitle">
            Welcome to my <br /> online{" "}
            <span className="codeName">{filteredData[0].shortName}</span>{" "}
            courses
          </h1>
          {/* <p className="loremTxt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id commodi
            quam perferendis nam animi sapiente atque consequuntur,
          </p> */}
        </div>
      </div>
      <div id="backBtn">
        <Link to={"/home"}>
          {/* <Button variant="outlined">
            <ArrowBackIcon />
            Back
          </Button> */}
          <button className="back">
            <a>Go Back</a>
          </button>
        </Link>
        <button onClick={handleOpen} className="enrollBtn">
          <span className="text">Enroll in the course</span>
        </button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <Formik
                  validationSchema={validate}
                  initialValues={{
                    fName: "",
                    lName: "",
                    email: "",
                    phone: "",
                    age: "",
                    password: "",
                    gender: "",
                  }}
                  onSubmit={(values) => {
                    loadingPage();
                    setOpen(false);
                    console.log(values);
                  }}
                >
                  {(props) => (
                    <div>
                      <Form>
                        <div className="modalBrandBox">
                          <div className="madalBrand">
                            <img
                              className="madalImg"
                              src="https://parspng.com/wp-content/uploads/2022/11/bookpng.parspng.com-5.png"
                              alt=""
                            />
                            <h1>Online Course Registration</h1>
                          </div>
                          <div onClick={handleClose}>
                            <CloseSharpIcon
                              sx={{ color: "red", fontSize: 40 }}
                            />
                          </div>
                        </div>
                        <div className="line2"></div>
                        <Box
                          // component="form"
                          sx={{
                            width: 650,
                            display: "flex",
                            //  alignItems:"flex-start",
                            //  justifyContent:"space-around",
                            gap: "50px",
                            marginLeft: "50px",
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div className="modalLeft">
                            <TextField
                              fullWidth
                              id="outlined-basic"
                              name="fName"
                              label="Enter your name"
                              variant="outlined"
                              value={props.values.fName}
                              onChange={props.handleChange}
                              helperText={<ErrorMessage name="fName" />}
                              error={props.errors.fName && props.touched.fName}
                            />
                            <TextField
                              fullWidth
                              id="outlined-basic"
                              name="lName"
                              label="Enter your last name"
                              variant="outlined"
                              value={props.values.lName}
                              onChange={props.handleChange}
                              helperText={<ErrorMessage name="lName" />}
                              error={props.errors.lName && props.touched.lName}
                            />
                            <TextField
                              fullWidth
                              name="email"
                              id="outlined-basic"
                              label="Enter your email"
                              variant="outlined"
                              value={props.values.email}
                              onChange={props.handleChange}
                              helperText={<ErrorMessage name="email" />}
                              error={props.errors.email && props.touched.email}
                            />

                            <div className="modalBtns">
                              <button type="submit" className="submitBtn">
                                {" "}
                                Register
                              </button>
                              <button type="reset" class="resetBtn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-arrow-repeat"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                                  ></path>
                                </svg>
                                Refresh
                              </button>
                            </div>
                          </div>
                          <div className="modalRight">
                            <TextField
                              fullWidth
                              id="outlined-basic"
                              label="Enter your phone number"
                              variant="outlined"
                              name="phone"
                              value={props.values.phone}
                              onChange={props.handleChange}
                              helperText={<ErrorMessage name="phone" />}
                              error={props.errors.phone && props.touched.phone}
                            />
                            <TextField
                              fullWidth
                              type="number"
                              id="outlined-basic"
                              label="Enter your age"
                              variant="outlined"
                              name="age"
                              value={props.values.age}
                              onChange={props.handleChange}
                              helperText={<ErrorMessage name="age" />}
                              error={props.errors.age && props.touched.age}
                            />
                            <TextField
                              fullWidth
                              type="password"
                              id="outlined-basic"
                              label="Enter your password"
                              variant="outlined"
                              name="password"
                              value={props.values.password}
                              onChange={props.handleChange}
                              helperText={<ErrorMessage name="password" />}
                              error={
                                props.errors.password && props.touched.password
                              }
                            />
                            <FormControl>
                              {/* <FormLabel id="demo-row-radio-buttons-group-label">
                                Gender
                              </FormLabel> */}
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="gender"
                                onChange={props.handleChange}
                              >
                                <FormControlLabel
                                  value="female"
                                  control={
                                    <Radio
                                      sx={
                                        props.errors.gender &&
                                        props.touched.gender
                                          ? { color: "red" }
                                          : ""
                                      }
                                    />
                                  }
                                  label="Female"
                                />
                                <FormControlLabel
                                  value="male"
                                  control={
                                    <Radio
                                      sx={
                                        props.errors.gender &&
                                        props.touched.gender
                                          ? { color: "red" }
                                          : ""
                                      }
                                    />
                                  }
                                  label="Male"
                                />
                              </RadioGroup>
                            </FormControl>
                          </div>
                        </Box>
                      </Form>
                    </div>
                  )}
                </Formik>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="line"></div>
      <div>
        <h1 className="informationTitle">
          Let's get to know the Course information
        </h1>
        <p className="informationCourse">
          <span className="icon">
            <PersonIcon />
          </span>
          Course Teacher name
          <span className="info"> : {filteredData[0].name}</span>
        </p>
        <p className="informationCourse">
          <span className="icon">
            <HourglassEmptyIcon />
          </span>
          Course duration
          <span className="info"> : {filteredData[0].duration}</span>
        </p>
        <p className="informationCourse">
          <span className="icon">
            <CodeIcon />
          </span>
          Course name
          <span className="info"> : {filteredData[0].shortName}</span>
        </p>
        <p className="informationCourse">
          <span className="icon">
            <AttachMoneyIcon />
          </span>
          Course price<span className="info"> : {filteredData[0].price}</span>
        </p>
        <p className="informationCourse">
          <span className="icon">
            <LocalPhoneIcon />
          </span>
          Phone number for contact with us
          <span className="info"> : {filteredData[0].phone}</span>
        </p>
        <p className="informationCourse">
          <span className="icon">
            <PlaceIcon />
          </span>
          Location
          <span className="info"> : {filteredData[0].address.street}</span>
        </p>
      </div>
    </div>
  );
}

export default AboutCourse;
