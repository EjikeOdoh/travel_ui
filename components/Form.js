import { Formik, Form, Field, ErrorMessage } from "formik";

const FormComponent = () => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
