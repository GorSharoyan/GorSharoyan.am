import { Formik, Form, Field, ErrorMessage } from "formik";

function GenericForm(formValues) {
  const formValuesArray = formValues;
  return (
    <Formik initialValues={formValues} onSubmit={console.log("form works")}>
      {() => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
}

export default GenericForm;
