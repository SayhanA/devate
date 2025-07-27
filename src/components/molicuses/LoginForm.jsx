"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLink from "../atoms/CustomLink";

export const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-tp font-bold">
              Email Address
            </label>
            <Field
              name="email"
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="rahimmolla@gmail.com"
            />
            <ErrorMessage name="email">
              {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
            </ErrorMessage>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-tp font-bold"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rahim6"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
            </ErrorMessage>
            <CustomLink
              href="/forgot-password"
              className="p-0 block text-right border-0 text-sm text-blue-500 underline"
            >
              Forgot Password
            </CustomLink>
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
