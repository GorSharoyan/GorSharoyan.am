import { Formik, Form, Field, ErrorMessage } from "formik";

// utils imports
import collectPlaceholders from "../../../utils/formUtils";

function GenericForm({
  inputInitalValues,
  formEntries,
  submitFunction,
  button
}) {
  // debugs
  console.log("Generic Form Form Etnries are", formEntries);
  console.log("Generic Forms initial values are", inputInitalValues);

  const formEntriesArray = collectPlaceholders(formEntries);
  if (!formEntries) {
    return <div>No Data</div>;
  } else {
    return (
      <Formik
        initialValues={inputInitalValues}
        onSubmit={(values) => submitFunction(values)}
      >
        <Form>
          {formEntriesArray.map((arrayEntry) => (
            <div key={arrayEntry}>
              <p>{arrayEntry}</p>
              <Field
                id={arrayEntry}
                name={arrayEntry}
                type={
                  arrayEntry.toLowerCase().includes("password")
                    ? "password"
                    : "text"
                }
                placeholder={`Enter ${arrayEntry}`}
              />
              <ErrorMessage name={arrayEntry} component="div" />
            </div>
          ))}
          {button}
        </Form>
      </Formik>
    );
  }
}
export default GenericForm;
