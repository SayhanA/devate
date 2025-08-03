"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import CustomLink from "../atoms/CustomLink";

export const ResetPasswordForm = () => {
  const route = useRouter();

  return (
    <div className="max-w-md mx-auto sm:mt-10 p-6 bg-white rounded-lg">
      <Formik
        initialValues={{
          otp: "",
          password: "",
        }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .matches(/^\d{5}$/, "OTP must be exactly 5 digits.")
            .required("OTP is required"),
          password: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          route.push("/login");
        }}
      >
        <Form className="space-y-5">
          {/* OTP */}
          <div>
            <label htmlFor="otp" className="block text-sm text-tp font-bold">
              Token
            </label>
            <Field
              name="otp"
              type="text"
              id="otp"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="12345"
            />
            <ErrorMessage name="otp">
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
