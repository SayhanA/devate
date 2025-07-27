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
      <p className="text-3xl font-semibold">{title}</p>
    </strong>
  );
};

export default SectionTitle;
