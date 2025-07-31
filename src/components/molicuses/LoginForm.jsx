"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import CustomLink from "../atoms/CustomLink";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    setErrorMessage("");

    const res = await signIn("credentials", {
      redirectTo: "/",
      email: values.email,
      password: values.password,
    });

    if (res?.error) {
      setErrorMessage("Invalid email or password");
    } else {
      router.push("/");
    }

    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <CustomLink
                href="/forgot-password"
                className="block text-right text-sm text-blue-500 mt-1 hover:underline border-0 pt-0"
              >
                Forgot Password?
              </CustomLink>
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
