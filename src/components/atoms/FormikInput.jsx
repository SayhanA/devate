import { ErrorMessage, Field } from "formik";

const FormikInput = ({
  type = "text",
  label = undefined,
  id = "",
  name = "",
  placeholder = "",
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <Field name={name} type={type} id={id} placeholder={placeholder} />
      <ErrorMessage name={name}>
        {(msg) => (
          <div className="text-red-500">
            {typeof msg === "string" ? msg : JSON.stringify(msg)}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};

export default FormikInput;
