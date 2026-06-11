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
  const inputInitalValues = collectSchemas(formEntries);

  //Hooks for  changing the form after the button has been pushed
  const [isSubmitted, setIsSubmitted] = useState(false);

  // debugs
  console.log("Generic Form Form Etnries are", formEntries);
  console.log("Generic Form Initial Values are", inputInitalValues);

  useEffect(() => {
    if (isSubmitted) {
      // Reset the form or perform any other actions after submission
      setIsSubmitted(false); // Reset the submission state
    }
  }, [isSubmitted]);

  if (!formEntries) {
    return <div>No Data</div>;
  } else {
    return (
      <div className="generic-form-container">
        <Formik
          initialValues={inputInitalValues}
          onSubmit={(values, { resetForm }) => {
            submitFunction(values);
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
                    {/* <ErrorMessage name={arrayEntry.name} component="div" /> */}
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
