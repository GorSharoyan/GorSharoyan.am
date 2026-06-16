//library imports
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
//UI
import "./GenericForm.css";
// utils imports
import collectPlaceholders, { collectSchemas } from "../../../utils/formUtils";

function GenericForm({
  formEntries,
  submitFunction,
  button,
  inputInitialValues
}) {
  // debugs
  console.log("Generic Form Form Etnries are", formEntries);
  console.log("Generic Form Initial Values are", inputInitialValues);

  if (!formEntries) {
    return <div>No Data</div>;
  } else {
    return (
      <div className="generic-form-container">
        <Formik
          // this part of formik is responsilbe for initial values of the fomrm
          // formik should rescieve and object with all the names that actually should carry the inputs values
          initialValues={inputInitialValues}
          enableReinitialize={true}
          // this part of formik is actually responsilbe for the validaton and errors.
          // if there is no errors object selected errors will not be rendered in form if something is missing
          validate={(values) => {
            const errors = {};

            formEntries.forEach((field) => {
              if (!values[field.name]) {
                errors[field.name] = `${field.name} is required`;
              }
            });

            return errors;
          }}
          onSubmit={async (values, { resetForm }) => {
            await submitFunction(values);
            resetForm();
          }}
        >
          <Form>
            {formEntries.map(
              (arrayEntry) => (
                console.log("array entry is", arrayEntry),
                console.log("array entry name is", arrayEntry.name),
                (
                  <div key={arrayEntry.name}>
                    <label>{arrayEntry.label}</label>
                    <Field
                      id={arrayEntry.id}
                      name={arrayEntry.name}
                      type={arrayEntry.type}
                      placeholder={`Enter ${arrayEntry.name}`}
                    />
                    <ErrorMessage name={arrayEntry.name} component="div" />
                  </div>
                )
              )
            )}
            <div>{button}</div>
          </Form>
        </Formik>
      </div>
    );
  }
}
export default GenericForm;
// submitFunction(values);
// resetForm();
