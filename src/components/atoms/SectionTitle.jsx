import { twMerge } from "tailwind-merge";

const SectionTitle = ({
  className = "",
  tag = "",
  title = "",
  children = null,
  ...props
}) => {
  return (
    <strong
      className={twMerge(`text-tp font-semibold ${className}`)}
      {...props}
    >
      <p className="font-bold">{tag}</p>
      <p className="sm:text-4xl text-2xl font-semibold mt-3">{title}</p>
    </strong>
  );
};

export default SectionTitle;
