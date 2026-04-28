import { Formik, Form, Field, ErrorMessage } from "formik";

// utils imports
import collectPlaceholders, { collectSchemas } from "../../../utils/formUtils";

function GenericForm({
  // inputInitalValues,
  formEntries,
  submitFunction,
  button
}) {
  const inputInitalValues = collectSchemas(formEntries);

  // debugs
  console.log("Generic Form Form Etnries are", formEntries);
  console.log("Generic Form Initial Values are", inputInitalValues);

  if (!formEntries) {
    return <div>No Data</div>;
  } else {
    return (
      <Formik
        initialValues={inputInitalValues}
        onSubmit={(values, { resetForm }) => {
          submitFunction(values);
          resetForm();
        }}
      >
        <Form>
          {formEntries.map((arrayEntry) => (
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
          ))}
          {button}
        </Form>
      </Formik>
    );
  }
}
export default GenericForm;
