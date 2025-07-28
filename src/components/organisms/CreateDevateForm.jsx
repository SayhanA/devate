"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";

const categories = [
  "Technology",
  "Politics",
  "Society",
  "Work & Career",
  "Environment",
  "Health",
  "Education",
  "Entertainment",
];

const tagsList = [
  "AI",
  "Climate",
  "Crypto",
  "Social Media",
  "Healthcare",
  "Education",
  "Politics",
];

const durations = [
  { label: "1 hour", value: 1 },
  { label: "12 hours", value: 12 },
  { label: "24 hours", value: 24 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  duration: Yup.number().required("Duration is required"),
});

export default function CreateDevateForm() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-background rounded-md shadow-md mt-10 mb-20 text-text-dark">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create a New Debate
      </h1>

      <Formik
        initialValues={{
          title: "",
          description: "",
          category: categories[0],
          tags: [],
          duration: 1,
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Debate data:", values);
          alert("Debate created successfully!");
          router.push("/debates");
        }}
      >
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form className="space-y-6 text-text-lite">
            {/* Title */}
            <div>
              <label htmlFor="title" className="font-semibold block mb-1">
                Title <span className="text-red-600">*</span>
              </label>
              <Field
                name="title"
                placeholder="Enter debate title"
                className="w-full p-3 border border-[--color-border] rounded bg-[--color-background] text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="font-semibold block mb-1">
                Description <span className="text-red-600">*</span>
              </label>
              <Field
                as="textarea"
                name="description"
                rows="5"
                placeholder="Enter a detailed description..."
                className="w-full p-3 border border-[--color-border] rounded bg-[--color-background] text-[--color-text-dark] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="font-semibold block mb-1">
                Category <span className="text-red-600">*</span>
              </label>
              <Field
                as="select"
                name="category"
                className="w-full p-2 border border-[--color-border] rounded bg-[--color-background] text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="category"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block mb-2 font-semibold text-[--color-text-dark]">
                Tags (select multiple)
              </label>
              <div className="flex flex-wrap gap-2">
                {tagsList.map((tag) => {
                  const isActive = values.tags.includes(tag);
                  return (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => {
                        const newTags = isActive
                          ? values.tags.filter((t) => t !== tag)
                          : [...values.tags, tag];
                        setFieldValue("tags", newTags);
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-[--color-bg-secondary] text-[--color-text-dark] hover:bg-blue-100"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label
                htmlFor="duration"
                className="block mb-1 font-semibold text-[--color-text-dark]"
              >
                Debate Duration <span className="text-red-600">*</span>
              </label>
              <Field
                as="select"
                name="duration"
                className="w-full p-2 border border-[--color-border] rounded bg-[--color-background] text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {durations.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="duration"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label
                htmlFor="image"
                className="block mb-1 font-semibold text-[--color-text-dark]"
              >
                Image/Banner (optional)
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) =>
                  setFieldValue("image", event.currentTarget.files[0])
                }
                className="w-full text-sm text-[--color-text-dark]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
            >
              Create Debate
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
