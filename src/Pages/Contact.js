// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { BiEnvelope } from "react-icons/bi";
// import "../Styles/contact.css";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   phone: Yup.string().required("Phone is required"),
// });
// const initialValues = {
//   name: "",
//   email: "",
//   phone: "",
//   message: "",
// };
// const Contact = () => {
//   const handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//     console.log(values);
//   };
//   return (
//     <>
//       <div className="MainContent">
//         <h2 className="getInTouch"> <i class="bi bi-headset"></i> Get in <span style={{color:"#7303A7"}}>Touch</span></h2>
//         <div className="getContent">
//           <div className="contactImage">
//             <img src="/images/contact.png" alt="loading" />
//           </div>
//           <div className="formik">
//             <div >
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 {({ isSubmitting }) => (
//                   <Form className="form">
//                     <div >
//                       <Field  className="inputField " type="text" id="name" name="name" placeholder="name"></Field>
//                       <ErrorMessage className="error" name="name" component="div" />
//                     </div>

//                     <div className="inputFieldWithIcon">
//   <div className="inputIconWrapper">
//     <BiEnvelope className="inputIcon" />
//   </div>
//   <Field
//     className="form-control"
//     type="email"
//     id="email"
//     name="email"
//     placeholder="Email"
//   />
//   <ErrorMessage className="error" name="email" component="div" />
// </div>

//                     {/* <div>
//                       <Field className="inputField" type="email" id="email" name="email" placeholder="Email" />
//                       <ErrorMessage className="error" name="email" component="div" />
//                     </div> */}

//                     <div>
//                       <Field className="inputField" type="text" id="phone" name="phone" placeholder="phone no" />
//                       <ErrorMessage className="error" name="phone" component="div" />
//                     </div>

//                     <div>
//                       <Field className="inputField" as="textarea" id="message" name="message" placeholder="message" />
//                       <ErrorMessage className="error" name="message" component="div" />
//                     </div>

//                     <button className="btnForm" type="submit" disabled={isSubmitting}>
//                       Submit
//                     </button>
//                   </Form>

//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaComment,
} from "react-icons/fa";
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
    <div className="MainContent">
      <h2 className="getInTouch">
        <FaHeadset className="icon" /> Get in{" "}
        <span style={{ color: "#7303A7" }}>Touch</span>
      </h2>
      <div className="getContent">
        <div className="contactImage">
          <img src="/images/contact.png" alt="loading" />
        </div>
        <div className="formik">
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="form">
                  <div className="inputFieldWithIcon">
                    <div className="inputIconWrapper">
                      <FaUser className="inputIcon" />
                    </div>

                    <Field
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      className="error"
                      name="name"
                      component="div"
                    />
                  </div>

                  <div className="inputFieldWithIcon">
                    <div className="inputIconWrapper">
                      <FaEnvelope className="inputIcon" />
                    </div>
                    <Field
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      className="error"
                      name="email"
                      component="div"
                    />
                  </div>

                  <div className="inputFieldWithIcon">
                    <div className="inputIconWrapper">
                      <FaPhone className="inputIcon" />
                    </div>

                    <Field
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone No"
                    />
                    <ErrorMessage
                      className="error"
                      name="phone"
                      component="div"
                    />
                  </div>

                  <div className="inputFieldWithIcon">
                    <div className="inputIconWrapper" id="msgIcon">
                      <FaComment className="inputIcon" />
                    </div>

                    <Field
                      className="form-control"
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Message"
                    />
                    <ErrorMessage
                      className="error"
                      name="message"
                      component="div"
                    />
                  </div>

                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
