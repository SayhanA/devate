"use client";

import { useFormik } from "formik";
import { useState } from "react";

const categories = [
  "All Categories",
  "Technology",
  "Politics",
  "Society",
  "Work & Career",
  "Environment",
  "Health",
  "Education",
  "Entertainment",
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "ending-soon", label: "Ending Soon" },
  { value: "most-voted", label: "Most Voted" },
  { value: "most-participants", label: "Most Participants" },
];

const popularTags = [
  "AI",
  "remote-work",
  "climate",
  "crypto",
  "social-media",
  "healthcare",
  "education",
];

export function SearchDebates() {
  const [activeTags, setActiveTags] = useState([]);

  const formik = useFormik({
    initialValues: {
      searchQuery: "",
      category: "All Categories",
      sort: "newest",
    },
    onSubmit: () => {}, // Not needed now but required by Formik
  });

  const { values, handleChange, resetForm } = formik;

  const handleTagToggle = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    resetForm();
    setActiveTags([]);
  };

  return (
    <div className="bg-[--color-card-bg] text-[--color-text-dark] rounded-lg p-6 shadow-sm border border-[--color-border] space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[--color-icon] h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          name="searchQuery"
          placeholder="Search debates by title, description, or tags..."
          value={values.searchQuery}
          onChange={handleChange}
          className="pl-10 w-full px-4 py-2 border border-[--color-border] rounded-lg bg-[--color-background] text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          name="category"
          value={values.category}
          onChange={handleChange}
          className="w-full sm:w-48 px-3 py-2 border border-[--color-border] rounded-lg bg-[--color-background] text-[--color-text-dark]"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          name="sort"
          value={values.sort}
          onChange={handleChange}
          className="w-full sm:w-48 px-3 py-2 border border-[--color-border] rounded-lg bg-[--color-background] text-[--color-text-dark]"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          onClick={clearFilters}
          type="button"
          className="flex items-center justify-center px-4 py-2 bg-[--color-background] text-[--color-text-dark] border border-[--color-border] rounded-lg hover:bg-[--color-bg-secondary] transition"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
            />
          </svg>
          Clear Filters
        </button>
      </div>

      {/* Popular Tags */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Popular Tags:</p>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              type="button"
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeTags.includes(tag)
                  ? "bg-blue-600 text-white"
                  : "bg-[--color-bg-secondary] text-[--color-text-dark] hover:bg-blue-100"
              }`}
            >
              {tag}
              {activeTags.includes(tag) && (
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(values.searchQuery ||
        values.category !== "All Categories" ||
        values.sort !== "newest" ||
        activeTags.length > 0) && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[--color-border]">
          <span className="text-sm text-[--color-text-lite]">
            Active filters:
          </span>
          {values.searchQuery && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]">
              Search: "{values.searchQuery}"
            </span>
          )}
          {values.category !== "All Categories" && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]">
              Category: {values.category}
            </span>
          )}
          {values.sort !== "newest" && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]">
              Sort: {sortOptions.find((o) => o.value === values.sort)?.label}
            </span>
          )}
          {activeTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]"
            >
              Tag: {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
