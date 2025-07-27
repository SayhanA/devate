"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
  const route = useRouter();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
          terms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
            .required("You must accept the terms and conditions"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          route.push("/verify-email");
        }}
      >
        <Form className="space-y-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm text-tp font-bold"
            >
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              id="firstName"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rahim Mullah"
            />
            <ErrorMessage name="firstName">
              {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
            </ErrorMessage>
          </div>

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
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-tp font-bold"
            >
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rahim6"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
            </ErrorMessage>
          </div>

          <div className="flex items-center space-x-2">
            <Field
              type="checkbox"
              name="terms"
              id="terms"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium text-gray-900"
            >
              I accept the terms
            </label>
          </div>
          <ErrorMessage name="terms">
            {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
          </ErrorMessage>
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
