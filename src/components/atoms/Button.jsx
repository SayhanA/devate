import { cn } from "@/utils/twMergeUtil";

const Button = ({
  children = null,
  className = "",
  type = "",
  secondBtn = false,
  ...props
}) => {
  const variants =
    secondBtn === false
      ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
      : "hover:border-blue-500 border-blue-300";

  return (
    <button
      type={type}
      className={cn(
        `px-4 py-2 border border-border text-ts cursor-pointer font-semibold ${variants} ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
