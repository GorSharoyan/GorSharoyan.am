import { Formik, Form, Field, ErrorMessage } from "formik";

function GenericForm(formEntries, onSubmitServiceFunction, button) {
  const formFieldsArray = Object.keys(formEntries);

  return (
    <Formik initialValues={formEntries} onSubmit={onSubmitServiceFunction}>
      {() => (
        <Form>
          {formFieldsArray.map((fieldName) => (
            <div key={fieldName}>
              <Field
                id={fieldName}
                name={fieldName}
                type={
                  fieldName.toLowerCase().includes("password")
                    ? "password"
                    : "text"
                }
                placeholder={`Enter ${fieldName}`}
              />
              <ErrorMessage name={fieldName} component="div" />
            </div>
          ))}
          {button}
        </Form>
      )}
    </Formik>
  );
}

export default GenericForm;
