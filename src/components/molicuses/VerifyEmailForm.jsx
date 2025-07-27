"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export const VerifyEmailForm = () => {
  const route = useRouter();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          route.push("/login");
        }}
      >
        <Form className="space-y-5">
          {/* otp */}
          <div>
            <label htmlFor="otp" className="block text-sm text-tp font-bold">
              OTP
            </label>
            <Field
              name="otp"
              type="text"
              id="otp"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rahim6"
            />
            <ErrorMessage name="otp">
              {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
            </ErrorMessage>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
