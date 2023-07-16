import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Styles/contact.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});
const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const Contact = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    console.log(values);
  };
  return (
    <>
      <div className="MainContent">
        <h2 className="getInTouch"> <i class="bi bi-headset"></i> Get in <span style={{color:"#7303A7"}}>Touch</span></h2>
        <div className="getContent">
          <div className="contactImage">
            <img src="/images/contact.png" alt="loading" />
          </div>
          <div className="formik">
            <div >
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="form">
                    <div >
                      <Field  className="inputField " type="text" id="name" name="name" placeholder="name"></Field>
                      <ErrorMessage className="error" name="name" component="div" />
                    </div>
                    

                    <div>
                      <Field className="inputField" type="email" id="email" name="email" placeholder="Email" />
                      <ErrorMessage className="error" name="email" component="div" />
                    </div>

                    <div>
                      <Field className="inputField" type="text" id="phone" name="phone" placeholder="phone no" />
                      <ErrorMessage className="error" name="phone" component="div" />
                    </div>

                    <div> 
                      <Field className="inputField" as="textarea" id="message" name="message" placeholder="message" />
                      <ErrorMessage className="error" name="message" component="div" />
                    </div>

                    <button className="btnForm" type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </Form>
                  
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
