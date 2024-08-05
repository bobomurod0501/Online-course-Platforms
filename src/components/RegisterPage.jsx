import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, useFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




function RegisterPage() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Must be 1 characters or more")
      .required("Name is required"),
    lastName: Yup.string()
      .min(1, "Must be 1 characters or more")
      .required("Last Name is required"),
    phone: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required(" Phone number is required"),
  });
  const navigate = useNavigate();



  return (
    <div className="loginBack">
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigate("/home")
        }}
        initialValues={{
          name: "",
          lastName: "",
          phone: "",
        }}
      >
        {({ handleChange, errors, touched, values }) => (
          <Form className="form">
            <div className="inputs">
              <h1 className="login">Log In</h1>

              <TextField
                style={{ width: "350px" }}
                id="outlined-basic"
                label=" Name"
                variant="outlined"
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
                // fullWidth
                helperText={errors.name && touched.name ? errors.name : null}
                error={errors.name && touched.name}
              />
              <TextField
                style={{ width: "350px" }}
                id="outlined-basic"
                label=" Last Name"
                variant="outlined"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                // fullWidth
                helperText={
                  errors.lastName && touched.lastName ? errors.lastName : null
                }
                error={errors.lastName && touched.lastName}
              />
              <TextField
                style={{ width: "350px" }}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type={Number}
                name="phone"
                onChange={handleChange}
                value={values.phone}
                // fullWidth
                helperText={errors.phone && touched.phone ? errors.phone : null}
                error={errors.phone && touched.phone}
              />
              <div className="submitBtn">
              <Button  type="submit" variant="contained">
                Submit
              </Button>
              <Button type="reset" variant="outlined" color="error">
                Reset
              </Button>
              </div>
            </div>
            <div className="imgBox">
              <img
                className="hatImg"
                src="https://media.licdn.com/dms/image/C4E12AQEDeCCEYYZMBg/article-cover_image-shrink_720_1280/0/1607783013172?e=2147483647&v=beta&t=2LFfDn-epyxncS4roPnAeKW9h5_cnVMjz44FUD0Hq54"
                alt=""
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;