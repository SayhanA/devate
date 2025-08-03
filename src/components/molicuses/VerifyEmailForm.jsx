"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const VerifyEmailForm = () => {
  const router = useRouter();

  const [counter, setCounter] = useState(30);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [counter]);

  const handleResend = () => {
    setIsResending(true);
    setCounter(30);

    // Simulate API call
    setTimeout(() => {
      console.log("OTP resent");
      setIsResending(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto sm:mt-10 p-6 bg-white rounded-lg">
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .min(6, "Must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          router.push("/login");
        }}
      >
        <Form className="space-y-5">
          {/* OTP input */}
          <div>
            <label htmlFor="otp" className="block text-sm font-bold text-tp">
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
          {/* Countdown + Resend button */}
          <div className="text-sm flex items-center justify-between">
            {counter > 0 ? (
              <p className="text-gray-600">Resend available in {counter}s</p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className={`text-blue-600 hover:underline transition disabled:opacity-50`}
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </button>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};
